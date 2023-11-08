import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CasinoIcon from '@mui/icons-material/Casino';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const drawerWidth = 240;

function SideDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        
          <ListItem disablePadding>
          <Link to="/products">
            <ListItemButton>
              <ListItemIcon>
              <CasinoIcon />
                
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
          <Link to="/addProduct">
            <ListItemButton>
              <ListItemIcon>
              <AddIcon />
                
              </ListItemIcon>
              <ListItemText primary="Add Product" />
            </ListItemButton>
            </Link>
          </ListItem>
      </List>
      <Divider />

    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "black"
        }}
      >
        <Toolbar sx={{backgroundColor: "black", display:"flex", flexDirection: "row", justifyContent: "space-between"}}>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h6" noWrap component="div">
            SuperK
          </Typography>
          <div>
          <Stack direction="row" spacing={1}>
            <Link to="/cart">
          <IconButton color="primary" aria-label="add to shopping cart">
            <ShoppingCartIcon />
          </IconButton>
          </Link>
          <Link to="/username">
          <IconButton color="primary" aria-label="add to shopping cart">
            <AccountCircleIcon />
          </IconButton>
          </Link>
          </Stack>
          </div>
          
         
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="Products"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
          {props.body}
      </Box>
    </Box>
  );
}


export default SideDrawer;