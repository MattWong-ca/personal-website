import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { EB_Garamond } from 'next/font/google';

const poppins700 = Poppins({ subsets: ["latin-ext"], weight: ["700"], style: ["normal"] });
const garamond400 = EB_Garamond({ subsets: ["latin-ext"], weight: ["400"], style: ["normal"] });

interface NameBoxProps {
    nameZoomIn: boolean;
    taglineZoomIn: boolean;
    shortcutsZoomIn: boolean;
    setAboutOpen: () => void;
    setWorkOpen: () => void;
    setContactOpen: () => void;
    setFeaturesOpen: () => void;
}

const NameBox: React.FC<NameBoxProps> = ({ 
    nameZoomIn,
    taglineZoomIn,
    shortcutsZoomIn,
    setAboutOpen,
    setWorkOpen,
    setContactOpen,
    setFeaturesOpen
 }) => {
    return (
        <>
            <div className={`nameFontSize flex-1 ${poppins700.className} ${nameZoomIn ? 'zoom-in' : ''} ${nameZoomIn ? '' : 'hidden'}`} style={{ lineHeight: '1' }}>MATTHEW WONG</div>
            <div className={`taglineFontSize mt-2.5 ml-1 ${garamond400.className} ${taglineZoomIn ? 'zoom-in' : 'hidden'}`} style={{ lineHeight: '1' }}>I code + design software products</div>
            <div className={`regularNameBox shortcutsMarginTop flex ${garamond400.className} ${shortcutsZoomIn ? 'zoom-in' : 'hidden'}`}>
              <div className="pl-3">
                <div onClick={setAboutOpen} className="clickCursor" style={{ fontSize: '28px', lineHeight: '1' }}>✸ &nbsp;About</div>
                <div onClick={setWorkOpen} className="clickCursor" style={{ fontSize: '28px', marginTop: '18px', lineHeight: '1' }}>✸ &nbsp;Experience</div>
                <div onClick={setContactOpen} className="mobileShortcuts clickCursor" style={{ fontSize: '28px', marginTop: '18px', lineHeight: '1' }}>✸ &nbsp;Contact</div>
                <div onClick={setFeaturesOpen} className="mobileShortcuts clickCursor" style={{ fontSize: '28px', marginTop: '18px', lineHeight: '1' }}>✸ &nbsp;Features</div>
              </div>
              <div className="mobileShortcuts2 pl-14">
                <div onClick={setContactOpen} className="clickCursor" style={{ fontSize: '28px', lineHeight: '1' }}>✸ &nbsp;Contact</div>
                <div onClick={setFeaturesOpen} className="clickCursor" style={{ fontSize: '28px', marginTop: '18px', lineHeight: '1' }}>✸ &nbsp;Features</div>
              </div>
            </div>
            <div className={`mobileNameBox ${garamond400.className} ${shortcutsZoomIn ? 'zoom-in' : 'hidden'} flex mt-6`} style={{ fontSize: '22px', lineHeight: '1' }}>
              <div className="pl-3">
                <div onClick={setAboutOpen}>✸ &nbsp;About</div>
                {/* <div onClick={() => setWorkOpen(true)} className="mt-3.5">✸ &nbsp;Experience</div> */}
                <div onClick={setFeaturesOpen} className="mt-3.5">✸ &nbsp;Features</div>
                <div onClick={setContactOpen} className="mt-3.5">✸ &nbsp;Contact</div>
              </div>
            </div>
        </>
    );
};

export default NameBox;