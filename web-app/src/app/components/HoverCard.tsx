import { useRef, useEffect } from "react";
import "./Card.css";
import Phone from "./Phone";

interface iPhoneProps {
    phoneZoomIn: boolean;
    taglineZoomIn: boolean;
    shortcutsZoomIn: boolean;
    aboutOpen: boolean;
    workOpen: boolean;
    contactOpen: boolean;
    featuresOpen: boolean;
    projectsOpen: boolean;
    educationOpen: boolean;
    questsOpen: boolean;
    writingOpen: boolean;
    emailOpen: boolean;
    phoneOpen: boolean;
    setAboutOpen: (bool: boolean) => void;
    setWorkOpen: (bool: boolean) => void;
    setContactOpen: (bool: boolean) => void;
    setFeaturesOpen: (bool: boolean) => void;
    setProjectsOpen: (bool: boolean) => void;
    setEducationOpen: (bool: boolean) => void;
    setQuestsOpen: (bool: boolean) => void;
    setWritingOpen: (bool: boolean) => void;
    setEmailOpen: (bool: boolean) => void;
    setPhoneOpen: (bool: boolean) => void;
}

const useGlossEffect = (cardRef: React.RefObject<HTMLDivElement>, cardContentRef: React.RefObject<HTMLDivElement>, glossRef: React.RefObject<HTMLDivElement>) => {
    const mapNumberRange = (n: number, a: number, b: number, c: number, d: number) => {
        return ((n - a) * (d - c)) / (b - a) + c;
    };

    const addShineClass = () => {
        requestAnimationFrame(() => {
            glossRef!.current!.classList.add("gloss--shine");
        });
    };

    const calculateTransformValues = (pointerX: number, pointerY: number, cardRect: DOMRect) => {
        const halfWidth = cardRect.width / 2;
        const halfHeight = cardRect.height / 2;
        const cardCenterX = cardRect.left + halfWidth;
        const cardCenterY = cardRect.top + halfHeight;
        const deltaX = pointerX - cardCenterX;
        const deltaY = pointerY - cardCenterY;
        const distanceToCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.max(halfWidth, halfHeight);
        const degree = mapNumberRange(distanceToCenter, 0, maxDistance, 0, 10);
        const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1);
        const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1);
        return { rx, ry, degree, distanceToCenter, maxDistance };
    };

    const applyTransform = (rx: number, ry: number, degree: number, distanceToCenter: number, maxDistance: number) => {
        const cardTransform = `perspective(800px) rotate3d(${-rx}, ${ry}, 0, ${degree * 0.5}deg)`;
        const glossTransform = `translate(${-ry * 50}%, ${-rx * 50}%) scale(1.8)`;
        const glossOpacity = mapNumberRange(distanceToCenter, 0, maxDistance, 0, 0.3);

        cardContentRef!.current!.style.transform = cardTransform;
        glossRef!.current!.style.transform = glossTransform;
        glossRef!.current!.style.opacity = glossOpacity.toString();
    };

    const handleMouseMove = ({ clientX, clientY }: { clientX: number; clientY: number }) => {
        const card = cardRef.current;
        const cardRect = card!.getBoundingClientRect();

        const { rx, ry, degree, distanceToCenter, maxDistance } = calculateTransformValues(
            clientX,
            clientY,
            cardRect
        );

        applyTransform(rx, ry, degree, distanceToCenter, maxDistance);
    };

    const handleMouseLeave = () => {
        cardContentRef.current!.style.transform = '';
        glossRef.current!.style.opacity = "0";
    };

    useEffect(() => {
        const card = cardRef.current;

        addShineClass();

        card!.addEventListener("mousemove", handleMouseMove);
        card!.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card!.removeEventListener("mousemove", handleMouseMove);
            card!.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cardRef, cardContentRef, glossRef]);
};

const HoverCard = ({
    phoneZoomIn,
    taglineZoomIn,
    shortcutsZoomIn,
    aboutOpen,
    workOpen,
    contactOpen,
    featuresOpen,
    projectsOpen,
    educationOpen,
    questsOpen,
    writingOpen,
    emailOpen,
    phoneOpen,
    setAboutOpen,
    setWorkOpen,
    setContactOpen,
    setFeaturesOpen,
    setProjectsOpen,
    setEducationOpen,
    setQuestsOpen,
    setWritingOpen,
    setEmailOpen,
    setPhoneOpen
}: iPhoneProps) => {
    const cardRef = useRef(null);
    const cardContentRef = useRef(null);
    const glossRef = useRef(null);

    useGlossEffect(cardRef, cardContentRef, glossRef);

    return (
        <div className="card" ref={cardRef}>
            <div className="content" ref={cardContentRef}>
                <div className="gloss" ref={glossRef} />
                <Phone
                    phoneZoomIn={phoneZoomIn}
                    taglineZoomIn={taglineZoomIn}
                    shortcutsZoomIn={shortcutsZoomIn}
                    aboutOpen={aboutOpen}
                    workOpen={workOpen}
                    contactOpen={contactOpen}
                    featuresOpen={featuresOpen}
                    projectsOpen={projectsOpen}
                    educationOpen={educationOpen}
                    questsOpen={questsOpen}
                    writingOpen={writingOpen}
                    emailOpen={emailOpen}
                    phoneOpen={phoneOpen}
                    setAboutOpen={setAboutOpen}
                    setWorkOpen={setWorkOpen}
                    setContactOpen={setContactOpen}
                    setFeaturesOpen={setFeaturesOpen}
                    setProjectsOpen={setProjectsOpen}
                    setEducationOpen={setEducationOpen}
                    setQuestsOpen={setQuestsOpen}
                    setWritingOpen={setWritingOpen}
                    setEmailOpen={setEmailOpen}
                    setPhoneOpen={setPhoneOpen}
                />
            </div>
        </div>
    );
};

export default HoverCard;