import About from "./components/About";
import Footer from "./components/Footer";
import Works from "./components/Works";
import YoutubeWorks from "./components/YoutubeWorks";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <Header />
      <About />
      {/* <YoutubeVideo embedId={"rokGy0huYEA"} /> */}
      <YoutubeWorks />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
