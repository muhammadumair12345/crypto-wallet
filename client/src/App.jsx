import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Welcome from "./components/Welcome.jsx";

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto lg:w-[80%] px-8">
        <Welcome />
        <Footer />
      </div>
    </>
  );
};

export default App;
