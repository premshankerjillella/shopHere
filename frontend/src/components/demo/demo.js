import React from 'react';
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Contact from './contact';
import About from './about';
import CssBasline from '@material-ui/core/CssBaseline'

const Demo = props =>{
    const {match, history} = props;
    const {params} = match;
    const {page} = params;
    const tabNameToIndex={
        0:"about",
        1:"contact",
    }
    const indexToTabName = {
        "about":0,
        "contact":1,
    }
    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
      history.push(`/home/${tabNameToIndex[newValue]}`)
    setSelectedTab(newValue);
  };
    return(
        <>
        <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="About" />
          <Tab label="Contact"/>
        </Tabs>
        </AppBar>
        {selectedTab==0 && <About/>}
        {selectedTab==1 && <Contact/>}
        </>
    );
}

export default Demo;