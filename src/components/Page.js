import React, { useState } from 'react'
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import Navbar from './Navbar'
import Header from "./Header"

export default function Page() {
  const [activePage, setActivePage] = useState("About");

  const handlePageChange = (page) => setActivePage(page);

  const renderPage = () => {
    switch (activePage) {
      case "Portfolio":
        return <Portfolio />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

    }
  }

  return (
    <div>
      <Header />
      <div>
        <Navbar activePage={activePage} handlePageChange={handlePageChange} />
      </div>
      <div>
        {renderPage()}
      </div>
    </div>
  );
}
