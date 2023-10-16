
import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';

import { AppBar,
   Box, 
   CssBaseline,
   Divider,
   IconButton,
   List,
   ListItem,
   ListItemButton,
   ListItemText,
   Toolbar,
   Typography,
   Drawer,
   Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BookFinderContext } from '../context';
import {useContext} from 'react'
const drawerWidth = 240;

const authNavItems =[
{item:"Book List",path:"/list"},
{item:"Detail Book",path:"/detail"},
{item:"Log Out",path:"/",isAuth:true},
];
const unauthNavItems=[
  {item:"Home",path:"/"},

]
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const { isAuth,setIsAuth } = useContext(BookFinderContext);
  const navItems = isAuth ? authNavItems : unauthNavItems;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleNavItemClick = (path, isLogout) => {
    console.log("is logged in", isAuth);

    if (isLogout) {
      // Optional: API call to backend to handle server-side logout
      // await api.logout();

      // Remove token or session ID
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      // Update login state
      setIsAuth(false);
    }

    // Redirect or navigate user
    navigate(path);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        onClick={() => navigate("/")}
        variant='h6'
        sx={{ my: 2, cursor: "pointer" }}
      >
        Books App
      </Typography>
      <Divider />
      <List>
        {navItems.map((navItem) => (
          <ListItem key={navItem.item} disablePadding>
            <ListItemButton
              onClick={() => {
                console.log("Direct click handler");
                handleNavItemClick(navItem.path, navItem.isAuth);
              }}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={navItem.item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", cursor: "pointer" },
            }}
            onClick={() => navigate("/")}
          >
            Book App
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((navItem) => (
              <Button
                onClick={() => {
                  console.log("Direct click handler");
                  handleNavItemClick(navItem.path, navItem.isAuth);
                }}
                key={navItem.item}
                sx={{ color: "#fff" }}
              >
                {navItem.item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
