import React from "react";
import { getImageUrl } from "../../utils";
import styles from  "./About.module.css"
export const About =()=>{

    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sittiing with labtop " className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Icon"/>
                    <div className={styles.aboutItemText}>
                    <h3>Frontend Devoloper</h3>
                    <p>I'm a frontend developer in buliding responsive and optimized site</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server Icon"/>
                    <div className={styles.aboutItemText}>
                    <h3>Backtend Devoloper</h3>
                    <p>I have experience developing fast and optimized back-end systems and APIS </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="uiIcon Icon"/>
                    <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I have designed multiple landing pages and have created design systems as well </p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    )
}