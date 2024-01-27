import React from 'react';
import Image from 'next/image';

interface IconAndTextProps {
    src: string;
    text: string;
}

const IconAndText: React.FC<IconAndTextProps> = ({ src, text }) => {
    return (
        <div className="flex flex-col items-center">
            <Image src={src} alt="About me icon" width={55} height={55} className="rounded-40"></Image>
            <p className="text-xs text-white">{text}</p>
        </div>
    );
};

export default IconAndText;