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
import { CssShow, ReactNativeShow, JavascriptShow, ReactShow, HTMLShow } from '../components';
import { Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


  
export const FrontEndSkills = () => {
    



  

    const { startChangingCss, startChangingReact, startChangingJavascript, startChangingHTML, startChangingReactNative, startChangingSkillsView } = usePortfolioStore();

    const { css, react, javascript, html, reactNative } = useSelector( state => state.portfolio );

    const handleClick2 = () => {
      startChangingCss();
    
    };
    const handleClick1 = () => {
      startChangingReact();
    };
    const handleClick3 = () => {
      startChangingJavascript();
    };

    const handleClick4 = () => {
      startChangingHTML();
    };

    const handleClick5 = () => {
      startChangingReactNative();
    };

    const handleSkillsViews = () => {
      startChangingSkillsView(); 
    } 


  return (
    <>


      <ListSubheader component="div" id="nested-list-subheader" sx={{ textAlign: 'center'}}>
          <Typography 
            variant='h3'
            justifyContent='space-between'
            edge= 'start'
          >Frontend Skills 
          <ArrowForwardIosIcon 
            sx={{ ml: 5, cursor: 'pointer' }} 
            onClick={ handleSkillsViews } 
          >
          </ArrowForwardIosIcon>
          </Typography>
      </ListSubheader>

      

      <ListItemButton onClick={ handleClick1 }>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="React" />
        {react ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={react} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
              <ReactShow />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={ handleClick2 }>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="CSS" />
        {css ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={css} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <CssShow />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={ handleClick3 }>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="JavaScript" />
        {javascript ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={javascript} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
              <JavascriptShow />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={ handleClick4 }>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="HTML" />
        {html ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse  in={html} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
              <HTMLShow />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={ handleClick5 }>
        <ListItemIcon>
          <InboxIcon /> 
        </ListItemIcon>
        <ListItemText primary="React Native" />
        {reactNative ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse  in={reactNative} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
              <ReactNativeShow />
          </ListItemButton>
        </List>
      </Collapse>
      <hr />
      <Typography textAlign='center' variant='h3' component='div'>Carpentry</Typography>
    
    
    </>
  )
}
