import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from "@mui/icons-material"


export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography variant="p">Et amet adipisicing voluptate commodo id sint consequat exercitation non aliquip commodo irure tempor eu. Magna irure magna esse aute ea et consequat velit sit adipisicing labore eiusmod est ullamco. Eiusmod laboris id reprehenderit cillum. Dolor ad non laborum sunt eu in cillum aute proident quis. Proident tempor exercitation Lorem amet exercitation aute irure proident nisi occaecat duis mollit nostrud.</Typography> */}

            {/* <NothingSelectedView /> */}
            <NoteView />


            <IconButton
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>

        </JournalLayout>

    )
}
