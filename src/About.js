import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useHistory } from "react-router-dom";

export function About() {
  const history = useHistory();
  return (
    <div className="about" id="about">
      <div className="left-about">
        <h3 className="about-hi">Hi I'm </h3>
        <h2 className="about-name">RENUKA BORADE</h2>
        <h4 className="about-flstack">Full stack developer</h4>
        <p className="about-content"> Completed electronics and telecommuniction engineering,<br/>
             from Deogiri institude of engineering and management studies,<br/>
             Aurangabad ,Maharashtra
        </p>
        <div className="links">
          <a href="https://github.com/re-nu"><GitHubIcon sx={{ fontSize: 50 }}/></a>
          <a href="https://www.linkedin.com/in/renuka-borade-269082122/"><LinkedInIcon sx={{ fontSize: 50 }}/></a>
          <a href="https://twitter.com/Borade_ReNuKa"><TwitterIcon sx={{ fontSize: 50 }}/></a>
          <a href="https://drive.google.com/file/d/1TmFozBHJkm5M0_b1SBxzqLw_wUQAks_I/view?usp=sharing"><InsertDriveFileIcon sx={{ fontSize: 50 }}/></a>
        </div>
      </div>
        <img
          className="right-about"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-i7Il3mF9QhZdQ9VaYGa15zh12t7kMopbA&usqp=CAU"
          alt="full stack"
        />
    </div>
  );
}
