import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { BackEndSkills, FrontEndSkills } from '../helpers';
import { useSelector } from 'react-redux';
import { usePortfolioStore } from '../../hooks';






export const SkillsView = () =>  {

  const { skillsView } = useSelector( state => state.portfolio );




  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      className="animate__animated animate__fadeIn"
      
    >
        { 
           (skillsView) 
           ?<FrontEndSkills />
           :<BackEndSkills />
        }  

          
      
      
      
    </List>
  );
}

