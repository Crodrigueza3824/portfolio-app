import { Grid, List, ListItem, Typography, ListItemIcon } from "@mui/material"
import BrushIcon from '@mui/icons-material/Brush';


export const HTMLShow = () => {
    return (
        <Grid container sx={{ height: '50vh', backgroundImage: 'url("https://res.cloudinary.com/djvtfyvmr/image/upload/v1664928135/journal/txb5edd3btiffzxeboig.png")' }}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <BrushIcon color="Black"/>
                    </ListItemIcon>
                    <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000' }}>
                    Usage of HTML Labels: body, main, head, title, hr, br, h1,2,3,4,5, div, p, header, img, audio, video, section
                    </Typography>
                </ListItem> 
                <ListItem>
                    <ListItemIcon>
                        <BrushIcon />
                    </ListItemIcon>
                    <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000' }}>
                    Use diverse of HTML structures
                    </Typography>
                </ListItem>   
                <ListItem>
                    <ListItemIcon>
                        <BrushIcon />
                    </ListItemIcon>
                    <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000' }}>
                    Use of Material UI for HTML components 
                    </Typography>
                </ListItem>   
                <ListItem>
                    <ListItemIcon>
                        <BrushIcon />
                    </ListItemIcon>
                    <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000' }}>
                    Use of html hierarchy, but depending on each Project development
                    </Typography>
                </ListItem>      
            </List>
            
    
        </Grid>
      )
}
