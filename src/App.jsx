import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Tabs, Tab, AppBar } from "@mui/material";
import Profile from "./tabs/Profile";
import KeywordScore from "./tabs/KeywordScore";
import AutoFill from "./tabs/AutoFill";

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Auto Fill" component={Link} to="/auto-fill" />
          <Tab label="Keyword Score" component={Link} to="/keyword-score" />
          <Tab label="Profile" component={Link} to="/profile" />
        </Tabs>
      </AppBar>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/keyword-score" element={<KeywordScore />} />
        <Route path="/auto-fill" element={<AutoFill />} />
        <Route path="/" element={<KeywordScore />} /> {/* Default route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
