import "./styles.css";
import { Header }  from "./components/Header";
import { Main } from "./components/Main";
import { Features } from "./components/Features";
export const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Features />
    </div>
  );
}
