// Attempt to build pop up from scratch
  // const popupRef = useRef<HTMLDivElement | null>(null);
  // const iconRef = useRef<HTMLDivElement | null>(null);

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (
  //     popupRef.current &&
  //     !popupRef.current.contains(event.target as Node) &&
  //     iconRef.current &&
  //     !iconRef.current.contains(event.target as Node)
  //   ) {
  //     setPopupVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   // Add event listener on component mount
  //   document.addEventListener('mousedown', handleClickOutside);
  //   // Remove event listener on component unmount
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);
  {/* <div className="flex flex-col items-center">
                <Image style={{ position: 'relative', zIndex: '1000' }} onClick={togglePopup} src={'/phone.webp'} alt="About me icon" width={55} height={55} className="rounded-40"></Image>
                <p style={{ marginTop: '0px', fontSize: '11px', maxWidth: '55px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} className="apple text-white">{'text'}</p>
              </div> */}
{/* <div style={{ position: 'relative', zIndex: '100' }}>
        {isPopupVisible && (<div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
          <div style={{ width: '60%', height: '70%', backgroundColor: 'black', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ width: '100%', height: '20px', backgroundColor: 'grey', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}></div>
            <p>This is the content of the centered component.</p>
          </div>
        </div>)}
      </div> */}


// Icon mapping
//  <div className="flex justify-center">
//             <div className="pt-4 flex space-x-5">
//               {icons.map((item, itemIndex) => (
//                 <IconAndText key={itemIndex} src={item.src} text={item.text} link={item.link} />
//               ))}
//             </div>
//           </div> 


{/*
        <div className="bg-gray-300 w-100 h-300 border-4 border-black rounded-70 flex items-start justify-center bg-cover pt-3"
          style={{ backgroundImage: `` }}>
          <div className="relative">
            <div className="w-70 flex items-center">
              <p className="text-m text-white justify-start pr-5 pl-2">{currentTime}</p>
              <div className="bg-black rounded-xl w-20 h-6 mx-auto"></div>
              <Image src="/statusbar.png" alt="iPhone Status Bar" width={80} height={50} className="filter brightness-0 invert justify-end" />
            </div>
            <div  className="pt-8 pl-1 flex space-x-5">
              {icons.map((item, itemIndex) => (
                <IconAndText key={itemIndex} src={item.src} text={item.text} />
              ))}
            </div>
          </div>
        </div>
        */ }

{/* <div style={{ marginTop: '15px', paddingLeft: '20px', paddingRight: '20px', display: 'flex', justifyContent: 'space-between', height: '20px', width: '100%'}}>
          <p className="apple">{currentTime}</p>
          <Image src="/statusbar.png" alt="iPhone Status Bar" width={80} height={50} className="filter brightness-0 invert" />
        </div> */}