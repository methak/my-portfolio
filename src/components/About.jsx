import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function About() {
    return (
        <Box sx={{ p: 20 }}>
            <Typography component="div" variant="h4" color="secondary" sx={{ fontWeight: 'medium', py: 2 }}>
                About Me
            </Typography>
            <Typography component="div" >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am originally from Thailand. After I graduated as a computer engineer, I worked a few years in Tech companies in Bangkok. I realized I can improve myself by learning something new so I decided to move to the U.S. Personally, I am passionate about art therefore I went to UCLA extension to study design communication art. I had a chance to work in a startup company who built the restaurant online ordering app. From this role, I got such a great experience. I worked many roles, gained an understanding of teamwork, dealt with customers, and solved problems with teams.
            </Typography>
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
                <Chip label="Python" variant="outlined" color="secondary"/>
            </Stack>
        </Box>
    )
}

export default About
