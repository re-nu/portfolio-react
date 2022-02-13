
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


export function About() {
  return (
    <div className="about" id="about">
      <div className="left-about">
        
        <p className="about-content"> Completed electronics and telecommuniction engineering,<br/>
             from Deogiri institude of engineering and management studies,<br/>
             Aurangabad ,Maharashtra<br/><br/>
             Rank holder in MASSAI competition,<br/>
             industrial project competition
        </p>  
        <div className="links">
          <a className="links-icon" href="https://github.com/re-nu"><GitHubIcon sx={{ fontSize: 50 }}/></a>
          <a className="links-icon" href="https://www.linkedin.com/in/renuka-borade-269082122/"><LinkedInIcon sx={{ fontSize: 50 }}/></a>
          <a className="links-icon" href="https://drive.google.com/file/d/1TmFozBHJkm5M0_b1SBxzqLw_wUQAks_I/view?usp=sharing"><InsertDriveFileIcon sx={{ fontSize: 50 }}/></a>
        </div>
      </div>
      <div>
      <img
          className="right-about"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGj6M_G-l3Px7MRfvcTKH1qqf6J00S-M7f3fVxnJ-Lo6liZpzFaKWD1J06stZq4nH_38&usqp=CAU"
          alt="full stack"
        />
      </div>
        
    </div>
  );
}
