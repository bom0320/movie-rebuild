import styles from "../../styles/about-us.module.css";

export default function AboutUsPage() {
    return <>
        <div className={styles.container_main}>

            <h1 className={styles.main_h1}>About</h1>
            <div className={styles.container}>
                <h2 className={styles.main_h2}>Me</h2>
                <p>KIM BOM</p>
                <p>개발자</p>
                <p>대한민국, 광주 광역시</p>
            </div>
            <div className={styles.container}>
                <h2 className={styles.main_h2}>Skills & Experiences</h2>
                <div className={styles.skills_wrapper}>
                    <span className={styles.tag} style={{ backgroundColor: "#f94144" }}>HTML</span>
                    <span className={styles.tag} style={{ backgroundColor: "#2196f3" }}>CSS</span>
                    <span className={styles.tag} style={{ backgroundColor: "#e91e63" }}>Sass</span>
                    <span className={styles.tag} style={{ backgroundColor: "#06b6d4" }}>TailwindCSS</span>
                    <span className={styles.tag} style={{ backgroundColor: "#fbbf24" }}>JavaScript</span>
                    <span className={styles.tag} style={{ backgroundColor: "#3b82f6" }}>TypeScript</span>
                    <span className={styles.tag} style={{ backgroundColor: "#10b981" }}>React</span>
                    <span className={styles.tag} style={{ backgroundColor: "#f97316" }}>Svelte</span>
                    <span className={styles.tag} style={{ backgroundColor: "#64748b" }}>htmx</span>
                    <span className={styles.tag} style={{ backgroundColor: "#737373" }}>Express</span>
                    <span className={styles.tag} style={{ backgroundColor: "#0f172a" }}>NextJS</span>
                    <span className={styles.tag} style={{ backgroundColor: "#86efac" }}>NodeJS</span>
                    <span className={styles.tag} style={{ backgroundColor: "#67e8f9" }}>Electron</span>
                    <span className={styles.tag} style={{ backgroundColor: "#bbf7d0" }}>Shopify</span>
                </div>
            </div>
            <div className={styles.container}>
                <h2 className={styles.main_h2}>Link</h2>
            </div>
        </div>
    </>
}