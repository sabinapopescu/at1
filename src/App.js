import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Acasa from "./pages/Acasa";
import Despre from "./pages/Despre";
import Activitati from "./pages/Activitati";
import Blog from "./pages/Blog";
import TravalizerDesktop from "./pages/TravalizerDesktop";
import Resurse from "./pages/Resurse";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/despre":
        title = "";
        metaDescription = "";
        break;
      case "/activitati":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/travalizer-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/resurse":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Acasa />} />
      <Route path="/despre" element={<Despre />} />
      <Route path="/activitati" element={<Activitati />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/travalizer-desktop" element={<TravalizerDesktop />} />
      <Route path="/resurse" element={<Resurse />} />
    </Routes>
  );
}
export default App;
