import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/About";
import ContactForm from "./components/Contact";
import { useState } from "react";

function App() {

  const [menuItems] = useState(["About Me","Portfolio","Contact","Resume"]);

  const [currentPage, setPage] = useState(menuItems[0]);

  function renderPage(page){
    switch(page){
      case menuItems[0]:
        return <AboutMe/>;

      case menuItems[1]:
        return <div>Portfolio</div>;

      case menuItems[2]:
        return <ContactForm/>;

      case menuItems[3]:
        return <div>Resume</div>;

      default:
        return <AboutMe/>;
    }
  }

  return (
    <div className='flex-column justify-flex-start'>
      <Header
        currentPage={currentPage}
        setPage={setPage}
        menuItems={menuItems}
      />
        <main className='container'>
            {renderPage(currentPage)}
        </main>
      <Footer/>
    </div>
  );

}

export default App;
