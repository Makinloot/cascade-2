import About from "./components/About";
import Footer from "./components/Footer";
import Works from "./components/Works";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <Header />
      <About />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
