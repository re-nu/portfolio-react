export function Skills() {
  const skills=[
    {
      name:"HTML",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10vZo3toTsho4-pJ2ThB5746-1DojPkaYAQ&usqp=CAU",
      stars:"70%"
    },

    {
      name:"css",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSU6flHH2ayLF2s5pzauaq13sCmb_I9HY1Gg&usqp=CAU",
      stars:"60%"
    },

    {
      name:"java script",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhdFgKwWT0BD32WAPhBz04H7yjV1VMu7axw&usqp=CAU",
      stars:"80%"
    },

    {
      name:"react",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprKd5aRy8vxodob4oY-zWqu4ri9efRBKa7Uv1RQEA2LwF2OTaDDDUuQvM8L5u37orzww&usqp=CAU",
      stars:"70%"
    },

    {
      name:"node",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrO7Fy_-9HlklEHQyY4J-QBMFPicTSI8LEHLfqcUK3QwcZpG1jXjSkaUdm4BOLPoytzG0&usqp=CAU",
      stars:"60%"
    },

    {
      name:"mongobd",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ph4ITAiqYEpH-wFI5diZywQT6tFwgGf19hfxWcySfXWXW6xSKf1BlIG77bOAkRxR7cU&usqp=CAU",
      stars:"60%"
    },
  ];
  return (
    <div className="skill-list" id="skills">
      <div className="skill-title">Skills</div>
      <div className="skill-body">
        <div className="skill-body-left">
          <img className="skill-img" src="https://5.imimg.com/data5/MX/RL/MY-14863115/soft-skills-training-500x500.jpg"
             alt="soft-skill"/>
        </div>
        <div className="skill-body-right">
        {skills.map(({name,image,stars},index)=>(
        <SkillLayout name={name} image={image} stars={stars} key={index}/>
      ))}
        </div>
      </div>
    </div>
  );

}

function SkillLayout({name, image ,stars}) {
  // console.log("width=",stars)
  const styl={width:stars}
  return(
    <div className="skill-layout">
      <div className="skill-left">
        <img className="skill-logo" src={image} alt={name}/>
      </div>
      <div className="skill-right">
        <p>{stars}</p>
        <div className="range-container" >
          <div className="range" style={styl}></div>
        </div>
      </div>
    </div>
  );
}