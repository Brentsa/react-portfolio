import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/About";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {

  //create an array of names for the nav menu
  const [menuItems] = useState(["About Me","Portfolio","Resume" /*,"Contact"*/ ]);

  //create a state for the navigation menu
  const [currentPage, setPage] = useState(menuItems[0]);

  //conditionally render the various components based on the page name given as an argument
  function renderPage(page){
    switch(page){
      case menuItems[0]:
        return <AboutMe/>;

      case menuItems[1]:
        return <Portfolio/>;

      case menuItems[2]:
        return <Resume/>;
        
      // case menuItems[3]:
      //   return <ContactForm/>;

      //***shouldnt occur but it will present About Me section
      default:
        return <AboutMe/>;
    }
  }

  return (
    <div className="wrapper d-flex flex-column justify-content-between">
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
