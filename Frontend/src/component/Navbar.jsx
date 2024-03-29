import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts'
import { doSignOut } from '../firebase/auth'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const {currentUser} =useAuth();
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isSigningIn, setIsSigningIn] = React.useState(false)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#111c34", height: "5rem" }}>
                <Container maxWidth="xl" >
                    <Toolbar disableGutters>
                        <img src="./mainlogo.png" alt="Logo" style={{ width: "12rem", height: "2rem", justifyContent: "space-between", marginBottom: "-50px", paddingRight: "2rem", marginTop: "-50px", marginLeft: "0px" }} />
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link href="/" style={{ color: "black", textDecoration: "none" }}>Home</Link>
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link href="/ProfilePage" style={{ color: "black", textDecoration: "none" }}>Dashboard</Link>
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link href="/createproject" style={{ color: "black", textDecoration: "none" }}>Create Project</Link>
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link href="/project" style={{ color: "black", textDecoration: "none" }}>Projects</Link>
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                href="/"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                            <Button
                                href="/ProfilePage"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Dashboard
                            </Button>
                            <Button
                                href="/createproject"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Create Project
                            </Button>
                            <Button
                                href="/project"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Projects
                            </Button>
                        </Box>
                        {
                            userLoggedIn
                                ?
                                <>
                                <Avatar alt="Remy Sharp" src={currentUser.photoURL} />
                                    <Button onClick={() => { doSignOut().then(() => { setIsSigningIn(false); navigate('/'); }) }} style={{ height: "6vh", width: "20vh", color: "white", marginLeft: "-2rem" }}>Logout</Button>
                                    
                                </>
                                :
                                <>
                                    <Button href="/" onClick={(e) => { onGoogleSignIn(e) }} style={{ height: "6vh", width: "20vh", color: "white", marginLeft: "-2rem" }}>Sign Up/Sign In</Button>
                                </>
                        }

                    </Toolbar>
                </Container>
            </AppBar>


        </>
    );
}
export default Navbar;