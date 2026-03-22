import { useState, useRef, useEffect } from "react";

export default function useIsMobile(){
    const mobileMaxPx = 500

    const [deviceWidth, SetDeviceWidth] = useState(() => window.innerWidth)
     useEffect(() => {
    const handleResize = () => SetDeviceWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
    return deviceWidth <= mobileMaxPx;
}

