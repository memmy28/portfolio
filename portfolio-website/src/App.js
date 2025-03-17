import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./AppMain"
import Layout from "./Layout"

import SectionEducation from "./components/SectionEducation";
import SectionExperience from "./components/SectionExperience";
import SectionSkills from "./components/SectionSkills";
import SectionProjects from "./components/SectionProjects";
import SectionSports from "./components/SectionSports";
import SectionHobbies from "./components/SectionHobbies";
import SectionContact from "./components/SectionContact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* routes */}
          <Route path="/ausbildung" element={<SectionEducation />} />
          <Route path="/erfahrungen" element={<SectionExperience />} />
          <Route path="/skills" element={<SectionSkills />} />
          <Route path="/projekte" element={<SectionProjects />} />
          <Route path="/sportliche-karriere" element={<SectionSports />} />
          <Route path="/hobbies" element={<SectionHobbies />} />
          <Route path="/kontakt" element={<SectionContact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
