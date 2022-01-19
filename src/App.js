import "./App.css";

import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Achievements } from "./Achievements";
import { Experience } from "./Experience";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <div className="app-bar">
        <div className="bar-left">Renuka Borade</div>
        <div className="bar-right">
          <a href="#about" style={{ textDecoration: "none" }}>
            <Button size="large" variant="text">
              About
            </Button>
          </a>

          <a href="#skills" style={{ textDecoration: "none" }}>
            <Button
              // onClick={() => window.location="#skills"}
              size="large"
              variant="text"
            >
              skills
            </Button>
          </a>

          <a href="#projects" style={{ textDecoration: "none" }}>
            <Button
              // onClick={() => history.push("/projects")}
              size="large"
              variant="text"
            >
              Projects
            </Button>
          </a>
          {/* <a href="#experience" style={{ textDecoration: "none" }}>
            <Button
              // onClick={() => history.push("/experience")}
              size="large"
              variant="text"
            >
              Experience
            </Button>
          </a> */}

          <a href="#achivements" style={{ textDecoration: "none" }}>
            <Button
              // onClick={() => history.push("/achievements")}
              size="large"
              variant="text"
            >
              Achievements
            </Button>
          </a>
        </div>
      </div>

      {/* <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/achievements">
          <Achievements />
        </Route>
      </Switch> */}
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Achievements />
    </div>
  );
}

export default App;
