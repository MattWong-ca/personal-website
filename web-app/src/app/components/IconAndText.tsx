import React from 'react';
import Image from 'next/image';

interface IconAndTextProps {
    src: string;
    text?: string;
    link?: string;
    onClick?: () => void;
}

const IconAndText: React.FC<IconAndTextProps> = ({ src, text, link, onClick }) => {
    return (
        <div>
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <div onClick={onClick} className="flex flex-col items-center">
                        <Image src={src} alt="About me icon" width={52} height={52} className="rounded-40"></Image>
                        <p style={{ marginTop: '2px', fontSize: '11px', maxWidth: '55px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} className="apple text-white">{text}</p>
                    </div>
                </a>
            ) : (
                <div onClick={onClick} className="flex flex-col items-center">
                    <Image src={src} alt="About me icon" width={52} height={52} className="rounded-40"></Image>
                    <p style={{ marginTop: '2px', fontSize: '10px', maxWidth: '55px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} className="apple text-white">{text}</p>
                </div>
            )}
        </div>
    );
};

export default IconAndText;