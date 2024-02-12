import React from 'react';
import Image from 'next/image';

interface IconAndTextProps {
    src: string;
    text?: string;
    link?: string;
}

const IconAndText: React.FC<IconAndTextProps> = ({ src, text, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center">
                <Image src={src} alt="About me icon" width={55} height={55} className="rounded-40"></Image>
                <p style={{ marginTop: text ? '2px' : '0px', fontSize: '11px', maxWidth: '55px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} className="apple text-white">{text}</p>
            </div>
        </a>
    );
};

export default IconAndText;