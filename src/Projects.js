import Button from '@mui/material/Button';

export function Projects() {
  const projects=[
    
    {
      name:"CRUD with form validation",
      discription:"complete curd (create update read delete) using api , form validation using formik in react",
      demo:"https://hardcore-ptolemy-965646.netlify.app/",
      github:"https://github.com/re-nu/products",
      img:""
    },
    {
      name:"Shopping cart",
      discription:"shopping cart ,add items to to cart,update quantity,remove item from cart",
      demo:"",
      github:"https://github.com/re-nu/fruits-app-react",
      img:""
    },
  ]
  return (
    <div className="projects" id='projects'>
      {/* <div className="project-title">
        PROJECTS
      </div> */}
      {projects.map(({name,discription,demo,github},index)=>(
        <ProjectLayout name={name} discription={discription} demo={demo} github={github} key={index}/>
      ))}
    
    </div>
  );
}

function ProjectLayout({name,discription,demo,github}) {
  return(
    <div className="project-layout">
        <h2>{name}</h2>
        <p>{discription}</p>
        <div className='project-button'>
        <a className='project-link' href={demo}><Button variant="text">view app</Button></a>
        <a className='project-link' href={github}><Button variant="text">view code</Button></a>
        </div>
    </div>
  )
}