import "./styles.css";
import Navbar from "../../layout/navbar";
import AboutUs from "../../home/aboutUs";
import OurServices from "../../home/ourServices";
import Soluctions from "../../home/soluctions";
import Flyer from "../../home/flyer";
import Contact from "../../home/contact";
import Footer from "../../layout/Footer";

function Home() {
  return (
    <header>
      <Navbar />
      <AboutUs />
      <OurServices />
      <Soluctions />
      <Flyer />
      <Contact />
      <Footer />
    </header>
  );
}

export default Home;
