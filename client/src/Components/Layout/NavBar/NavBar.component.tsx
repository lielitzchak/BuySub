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


const NavBar = (): JSX.Element => {
  const { auth, setAuth }: any = useContext(authContext);

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
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              BuySub
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

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      {auth.email ? "" : <Link to="/SignUp">SignUp</Link>}                  
                    </Typography>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                    {auth.email ? <Link to="/Profile">Profile</Link> : ""}               
                    </Typography>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                    {auth.email && auth.groupName !== "" ? <Link to="/Team">Team</Link> : ""}              
                    </Typography>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                    {auth.role && auth.role.length >= 1 && auth.role.includes("Admin") ? <Link to="/Admin">Admin</Link> : ""}             
                    </Typography>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                    {auth.email && auth.groupName == '' ? <Link to="/CreateTeam">Create Team</Link> : '' }             
                    </Typography>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                    {auth.email && auth.groupName == '' ? <Link to="/JoinTeam">Join Team</Link> : '' }             
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
              BuySub
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                        <Link to={"/"}>Home</Link>
                </Button>

                <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                  {auth.email ? "" : <Link to="/SignUp">SignUp</Link>}
                </Button>

                <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                  {auth.email ? <Link to="/Profile">Profile</Link> : ""}
                </Button>

                <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                  {auth.email && auth.groupName !== "" ? <Link to="/Team">Team</Link> : ""}
                </Button>

                <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                {auth.role && auth.role.length >= 1 && auth.role.includes("Admin") ? <Link to="/Admin">Admin</Link> : ""}
                </Button>

                <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                {auth.email && auth.groupName == '' ? <Link to="/CreateTeam">Create Team</Link> : '' }  
                </Button>

                <Button onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                {auth.email && auth.groupName == '' ? <Link to="/JoinTeam">Join Team</Link> : '' }   
                </Button>

            </Box>
            

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="user" src={auth.image} />
                </IconButton>
              </Tooltip>

              {/* <Tooltip title="Dark mode">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <div>
                    <input type="checkbox" id="toggle" />
                    <label htmlFor="toggle"></label>
                  </div>
                </IconButton>
              </Tooltip> */}
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
