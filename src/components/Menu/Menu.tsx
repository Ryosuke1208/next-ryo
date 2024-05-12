import AppBar from "@mui/material/AppBar/AppBar";
import Box from "@mui/material/Box/Box";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Menu = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link href="/">
              <MenuIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ryo's Page
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Menu;
