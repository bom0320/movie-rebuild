import styles from "../../styles/about-us.module.css";

export default function AboutUsPage() {
    const skills = [
        { name: "HTML", color: "#f94144" },
        { name: "CSS", color: "#2196f3" },
        { name: "Sass", color: "#e91e63" },
        { name: "TailwindCSS", color: "#06b6d4" },
        { name: "JavaScript", color: "#fbbf24" },
        { name: "TypeScript", color: "#3b82f6" },
        { name: "React", color: "#10b981" },
        { name: "Svelte", color: "#f97316" },
        { name: "htmx", color: "#64748b" },
        { name: "Express", color: "#737373" },
        { name: "NextJS", color: "#0f172a" },
        { name: "NodeJS", color: "#86efac" },
        { name: "Electron", color: "#67e8f9" },
        { name: "Shopify", color: "#bbf7d0" },
    ]
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
                    {skills.map((skill, index) => (
                        <span key={index} className={styles.tag} style={{ backgroundColor: skill.color }}>
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h2 className={styles.main_h2}>Link</h2>
                    <div className={styles.section}>
                        <p >Github:</p>
                        <a
                            href="https://github.com/bom0320/movie-rebuild"
                            className={styles.button}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="16" height="16">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
                            </svg>
                            bom0320/movie-rebuild
                        </a>
                    </div>


                </div>
                <div className={styles.section}>
                    <p>참고 강의:</p>
                    <a className={styles.button} href="https://nomadcoders.co/nextjs-for-beginners">NextJS 14 시작하기 - 노마드 코더 Nomad Coders</a>
                </div>

            </div>
        </div>
    </>
}