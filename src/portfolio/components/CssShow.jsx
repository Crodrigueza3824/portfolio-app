import { Grid, List, ListItem, Typography, ListItemIcon } from "@mui/material"
import BrushIcon from '@mui/icons-material/Brush';

export const CssShow = () => {
  return (
    <Grid container sx={{ height: '50vh', backgroundImage: 'url("https://res.cloudinary.com/djvtfyvmr/image/upload/v1664928129/journal/gpkkbsqavlwh0ibxz0xz.png")' }}>
        <List>
            <ListItem>
                <ListItemIcon>
                    <BrushIcon color="Black"/>
                </ListItemIcon>
                <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000'}}>
                Manage of objects Desing by ClassName, Id, Labels and Type.
                </Typography>
            </ListItem> 
            <ListItem>
                <ListItemIcon>
                    <BrushIcon />
                </ListItemIcon>
                <Typography color="white" sx={{ fontSize: '22px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000'}}>
                Use of Display( Flex, block, inline-block, etc...), AlingItems, TextAlign, AlignContent and Direction.
                </Typography>
            </ListItem>   
            <ListItem>
                <ListItemIcon>
                    <BrushIcon />
                </ListItemIcon>
                <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000'}}>
                Manage of effect: transition( delay, property, duration )
                </Typography>
            </ListItem>   
            <ListItem>
                <ListItemIcon>
                    <BrushIcon />
                </ListItemIcon>
                <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000'}}>
                Use of Margins, Paddings, Border Radius, Box Shadow, fontSize, Background Color, width, Height, BacgroundImage, etc...
                </Typography>
            </ListItem>      
            <ListItem>
                <ListItemIcon>
                    <BrushIcon />
                </ListItemIcon>
                <Typography color="white" sx={{ fontSize: '20px', textShadow: '1px 1px 1px #000, 3px 3px 5px #000'}}>
                Responsive Design by using @media based on Screen Size.
                </Typography>
            </ListItem>  
        </List>
        

    </Grid>
  )
}