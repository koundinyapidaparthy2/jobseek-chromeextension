import React from "react";
import { Box, Typography, Paper } from "@mui/material";

function AutoFill() {
  return (
    <Box sx={{ p: 2 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Auto Fill Tab
        </Typography>
        <Typography variant="body1">
          This is the Auto Fill tab content.
        </Typography>
      </Paper>
    </Box>
  );
}

export default AutoFill;
