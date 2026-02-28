import styles from "../component_styles/mainContent.module.scss";

export default function MainContent() {
    return (
        <>
            <div className={styles.mainContent}>
                <div className={styles.headings}>
                    <h2>
                        DLACZEGO AI JEST TAK ISTOTNE
                    </h2>
                    <h4>AI stało się juz codziennością naszego zycia. Oto kilka powodów dla których powinieneś zacząć go uzywać</h4>
                </div>
                <div className={styles.reasons}>
                    <div className={styles.reasonBox}>
                        <div className={styles.imgContainer}><img src="../../public/icons/time.svg" alt="" /></div>
                    </div>
                    <div className={styles.reasonBox}>
                        <div className={styles.imgContainer}><img src="../../public/icons/growth.svg" alt="" /></div>
                    </div>
                    <div className={styles.reasonBox}>
                        <div className={styles.imgContainer}><img src="../../public/icons/growth.svg" alt="" /></div>
                    </div>
                    <div className={styles.reasonBox}>
                        <div className={styles.imgContainer}><img src="../../public/icons/dolar.svg" alt="" /></div>
                    </div>
                    <div className={styles.reasonBox}>
                        <div className={styles.imgContainer}><img src="../../public/icons/team.svg" alt="" /></div>
                    </div>
                    <div className={styles.reasonBox}>
                        <div className={styles.imgContainer}><img src="../../public/icons/lightning.svg" alt="" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}