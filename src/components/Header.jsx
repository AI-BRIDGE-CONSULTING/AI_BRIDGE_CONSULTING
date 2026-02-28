import { useState, useEffect } from "react";
import styles from "../component_styles/header.module.scss"
import { motion } from "framer-motion";
    export default function Header(){
        return (
            <>
                <motion.div
      className={styles.header}
      initial={{ opacity: 0, y: -50 }}  
      animate={{ opacity: 1, y: 0 }}   
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],   
      }}
    >
                    <h1 className={styles.headerText}>Twój most do świata <span>sztucznej inteligencji.</span></h1>
                    <h4>Odkryj świat sztucznej inteligencji. Dzięki nam rozwiniesz swoją firmę o AI</h4>
                </motion.div>
            </>
        )
}