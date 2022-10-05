import { Grid, List, ListItem, Typography, ListItemIcon } from "@mui/material"
import BrushIcon from '@mui/icons-material/Brush';


export const JavascriptShow = () => {
    return (
        <Grid container sx={{ height: '50vh', backgroundImage: 'url("https://res.cloudinary.com/djvtfyvmr/image/upload/v1664928142/journal/kvhvotyxpqcpvxes1tbf.png")' }}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <BrushIcon color="Black"/>
                    </ListItemIcon>
                    <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000' }}>
                    Use of basic conditions and cycles: if, and, is, and, or, &&, || , for, While,  etc...
                    </Typography>
                </ListItem> 
                <ListItem>
                    <ListItemIcon>
                        <BrushIcon />
                    </ListItemIcon>
                    <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000' }}>
                    Use of native functions: map, filter, every, some, forEach, slice, toString, pop, push, etc...
                    </Typography>
                </ListItem>   
                <ListItem>
                    <ListItemIcon>
                        <BrushIcon />
                    </ListItemIcon>
                    <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000' }}>
                    Destructuring of an array, object, funtions, etc...
                    </Typography>
                </ListItem>   
                <ListItem>
                    <ListItemIcon>
                        <BrushIcon />
                    </ListItemIcon>
                    <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000' }}>
                    Manage of Clasess, Functions( Normal, Arrow, Synchronous, Asynchronous), Objects, Arrays, etc...
                    </Typography>
                </ListItem>      
                <ListItem>
                    <ListItemIcon>
                        <BrushIcon />
                    </ListItemIcon>
                    <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000' }}>
                    Use Functionalities in JSX files by modify the HTML labels involved.
                    </Typography>
                </ListItem>   
                
            </List>
            
    
        </Grid>
      )
}
