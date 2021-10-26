import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

function About() {
    return (
        <Container sx={{ maxWidth: 'md' }}>
            <Grid container  >
                <Grid item xs={8} id="about">
                    <Typography component="div" variant="h4" color="secondary" sx={{ fontWeight: 'medium', pb:4 }}>
                        About Me<span> : Metha Kusumapan</span>
                    </Typography>
                    <Typography component="div" >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am originally from Thailand. After I graduated as a computer engineer, I worked a few years in Tech companies in Bangkok. I realized I can improve myself by learning something new so I decided to move to the U.S. Personally, I am passionate about art therefore I went to UCLA extension to study design communication art. I had a chance to work in a startup company who built the restaurant online ordering app. From this role, I got such a great experience. I worked many roles, gained an understanding of teamwork, dealt with customers, and solved problems with teams.
                    </Typography>
                </Grid>
                <Grid item xs={4} sx={{ pt:4, display: 'flex',justifyContent: 'center'}}>
                    <Avatar
                        alt="Metha Kusumapan"
                        src="./metha.jpg"
                        sx={{ width: 200, height: 200, }}
                    />
                </Grid>
            </Grid>
            <Box>
            <Typography component="div" color="secondary" sx={{ fontWeight: 'medium', py: 2 }} >
                List of my skills
            </Typography>
            <Stack direction="row" spacing={2} >
                <Chip label="HTML" variant="outlined" color="secondary" />
                <Chip label="CSS" variant="outlined" color="secondary" />
                <Chip label="JavaScript" variant="outlined" color="secondary" />
                <Chip label="React" variant="outlined" color="secondary" />
                <Chip label="Node. js" variant="outlined" color="secondary" />
                <Chip label="SQL" variant="outlined" color="secondary" />
                <Chip label="GraphQL" variant="outlined" color="secondary" />
                <Chip label="Python" variant="outlined" color="secondary" />
            </Stack>
            </Box>
        </Container>
    )
}

export default About
