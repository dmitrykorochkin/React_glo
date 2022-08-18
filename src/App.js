import "./styles.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Features } from "./components/Features";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer"
export const App = () => {
  return (
    <div className ="App">
      <Header />
      <Main />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};
