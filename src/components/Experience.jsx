import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Experience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>  
    <Typography component="div" variant="h4" color="secondary" sx={{ fontWeight: 'medium', py: 2, ml:20, mt:10 }}>
    Working Experience
    </Typography>
    
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 250, width: "70%", ml:20 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        textColor="secondary"
        indicatorColor="secondary"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 2, borderColor: 'divider' }}
      >
        <Tab label="ServeMeQuick"  {...a11yProps(0)} />
        <Tab label="GE Capital" {...a11yProps(1)} />
        <Tab label="G-Able" {...a11yProps(2)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        
        ServeMeQuick, Los Angeles — Project Manager <br/>
        <br/>Analyzed customer requirements and outlined project planning.
        <br/>Worked collaboratively with the developing team to increase user experience.
        <br/>Mocked up and designed UI/UX on projects to work both mobile apps  and website versions.

      </TabPanel>
      <TabPanel value={value} index={1}>
        GE Capital, Thailand — Software QA Engineer<br/>                                        
        <br/>Tested quality on new projects and also developed software.
        <br/>Gained understanding  in the financial software platform and was able to provide customer support to other teams.
        <br/>Consulted and resolved user problems that may occur on production projects.

      </TabPanel>
      <TabPanel value={value} index={2}>
        G-Able, Thailand — Research Development Software Engineer<br/>
        <br/>Researched and developed a company software.
        <br/>Shared knowledge and trained staff how to use a company software framework.
        <br/>Builded an inhouse office project to manage sharing coworking space.
 
      </TabPanel>
      
    </Box>
    </>
  );
}


