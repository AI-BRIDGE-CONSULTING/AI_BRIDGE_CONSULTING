import { useState, useEffect, useRef } from "react";
import styles from "../component_styles/home.module.scss"
import Header from "./Header.jsx"
import MainContent from "./MainContent.jsx";
import { motion } from "framer-motion";

export default function Home() {

    const current = useRef(0);
    const isScrolling = useRef(false);

    useEffect(() => {
        const sections = document.querySelectorAll('.section');

        function scrollToSection(index) {
            if (isScrolling.current || index < 0 || index >= sections.length) return;

            isScrolling.current = true;
            sections[index].scrollIntoView({ behavior: 'smooth' });
            current.current = index;

            setTimeout(() => {
                isScrolling.current = false;
            }, 700);
        }

        const handleWheel = (e) => {
            if (e.deltaY > 0) scrollToSection(current.current + 1);
            else scrollToSection(current.current - 1);
        };

        const handleKey = (e) => {
            if (e.key === "ArrowDown") {
                scrollToSection(current.current + 1);
            }
            if (e.key === "ArrowUp") {
                scrollToSection(current.current - 1);
            }
        };

        window.addEventListener("wheel", handleWheel);
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
                    <motion.div
                        className={styles.firstPage}
                    >
                        <Header />
                    </motion.div>
                </div>
                <div className={`${styles.section} section`} id="section2">
                    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.7 }}
>
<MainContent/>
</motion.div>
                </div>

            </div>



        </>
    )
}