import styled from "styled-components";

interface CustomModalContainerProps {
  mode: string;
}

export const CustomModalContainer = styled.form<CustomModalContainerProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  .contentContainer {
    max-width: 700px;
    margin: 0 1rem;
    width: 100%;
    height: fit-content;

    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    .description {
      padding: 20px 30px;

      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      /* or 150% */

      color: #000000;
    }

    .modalHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 18px 10px 35px;
      background: ${(props) =>
        props.mode === "create" || props.mode === "edit"
          ? "var(--azul-piscina)"
          : "var(--vermelho-vinho)"};
      border-radius: 10px 10px 0px 0px;

      svg {
        color: var(--cinza-claro);
      }

      p {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;

        text-align: center;

        color: #ffffff;
      }

      .modalCloseButton {
        transition: 0.15s ease;
        &:hover {
          background-color: #ffffff;

          svg {
            color: ${(props) =>
              props.mode === "create" || props.mode === "edit"
                ? "var(--azul-piscina)"
                : "var(--vermelho-vinho)"};
          }
        }
      }
    }

    .modalFooter {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 15px 15px 15px 15px;

      button {
        padding: 0 16px;
        border-radius: 4px;

        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        text-align: center;

        color: #ffffff;
        text-transform: none !important;

        p {
          color: #ffffff;
        }
      }

      .submitModal {
        background: ${(props) =>
          props.mode === "create" || props.mode === "edit"
            ? "var(--azul-piscina)"
            : "var(--vermelho-vinho)"};
        color: var(--cinza-claro);

        &:hover {
          background: ${(props) =>
            props.mode === "create" || props.mode === "edit"
              ? "#ecf8ff"
              : "#FFF5F8"};

          p {
            color: ${(props) =>
              props.mode === "create" || props.mode === "edit"
                ? "var(--azul-piscina)"
                : "var(--vermelho-vinho)"};
          }
        }
      }
    }
  }
`;
