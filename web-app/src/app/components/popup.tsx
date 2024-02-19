import React, { ReactNode } from 'react';
import { Box, Modal } from '@mui/material';
import { Poppins } from 'next/font/google';

const tagline = Poppins({
    subsets: ["latin-ext"],
    weight: ["600"],
    style: ["normal"]
  });
  
  const experience = Poppins({
    subsets: ["latin-ext"],
    weight: ["400"],
    style: ["normal"]
  });

interface PopUpProps {
    title: string;
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({ title, open, onClose, children }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box className={`no-outline`} sx={popupStyle}>
                <div style={{ width: '100%', height: '30px', backgroundColor: '#a5b1c2', borderTopLeftRadius: '9px', borderTopRightRadius: '9px' }}></div>
                <div style={{ paddingLeft: '10%', paddingRight: '10%', overflow: 'auto' }}>
                    <p className={`${tagline.className}`} style={{ marginTop: '50px', color: 'white', fontSize: '35px' }}>{title}</p>
                    <hr style={{ backgroundColor: 'white', height: '2px', border: 'none' }} />
                    <div style={{ paddingTop: '10px' }}>
                        {children}
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default PopUp;

const popupStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '80%',
    bgcolor: '#0097e6',
    boxShadow: 24,
    borderRadius: '12px',
    overflowY: 'auto'
};