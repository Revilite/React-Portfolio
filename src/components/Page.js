import React, { useState } from 'react'
import Home from "./pages/Home"
import About from "./pages/About"


export default function Page() {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    switch (activePage) {
      case "Home":
      return <Home />;
      break;
    }
  }

  return (
    <div>
    {renderPage}
    </div>
  );
}
