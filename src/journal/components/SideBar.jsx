import { Box, Divider, Drawer, Grid, List, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { SideBarItem } from './SideBarItem';

export const SideBar = ({ drawerWidth = 240, toogleSideBar }) => {

    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                onClick={toogleSideBar}
                variant='permanent' // temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar >
                    <Typography variant='h6' noWrap component='div' sx={{ ml: 5 }}>
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />

                <List >
                    {
                        notes.map(note => (
                            <SideBarItem key={note.id} {...note} />
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
