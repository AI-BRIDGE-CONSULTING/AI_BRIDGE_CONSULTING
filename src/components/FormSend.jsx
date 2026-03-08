import { useContext, useEffect, useRef } from "react";
import { SendContext } from "../context/Context";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "../component_styles/sendedForm.module.scss";
import gsap from "gsap";
import { body } from "framer-motion/m";

export default function FormSend() {
    const navigate = useNavigate();
    const headerRef = useRef(null);
    const buttonRef = useRef(null)
  useEffect(() => {
    if (headerRef.current) {
        headerRef.current.scrollIntoView({ behavior: "auto" });
        
    }
    // document.body.style.overflow = "hidden";
    gsap.to(
        document.body,
        {
            scrollTrigger: {
            trigger: ".SendedFormMessConainer",
    start: "top top",
    end: "+=0",
    pin: true
  },
            overflowY: "hidden", scrollTrigger: "", duration: 0
        }
        
    )
    
    
    
  }, []);
  useEffect(()=>{
    buttonRef.current.onclick = () =>{
        navigate('/Home')
    }
}, [buttonRef.current])

  const { isSended, setIsSended } = useContext(SendContext);
  
  if (!isSended) {
    
    return (
      <>
        <div className={`${styles.SendedFormMessConainer} SendedFormMessConainer`}>
          <h1>Ups.. trafiłeś na złą strone </h1>
          <button ref={buttonRef}>Wróć na stronę główną</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={`${styles.SendedFormMessConainer} SendedFormMessConainer`}>
            <h1>Wysłano formularz pomyślnie</h1>
            <h3>Dziękujemy za podjęcie z nami współpracy</h3>
            <button ref={buttonRef}>Wróć na stronę główną</button>
            </div>
      </>
    );
  }
}
