import { setCookie, destroyCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface SignInCredentials {
  email: string;
  password: string;
}

type User = {
  id: number;
  email: string;
  name: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  getUserProfile(token: string): Promise<void>;
  user: User | null;
  isAuthenticated: boolean;
  signOut: () => void;
  userTypeId: string | null;
  userType: User | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<User | null>(null);
  const [userTypeId, setUserTypeId] = useState<string | null>(null);
  const navigate = useNavigate();
  const isAuthenticated = !!user;

  useEffect(() => {
    const loggedInUser = localStorage.getItem("@sst-user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      navigate("/dashboard");
    } else {
      setUser(null);
      navigate("/");
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post(`login`, {
        email: email,
        password: password,
      });

      const userToken = response.data.token;

      localStorage.setItem("@sst-user", JSON.stringify(userToken));

      setCookie(undefined, "sstAuth.token", userToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      api.defaults.headers["Authorization"] = `Bearer ${userToken}`;

      setUser(userToken);
      toast.success("Autenticado com sucesso!");

      await getUserProfile(userToken);

      if (response.data.type) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      toast.error("Credenciais inválidas");
      setUser(null);
      console.log(err);
    }
  }

  async function getUserProfile(token: string) {
    try {
      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userType = response.data.user.type;
      const userTypeData = response.data.switchedUser[userType];
      const userTypeId = userTypeData ? userTypeData.id : null;

      setUserTypeId(userTypeId);
      setUserType(userType);
    } catch (error) {
      console.error("Erro ao obter o perfil do usuário:", error);
      throw error;
    }
  }

  function signOut() {
    destroyCookie(undefined, "sstAuth.token");
    destroyCookie(undefined, "sstAuth.refreshToken");
    localStorage.removeItem("@sst-user");

    navigate("/");
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        getUserProfile,
        isAuthenticated,
        user,
        signOut,
        userTypeId,
        userType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
