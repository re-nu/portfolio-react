import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from "@mui/icons-material/GitHub";

export function Projects() {
  const projects=[
    {
      name:" Repos of github users",
      discription:"this will display all repos of the user ,this application is designed with HTML,CSS,JS",
      demo:"https://determined-euclid-91be43.netlify.app/",
      github:"https://github.com/re-nu/userRepos",
      img:""
    },
    {
      name:"Add from data into table",
      discription:"In this application ,after submiting the form the data from fields is inserted into new row , this application is designed with HTML,CSS,JS",
      demo:"https://nifty-lovelace-ae95e7.netlify.app/",
      github:"https://github.com/re-nu/AddDataToTable",
      img:""
    },
    {
      name:"Calculator",
      discription:"I have designed calculator which accepts input from keyboard keys as well as from calculator keys,this application desihn using HTML,CSS,JS",
      demo:"https://vibrant-perlman-a1994f.netlify.app/",
      github:"https://github.com/re-nu/calculator",
      img:""
    },
    {
      name:"CRUD with form validation",
      discription:"complete curd (create update read delete) using api , form validation using formik in react",
      demo:"https://hardcore-ptolemy-965646.netlify.app/",
      github:"https://github.com/re-nu/products",
      img:""
    },
  ]
  return (
    <div className="projects" id='projects'>
      <div className="project-title">
        PROJECTS
      </div>
      {projects.map(({name,discription,demo,github})=>(
        <ProjectLayout name={name} discription={discription} demo={demo} github={github} />
      ))}
    
    </div>
  );
}

function ProjectLayout({name,discription,demo,github}) {
  return(
    <div className="project-layout">
      <div className="relative">
        <h2>{name}</h2>
        <p>view app:<a href={demo}><OpenInNewIcon/></a></p>
      </div>
      <div className="absolute">
        <p>{discription}</p>
        <p>view code:<a href={github}><GitHubIcon/></a></p>
      </div>
    </div>
  )
}