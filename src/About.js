import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useHistory } from 'react-router-dom';

export function About() {
  const history=useHistory();
  return (
    <div className="about">
      <div className="left-about">
      <Card sx={{ minWidth: 275 ,backgroundcolor:"rgb(236, 236, 236)"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Hello I'm,
        </Typography>
        <Typography variant="h5" component="div">
          Renuka Borade
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          full stack developer
        </Typography>
        <Typography variant="body2">
          I have build projects using
          <br/>
          react.js node.js mongobd
        </Typography>
      </CardContent>

      <CardActions>

      <IconButton onClick={()=>history.push("https://github.com/re-nu")} 
       aria-label="delete">
        <GitHubIcon />
      </IconButton>

      <IconButton onClick={()=>history.push()} 
       aria-label="delete">
        <LinkedInIcon />
      </IconButton>

      <IconButton onClick={()=>history.push()} 
       aria-label="delete">
        <TwitterIcon />
      </IconButton>

      </CardActions>
    </Card>
      </div>
      <div className="right-about">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfatZo6QR-kM8rQZlXR_NhSIY-dZ7pM-TBw&usqp=CAU' alt='full stack gif'/>
      </div>
    </div>
  );

}
