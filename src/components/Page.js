import React, { useState } from 'react'
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import Navbar from './Navbar'


export default function Page() {
  const [activePage, setActivePage] = useState("About");

  const handlePageChange = (page) => setActivePage(page);

  const renderPage = () => {
    switch (activePage) {
      case "Portfolio":
        return <Portfolio />;
        break;
      case "About":
        return <About />;
        break;
      case "Contact":
        return <Contact />;
        break;
      case "Resume":
        return <Resume />;
        break;
    }
  }

  return (
    <div>
    <Navbar activePage={activePage} handlePageChange={handlePageChange} />
      
    <div>
      {renderPage()}
    </div>
    </div>
  );
}
