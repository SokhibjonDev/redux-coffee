import "./App.css";
import Add from "./components/add/Add";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Partner from "./components/partner/Partner";
function Home() {
  return (
    <div className="Home">
      <header>
        <Navbar />
        <Header />
      </header>
      <div className="container">
        <div className="card">
          <img
            className="pattern"
            src="http://www.downloadclipart.net/medium/29620-scroll-images.png"
            alt=""
          />
          <h1 className="title">Coffees for you !</h1>
          <img
            className="pattern"
            src="http://www.downloadclipart.net/medium/29620-scroll-images.png"
            alt=""
          />
          <div className="Cards">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="Cards">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      <Partner />
      </div>{" "}
      <div className="Add-reklam">
        <img
          className="pattern"
          src="http://www.downloadclipart.net/medium/29620-scroll-images.png"
          alt=""
        />
        <h1 className="title">About us</h1>
        <img
          className="pattern"
          src="http://www.downloadclipart.net/medium/29620-scroll-images.png"
          alt=""
        />
        <Add />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
