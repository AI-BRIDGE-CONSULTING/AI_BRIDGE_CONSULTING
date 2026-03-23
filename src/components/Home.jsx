import { useState, useEffect, useRef, use } from "react";
import styles from "../component_styles/home.module.scss";
import Header from "./Header.jsx";
import Form from "./Form.jsx";
import MainContent from "./MainContent.jsx";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Home({isSended, isMobile}) {
  useEffect(()=>{
    gsap.to(
       document.body,
        {overflowY: "auto", duration: 0}
    )
  })
  console.log(isMobile)
  
  const current = useRef(0);
  const isScrolling = useRef(false);
  const firstScroll = useRef(true);
  const buttonRef = useRef(null)
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    sections[0].scrollIntoView({ behavior: "smooth" });

    buttonRef.current.onclick = () =>{
      scrollToSection(2)
    }
    function scrollToSection(index) {
      // if(!firstScroll.current) return
      if (isScrolling.current || index < 0) return;
      console.log("scrolled");
      if (index >= sections.length) return;

      isScrolling.current = true;
      current.current = index;
      sections[index].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }

    const handleWheel = (e) => {
      console.log(e.deltaY);
      if (!firstScroll.current) return;
      if (e.deltaY > 0 && current.current < 1) {
        e.preventDefault();
        scrollToSection(current.current + 1);
      } else if (e.deltaY > 0 && current.current > 0) {
        firstScroll.current = false;
      } else if (e.deltaY < 0 && current.current <= 1) {
        e.preventDefault();
        scrollToSection(current.current - 1);
      }
    };

    const handleKey = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        scrollToSection(current.current + 1);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        scrollToSection(current.current - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <>
      <div id="fullpage">
        <div className={`${styles.section} section`} id="section1">
          <motion.div className={styles.firstPage}>
            <Header>
              <button className={styles.buttonBook} ref={buttonRef}>Zarezerwuj konsultacje</button>
            </Header>
          </motion.div>
        </div>
        <div className={`${styles.section} section`} id="section2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <MainContent isMobile={isMobile}/>
          </motion.div>
        </div>
        <div className={`${styles.section} section`} id="section3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            style={
              {display: "flex",
              justifyContent: 'center',
              alignItems: "center"}
            }
          >
            <Form isSended={isSended}/>
          </motion.div>
        </div>
      </div>
    </>
  );
}
