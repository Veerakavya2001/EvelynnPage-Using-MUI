import "./App.css";

import MainContainer from "./component/container/Container";
import PricingPage from "./component/pricingcomponent/Pricingcomponent";
import Customers from "./component/Customers/Customer";
import Footer from "./component/Footer/Footer";
import Themecontext from "./commoncomponent/Theme/Theme";
import { useState } from "react";
import Header from "./component/Header/Header";


function App() {
  const [theme, setTheme] = useState("light");
  console.log(theme);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="App" id={theme}>
      <Themecontext.Provider value={{ theme, toggleTheme }}>
        <Header />
        <MainContainer />
        <PricingPage />
       
        <Customers />
        
       

        <Footer />
      </Themecontext.Provider>
    </div>
  );
}

export default App;
