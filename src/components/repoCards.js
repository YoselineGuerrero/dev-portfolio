import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import { repos, clientWork, currentJob, otherExp } from '../data';
import { Button, CardActions } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function RepoCards() {
  const [value, setValue] = React.useState('1');
  const [IdOpen, setIdOpen] = React.useState('1');
  const [openRepo, setOpenRepo] = React.useState(false);
  const [openWork, setOpenWork] = React.useState(false);
  const [openOther, setOpenOther] = React.useState(false);

  const handleClickOpen = (id, type) => {
    setIdOpen(id);
    if(type === "Projects"){
      setOpenRepo(true);
    }
    else if(type === "Work"){
      setOpenWork(true);
    }
    else{
      setOpenOther(true);
    }
  };

  const handleClose = () => {
    setOpenRepo(false);
    setOpenWork(false);
    setOpenOther(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return(
    <>
      <Grid item xs={10} md={8}>
        <Typography variant="h6">Current Job</Typography>
        <Card>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" sx={{flexFlow: 'wrap'}}>
              <Typography>{currentJob.title}</Typography>
              <Typography>{currentJob.time}</Typography>
            </Stack>
            <Typography sx={{display: 'flex', fontStyle: 'italic'}}>{currentJob.companyName} - {currentJob.location}</Typography>
            {currentJob.points.map((point) => (
              <ListItem key={point}>
                <Typography variant="body1" color="text.secondary">- {point}</Typography>
              </ListItem>
            ))}
          </CardContent>
        </Card>
      </Grid>
        <Grid item xs={11} sx={{paddingTop:'1em'}}>
          <Tabs onChange={handleChange}  value={value} textColor="secondary" indicatorColor="secondary" sx={{display:'inline-flex'}}>
            <Tab label="Projects" value="1" />
            <Tab label="Works" value="2" />
            <Tab label="Other" value="3" />
          </Tabs>
        </Grid>
      <Grid item xs={11} style={value === '1' ? {} : {display: 'none'}}>
        <Typography variant="h6">
          Here's some of public project that I have done.
        </Typography>
        <Button target='_blank' color='secondary' variant="outlined" startIcon={<GitHubIcon/>} href="https://github.com/YoselineGuerrero">GitHub</Button>
      </Grid>
      {repos.map((repo) => (
        <Grid item md={3.5}  style={value === '1' ? {} : {display: 'none'}} xs={9} key={repo.id} sx={{ margin: '5px', display: "inline-flex", flexDirection: "column", justifyContent: "space-between"}} component={Card}>
          <CardMedia component="img" image={localStorage.getItem("mode") === 'light'? repo.img : repo.dark_img} alt="project image"/>
          <CardContent>
            <Typography gutterBottom variant="h6" >
              {repo.title}
            </Typography>
            {repo.tech.map((item) => (
              <Chip key={item} label={item} color="secondary" size="small" variant="outlined" sx={{margin:'3px'}}/>
            ))}
            <Dialog open={openRepo} onClose={handleClose}>
              <DialogTitle>
                {repos[IdOpen].title}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {repos[IdOpen].info.map((points) => (
                    <ListItem key={points}>
                      <Typography variant="body1" color="text.secondary">- {points}</Typography>
                    </ListItem>
                  ))}
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </CardContent>
          <CardActions sx={{justifyContent: 'space-between', whiteSpace: 'nowrap'}}>
            <Button size="small" variant="outlined" color="secondary" sx={{marginRight:'8px'}} onClick={() => handleClickOpen(repo.id, "Projects")}>
              More Info
            </Button>
            <Button size="small" variant="outlined" color='secondary' href={repo.code_site} target="_blank">
              Code
            </Button>
            <Button size="small" variant="outlined" color='secondary' href={repo.live_site} target="_blank">
              Live Site
            </Button>
          </CardActions>
        </Grid>
      ))}
      <Grid item xs={10} style={value === '2' ? {} : {display: 'none'}}>
        <Typography variant="h6" gutterBottom>
          Client Work
        </Typography>
        <Typography variant="body1" gutterBottom sx={{paddingBottom:'1em'}}>
          While at the University of Houston I took 2 different conculting clinct classes. While allows us studnets
          to work with people in the community that needed assiatnce for their websites. This could have been 
          updating or creating a new site from scartch. Below below are the projects I work on.
        </Typography>
      </Grid>
      {clientWork.map((work) => (
        <Grid component={Card} style={value === '2' ? {} : {display: 'none'}} item xs={9} sm={4.5} md={3} sx={{width:'-webkit-fill-available', margin: '10px', display: "inline-flex", flexDirection: "column", justifyContent: "space-between"}} key={work.id}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap= 'wrap'>
              <Typography sx={{marginRight: '5px'}}>{work.title}</Typography>
              <Typography>{work.date}</Typography>
            </Stack>
            <Typography sx={{display: 'flex', fontStyle: 'italic'}}> {work.location}</Typography>
            <Stack direction="row" justifyContent="center">
              {work.tech.map((item) => (
                <Chip key={item} label={item} color="secondary" size="small" variant="outlined" sx={{margin:'3px'}}/>
              ))}
            </Stack>
            <Dialog open={openWork} onClose={handleClose}>
              <DialogTitle>
                {clientWork[IdOpen].title}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {clientWork[IdOpen].info.map((points) => (
                    <ListItem key={points}>
                      <Typography variant="body1" color="text.secondary">- {points}</Typography>
                    </ListItem>
                  ))}
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </CardContent>
          <CardActions sx={{justifyContent: 'center'}}>
            <Button variant="outlined" color="secondary" onClick={() => handleClickOpen(work.id, "Work")}>
              More Info
            </Button>
          </CardActions>
        </Grid>
      ))}
      <Grid item xs={10} style={value === '3' ? {} : {display: 'none'}}>
        <Typography variant="h6" gutterBottom>
          Other Experience
        </Typography>
      </Grid>
      {otherExp.map((exp) => (
        <Grid component={Card} item xs={9} md={3} sm={4.5} style={value === '3' ? {} : {display: 'none'}} sx={{ width:'-webkit-fill-available', margin:"10px", display: "inline-flex", flexDirection: "column", justifyContent: "space-between" }} key={exp.id}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap= 'wrap'>
              <Typography sx={{marginRight: '5px'}}>{exp.title}</Typography>
              <Typography>{exp.date}</Typography>
            </Stack>
            <Typography sx={{display: 'flex', fontStyle: 'italic'}}> {exp.location}</Typography>
            <Stack direction="row" justifyContent="center">
              {exp.tech.map((item) => (
                <Chip key={item} label={item} color="secondary" size="small" variant="outlined" sx={{margin:'3px'}}/>
              ))}
            </Stack>
            <Dialog open={openOther} onClose={handleClose}>
              <DialogTitle>
                {otherExp[IdOpen].title}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {otherExp[IdOpen].info.map((points) => (
                    <ListItem key={points}>
                      <Typography variant="body1" color="text.secondary">- {points}</Typography>
                    </ListItem>
                  ))}
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </CardContent>
          <CardActions  sx={{justifyContent: 'center'}}>
            <Button variant="outlined" color="secondary" onClick={() => handleClickOpen(exp.id, "Other Exp")}>
              More Info
            </Button>
          </CardActions>
        </Grid>
      ))}
    </>
  )
}
