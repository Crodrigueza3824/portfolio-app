import { ViewSidebar } from "@mui/icons-material"
import { Button, DialogTitle, Grid, Typography } from "@mui/material"
import { useState } from "react"
import { ProjectsView, SkillsView } from "../views"






export const PortFolioPageDetails = () => {

    const [views, setViews] = useState(true)

    const handleSkillsView = () => {
      setViews(true);
    }

    const handleProjectsView = () => {
      setViews(false);
    }

    const overview = " I've been performing as a Software Engineer for more than 3 years developing solutions.  Using a Frontend and Backend structure, with HTML and code languages like JavaScript, CSS, nonSQL, SQL, PHP, Python.In the Frontend side I always take advantage of the React framwork( React Redux, Redux Toolkit, React Router Dom V6 ), Using available tools for Designing( Material UI, Font Awesome, Bootstrap, animate css ).For Backend I'm flexible to adapt the project using technologies as NodeJS( CRUD, Env Administration), MongoDB( userInfo Storage), Firebase( Info CRUD and User Management ), Cloudinary( File storage ).And finally for testing I prefer to use JEST JavaScript Testing Framework( Describe, Test, render, debug )."
    

    

  return (
    <>
        <Grid 
          container
          direction="row" sx={{ backgroundImage: 'url("https://res.cloudinary.com/djvtfyvmr/image/upload/v1664491717/journal/rnadtsbuixjtolhhbyet.png")', height: '200vh' }} >
            <Grid container direction="column" sx={{ width: '55%' }}>
                <Grid item>
                    <Typography 
                      variant="h2" 
                      color="white" 
                      sx={{ mt: 8, ml: 4, textShadow: '2px 2px 4px #000000', opacity: '0.25' }}
                      className="animate__animated animate__fadeIn animate__faster"
                    > Skills and Experience</Typography>

                </Grid>
                <Grid 
                  container 
                  className="animate__animated animate__fadeIn"
                  sx={{ borderRadius: 2 , backgroundColor: 'primary.main', width: '80%', minWidth: '600px', ml: 4, mt: 8, boxShadow: 5 }}
                >
                    <DialogTitle color="white" >
                        Overview
                    </DialogTitle>
                    <Typography color="white" sx={{ ml: 3, mr: 3, mb: 2}}>
                        { overview }
                    </Typography>
                </Grid>
                <Grid container direction="column" alignItems="center" 
                 sx={{ mt: 20, width: "100%"}} >
                    <Grid item textAlign='center' width= "40%" >
                        <Button  
                          variant="contained" 
                          className=" animate__animated animate__zoomIn animate__faster"
                          onClick={ handleSkillsView }
                          sx={{ backgroundColor: 'primary.main', width: '80%', minWidth: "165px", fontSize: '30px', opacity: (views) ? '0.7' : '' }} 
                        >

                            Skills
                        </Button>
                    </Grid>
                    <Grid item textAlign='center' width= "40%" mt="10%">
                        <Button  
                          className=" animate__animated animate__zoomIn animate__faster"
                          variant="contained" 
                          onClick={ handleProjectsView }
                          sx={{ backgroundColor: 'primary.main', width: '80%', minWidth: "165px", fontSize: '30px', opacity: (!views) ? '0.7' : '' }} 
                        >
                                Projects
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
            <Grid container sx={{ backgroundColor: 'white', width: '45%'}}>
                { 
                   ( views === true )
                   ?<SkillsView />
                   :<ProjectsView />
                }
                


            </Grid>
            

        </Grid>


    
    
    </>
  )
}
