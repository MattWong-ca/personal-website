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
                <div className="flex" style={{ width: '100%', height: '35px', backgroundColor: 'black', borderBottom: '4px solid black' }}>
                 <div className="bg-blue-500 h-full w-1/5 border-r-4 border-black"></div>
                 <div className="bg-red-600 h-full w-1/5 border-r-4 border-black"></div>
                 <div className="bg-white h-full w-1/5 border-r-4 border-black"></div>
                 <div className="bg-yellow-400 h-full w-1/5 border-r-4 border-black"></div>
                </div>
                <div style={{ paddingLeft: '10%', paddingRight: '10%', overflow: 'auto' }}>
                    <p className={`${tagline.className}`} style={{ marginTop: '50px', color: 'black', fontSize: '35px' }}>{title}</p>
                    <hr style={{ backgroundColor: 'black', height: '2px', border: 'none' }} />
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
    height: '78%',
    bgcolor: 'white',
    boxShadow: 24,
    border: '4px solid black',
    overflowY: 'auto'
};