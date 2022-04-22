import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import WorkExperience from "./pages/WorkExperience";
import Home from "./pages/Home";
import Whoops404 from "./pages/Whoops404";
import Projects from "./pages/Projects";
import { useLocation } from "react-router-dom";


function Layout() {
  const location = useLocation();
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Layout;
