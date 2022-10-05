import { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { usePortfolioStore } from '../../hooks';
import { useSelector } from 'react-redux';
import { NodeJsShow, MiddlewareShow, FireBaseShow, MongoDbShow, PostManShow, EnvironmentsShow } from '../components';
import { Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



export const BackEndSkills = () => {
    

  const { startChangingNodeJs, startChangingMiddleware, startChangingFireBase, startChangingMongoDb, startChangingPostMan, startChangingEnvironments, startChangingSkillsView } = usePortfolioStore();

  const { nodeJs, middleware, fireBase, mongoDb, postMan, environments } = useSelector( state => state.portfolio );

  
  const handleClick1 = () => {
    startChangingNodeJs();
  };

  const handleClick2 = () => {
    startChangingMiddleware();
  
  };

  const handleClick3 = () => {
    startChangingFireBase();
  };

  const handleClick4 = () => {
    startChangingMongoDb();
  };

  const handleClick5 = () => {
    startChangingPostMan();
  };

  const handleClick6 = () => {
    startChangingEnvironments();
  }

  const handleSkillsViews = () => {
    startChangingSkillsView(); 
  } 


return (
  <>


    <ListSubheader component="div" id="nested-list-subheader" sx={{ textAlign: 'center'}} className="animate__animated animate__backInRight" >
        <Typography 
          variant='h3'
          justifyContent='space-between'
          edge= 'start'
        >
        <ArrowBackIosNewIcon 
          sx={{ mr: 5, cursor: 'pointer' }} 
          onClick={ handleSkillsViews } 
        >
        </ArrowBackIosNewIcon>
          Backend Skills 
        
        </Typography>
    </ListSubheader>

    

    <ListItemButton onClick={ handleClick1 } className="animate__animated animate__backInRight">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Node JS" />
      {nodeJs ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={nodeJs} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
            <NodeJsShow />
        </ListItemButton>
      </List>
    </Collapse>
    <ListItemButton onClick={ handleClick2 } className="animate__animated animate__backInRight">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Middlewares" />
      {middleware ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={middleware} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <MiddlewareShow />
        </ListItemButton>
      </List>
    </Collapse>
    <ListItemButton onClick={ handleClick3 } className="animate__animated animate__backInRight">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="FireBase" />
      {fireBase ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={fireBase} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
            <FireBaseShow />
        </ListItemButton>
      </List>
    </Collapse>
    <ListItemButton onClick={ handleClick4 } className="animate__animated animate__backInRight">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Mongo Database" />
      {mongoDb ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse  in={mongoDb} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
            <MongoDbShow />
        </ListItemButton>
      </List>
    </Collapse>
    <ListItemButton onClick={ handleClick5 } className="animate__animated animate__backInRight">
      <ListItemIcon>
        <InboxIcon /> 
      </ListItemIcon>
      <ListItemText primary="Post Man" />
      {postMan ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse  in={postMan} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
            <PostManShow />
        </ListItemButton>
      </List>
    </Collapse>
    <ListItemButton onClick={ handleClick6 } className="animate__animated animate__backInRight">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Mongo Database" />
      {environments ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse  in={environments} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
            <EnvironmentsShow />
        </ListItemButton>
      </List>
    </Collapse>
    <hr />
    <Typography textAlign='center' variant='h3' component='div' className="animate__animated animate__backInRight">Backside</Typography>
  
  
  </>
)
}
