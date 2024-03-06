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
            <Box className="popupStyle no-outline">
                <div className="w-full bg-black flex" style={{ height: '35px', borderBottom: '4px solid black' }}>
                 <div className="bg-blue-500 h-full w-1/5 border-r-4 border-black"></div>
                 <div className="bg-red-600 h-full w-1/5 border-r-4 border-black"></div>
                 <div className="bg-white h-full w-1/5 border-r-4 border-black"></div>
                 <div className="bg-yellow-400 h-full w-1/5 border-r-4 border-black"></div>
                </div>
                <div style={{ paddingLeft: '10%', paddingRight: '10%', overflow: 'auto' }}>
                    <p className={`${tagline.className} text-black`} style={{ marginTop: '50px', fontSize: '35px' }}>{title}</p>
                    <hr style={{ backgroundColor: 'black', height: '2px', border: 'none' }} />
                    {children}
                </div>
            </Box>
        </Modal>
    );
};

export default PopUp;