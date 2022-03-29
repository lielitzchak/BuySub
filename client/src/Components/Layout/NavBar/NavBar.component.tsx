import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import LogOut from "../../Features/LogOut/LogOut.component";
import { authContext } from "../../../Context/AuthProvider.component";
import { useContext, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import { themeContext } from "../../../Context/ThemeProvider/ThemeProvider";
import { navBarStyle } from '../../../Context/ThemeProvider/ThemeCSS';
import { FormControlLabel, Switch } from "@mui/material";



const NavBar = (): JSX.Element => {
  const { auth, setAuth }: any = useContext(authContext);
  const {theme,setTheme}: any = useContext(themeContext);

  const themeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <nav>
      <AppBar position="static" style={theme === 'light' ? navBarStyle.light : navBarStyle.dark}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
            <img src="/pictures/logo_transparent.png" alt="" style={{width:"7rem",height:"4.5rem"}}/>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                        <Link to={"/"}>Home</Link>
                    </Typography>
                  </MenuItem>

                  {auth.email ? "" : <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                       <Link to="/SignUp">SignUp</Link>                  
                    </Typography>
                  </MenuItem>}

                  {auth.email ? <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                     <Link to="/Profile">Profile</Link>                
                    </Typography>
                    </MenuItem>
                  : ""}

                  {auth.email && auth.groupName !== "" ? <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                     <Link to="/Team">Team</Link>               
                    </Typography>
                  </MenuItem>
                  : ""}

                  {auth.role && auth.role.length >= 1 && auth.role.includes("Admin") ? <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                     <Link to="/Admin">Admin</Link>             
                    </Typography>
                  </MenuItem>
                  : ""} 

                  {auth.email && auth.groupName == '' ? <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                     <Link to="/CreateTeam">Create Team</Link>             
                    </Typography>
                  </MenuItem>
                  : '' } 

                  {auth.email && auth.groupName == '' ? <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                     <Link to="/JoinTeam">Join Team</Link>             
                    </Typography>
                  </MenuItem>
                  :'' }  

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                    <Link to="/ContactUs">Contact Us</Link>              
                    </Typography>
                  </MenuItem>

              </Menu>

            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img src="/pictures/logo_transparent.png" alt="" style={{width:"7rem",height:"4.5rem"}}/>

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                        <Link to={"/"}>Home <HomeIcon/></Link>
                </Button>

                {auth.email ? "" : <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                   <Link to="/SignUp">SignUp <RoomPreferencesIcon/></Link>
                </Button>}

                {auth.email ? <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                   <Link to="/Profile">Profile <PersonIcon/></Link>
                </Button>
                 : ""}

                {auth.email && auth.groupName !== "" ?<Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                   <Link to="/Team">Team <GroupsIcon/></Link> 
                </Button>
                : ""}

                {auth.role && auth.role.length >= 1 && auth.role.includes("Admin") ?
                <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                 <Link to="/Admin">Admin <AdminPanelSettingsIcon/></Link> 
                </Button>
                : ""}

                {auth.email && auth.groupName == '' ?<Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                 <Link to="/CreateTeam">Create Team <NoteAddIcon/></Link>   
                </Button>
                : '' }

                {auth.email && auth.groupName == '' ?
                <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                 <Link to="/JoinTeam">Join Team <JoinInnerIcon/></Link>   
                </Button>
                : '' } 

                <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                  <Link to="/ContactUs">Contact Us <ConnectWithoutContactIcon/></Link>
                </Button>

            </Box>

            <FormControlLabel
            control={
              <Switch
                checked={theme === 'dark'}
                onChange={themeToggle}
                name="DarkMode"
                color="primary"
              />
            }
           label="DarkMode"
         />
            

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="user" src={auth.image} />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                  <MenuItem  onClick={handleCloseUserMenu}>
                    <Typography textAlign="center"> 
                    {auth.email ? <Link to="/Profile">Profile</Link> : ""}
                    </Typography>
                  </MenuItem>

                  <MenuItem  onClick={handleCloseUserMenu}>
                    <Typography textAlign="center"> 
                    {auth.email ? <LogOut /> : <Link to="/Login">Login</Link>} 
                    </Typography>
                  </MenuItem>
              </Menu>
              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
};
export default NavBar;
