import Card from "./components/Card";
import Customer from "./components/Customer";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Network from "./components/Network";
import Plans from "./components/Plans";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Card />
      <Features />
      <Plans />
      <Network />
      <Customer />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
