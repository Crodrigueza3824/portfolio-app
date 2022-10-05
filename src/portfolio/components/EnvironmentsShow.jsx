import { Grid, List, ListItem, Typography, ListItemIcon } from "@mui/material"
import BrushIcon from '@mui/icons-material/Brush';

export const EnvironmentsShow = () => {
    return (
        <Grid container sx={{ height: '50vh', backgroundImage: 'url("https://res.cloudinary.com/djvtfyvmr/image/upload/v1664927756/journal/y9xejjyzn2kh31jt9qqn.png")' }}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <BrushIcon color="Black"/>
                    </ListItemIcon>
                    <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000' }}>
                    Manage of margins,paddings,css effects, @media sizes, backgrounds, flex, box-shadow.
                    </Typography>
                </ListItem> 
                <ListItem>
                    <ListItemIcon>
                        <BrushIcon />
                    </ListItemIcon>
                    <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000' }}>
                    Manage of margins,paddings,css effects, @media sizes, backgrounds, flex, box-shadow.
                    </Typography>
                </ListItem>   
                <ListItem>
                    <ListItemIcon>
                        <BrushIcon />
                    </ListItemIcon>
                    <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000' }}>
                    Manage of margins,paddings,css effects, @media sizes, backgrounds, flex, box-shadow.
                    </Typography>
                </ListItem>   
                <ListItem>
                    <ListItemIcon>
                        <BrushIcon />
                    </ListItemIcon>
                    <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000' }}>
                    Manage of margins,paddings,css effects, @media sizes, backgrounds, flex, box-shadow.
                    </Typography>
                </ListItem>      
            </List>
            
    
        </Grid>
    )
}
