import { BrowserRouter, useLocation } from "react-router-dom";
import Router from "./routes/routes";
import { useEffect } from "react";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const title =
      path === "/"
        ? "Home"
        : path.slice(1).charAt(0).toUpperCase() + path.slice(2); // Convert path to title format
    document.title = `Velodate - ${title}`; // Update title
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <TitleUpdater />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
