"use client";

import { Box } from "@mui/material";
import { red } from "@mui/material/colors";

export default function Error() {
  return (
    <Box sx={{ backgroundColor: red[100] }}>
      <h2>エラーが起きたよ！！</h2>
    </Box>
  );
}
