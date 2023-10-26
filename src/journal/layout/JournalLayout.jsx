import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";
import { useState } from "react"

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {

    const [open, setOpen] = useState(false);

    const toogleSideBar = () => {
        setOpen(!open);
    }

    return (
        <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

            <NavBar drawerWidth={drawerWidth} toogleSideBar={toogleSideBar} />

            {
                open ? <SideBar drawerWidth={drawerWidth} toogleSideBar={toogleSideBar} /> : ''
            }


            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />

                {children}

            </Box>
        </Box>
    )
}
