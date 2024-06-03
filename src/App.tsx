import Aos from "aos";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import "aos/dist/aos.css";

Aos.init();

function App() {
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
