import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiFillCheckCircle } from 'react-icons/ai';
import { ReactNode, useState } from 'react';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};
interface LayoutProps {
    open: boolean,
    setOpen: ()=> void,
    children: ReactNode,
    sx?: object
}

//Bawa setOpen jika ingin ke touchable modal component
export default function modal(props:LayoutProps) {
    const {children, open, sx=style, setOpen} = props


    return (
    <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
        open={open }
        onClose={setOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={sx}>
            {children}
        </Box>
        </Modal>
    </div>
    );
}
