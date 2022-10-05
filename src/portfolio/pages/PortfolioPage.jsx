import { Button, Grid, Icon, Link, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';


export const PortfolioPage = () => {
  return (

    <Grid 
      container 
      alignContent="center"
      sx={{ 
        boxSizing: 'border-box',
        backgroundImage: 'url("https://res.cloudinary.com/djvtfyvmr/image/upload/v1664491275/journal/evorpgl8kusydjomqqop.png")', 
        height: '100vh'
      }}>

        <Grid 
          container 
          direction='column' 
          alignItems='center'
          sx={{ backgroundColor: 'primary.main', height: '30vh'}}
        >
            <Grid container alignItems='center' direction='column'>
                <Grid item sx={{ mt: 6 }} className='animate__animated animate__zoomInDown' >
                    <Typography color="white" variant="h2" fontSize="250%">Carlos Rodriguez </Typography>
                </Grid>
                <Grid item sx={{ mt: 6, mb: 1 }} className='animate__animated animate__zoomIn animate__delay-1s'>
                    <Typography color="white" variant="h2" fontSize="250%">Welcome to my Portfolio</Typography>
                </Grid>
            </Grid>


            

        </Grid>
        <hr color="black"/>


        <Grid container direction="column" alignItems='center' sx={{ backgroundColor: 'secondary.main', mt: 43, height: '35vh'}}  >
            <Grid item  sx={{ mt: 6 }}  className='animate__animated animate__zoomIn animate__delay-1s'>
                <Link component={ RouterLink } to="/details" sx={{ textDecoration: 'none' }}><Button 
                  variant="contained" 
                  sx={{ borderRadius: 9, width: 300, height: 100 }}
                  >
                    Get Started  <Icon baseClassName="fas" className="fa-chevron-right" sx={{ ml: 7 }} /> &nbsp;
                </Button>
                </Link>
                      
            </Grid>
        </Grid>
    
    </Grid >
    


    
  )
}




