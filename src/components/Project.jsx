import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

function Project() {
    return (
        <Container sx={{ maxWidth: 'md' }}>
            <Typography component="div" variant="h4" color="secondary" sx={{ fontWeight: 'medium', mt: 10 }} id="project">
                My Project
            </Typography>
            <Box sx={{ flexGrow: 1, my: 6 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card >
                            <CardMedia
                                component="img"
                                alt="Project JAM"
                                height="240"
                                image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'medium'}}>
                                    Project JAM 2.0
                                </Typography>
                                <Typography variant="body" color="text.secondary">
                                This application is built for helping users to create a grocery shopping list. 
                                User could find a grocery store from a google find place auto complete.
                                Modify items and upload receitpt for a shopping reccord.
                                </Typography>
                                <Typography variant="body2" color="secondary" sx={{mt:2}} >
                                React | Google OAuth | GraphQL | Node | MongoDB | Material UI
                                </Typography>
                            </CardContent>
                            <CardActions sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                                <IconButton color="secondary" aria-label="Live Demo" href="https://project-jam.surge.sh/" target="_blank">
                                    <LaunchIcon />
                                </IconButton>
                                <IconButton color="secondary" aria-label="GitHub" href="https://github.com/methak/project-jam-client" target="_blank">
                                    <GitHubIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={6}>
                        <Card >
                            <CardMedia
                                component="img"
                                alt=""
                                height="240"
                                image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'medium'}}>
                                    $Tacos Stock Portfolio Tracking
                                </Typography>
                                <Typography variant="body" color="text.secondary">
                                Web application that help user to create stock tracking on their portfolio.
                                Fetch live tricker data and able to reccord buy or sell stock transaction.
                                </Typography>
                                <Typography variant="body2" color="secondary" sx={{mt:2}} >
                                React | JWT Auth | Node | MongoDB | Axios | Bootstrap
                                </Typography>
                            </CardContent>
                            <CardActions sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                                <IconButton color="secondary" aria-label="Git Hub">
                                    <LaunchIcon />
                                </IconButton>
                                <IconButton color="secondary" aria-label="Live Demo" href="https://github.com/julesjazz-classwork/stacos-fe" target="_blank">
                                    <GitHubIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt=""
                                height="240"
                                image="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'medium'}}>
                                    Find My Vaccine
                                </Typography>
                                <Typography variant="body" color="text.secondary">
                                This application is for vaccine management. User can book vaccine at the desire local store.
                                </Typography>
                                <Typography variant="body2" color="secondary" sx={{mt:2}} >
                                Python | Django | PSQL | PostgreSQL
                                </Typography>
                            </CardContent>
                            <CardActions sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                                <IconButton color="secondary" aria-label="Live Demo" href="https://myvaccine-deploy.herokuapp.com/" target="_blank">
                                    <LaunchIcon />
                                </IconButton>
                                <IconButton color="secondary" aria-label="GitHub" href="https://github.com/methak/myvaccine" target="_blank">
                                    <GitHubIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt=""
                                height="240"
                                image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'medium'}}>
                                    JAMList ver 1.0
                                </Typography>
                                <Typography variant="body" color="text.secondary">
                                JAMList is an app to help users create and manage shopping lists by store.
                                User can add a store to their Favorite Stores list. Also able to modify the shopping list.
                                </Typography>
                                <Typography variant="body2" color="secondary" sx={{mt:2}} >
                                Java Script | Tailwind | Node | MongoDB | EJS
                                </Typography>
                            </CardContent>
                            <CardActions sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                                <IconButton color="secondary" aria-label="Live Demo" href="https://jamlist.herokuapp.com/" target="_blank">
                                    <LaunchIcon />
                                </IconButton>
                                <IconButton color="secondary" aria-label="GitHub" href="https://github.com/methak/project_one" target="_blank">
                                    <GitHubIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Project
