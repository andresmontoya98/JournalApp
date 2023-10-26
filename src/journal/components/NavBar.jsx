import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { startLogout } from "../../store/auth/thunks"
import { useDispatch } from "react-redux"

export const NavBar = ({ drawerWidth = 240, toogleSideBar }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <AppBar position="fixed" xs={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` }
        }}>
            <Toolbar>
                <IconButton
                    onClick={toogleSideBar}
                    color="inherit"
                    edge='start'
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ ml: 1 }}>
                    <Typography variant="h5" noWrap component={'div'}>NoteFlow</Typography>
                    <IconButton onClick={onLogout} color='error'>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar >
    )
}
