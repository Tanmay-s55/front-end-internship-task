import Navbar from "./components/Navbar"
import Header from "./components/Header";
import Info from "./components/Info";
import Offerings from "./components/Offerings";
import Team from "./components/Team";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <div className="primary">
      <Navbar />
      <Header />
      <Info />
      <Offerings />
      <Team />
      <Blogs />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
