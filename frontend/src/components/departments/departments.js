import { Tabs, Tab, AppBar } from '@material-ui/core';
import ProductList from '../productList/productList'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Toolbar from '@material-ui/core/Toolbar'
const Departments = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;
  const tabNameToIndex = {
    0: "electronics",
    1: "music",
  }
  const indexToTabName = {
    "electronics": 0,
    "music": 1,
  }
  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/departments/${tabNameToIndex[newValue]}`)
    setSelectedTab(newValue);
  };

  return (
    <>
      <Toolbar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Electronics" />
          <Tab label="Music" />
        </Tabs>
      </Toolbar>
      {selectedTab == 0 && <ProductList query={"department"} value={"electronics"} />}
      {selectedTab == 1 && <ProductList query={"department"} value={"music"} />}
    </>
  );
}

export default Departments;