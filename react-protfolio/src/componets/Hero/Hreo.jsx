import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image Of Me"
        className={styles.heroImg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Malek Ashraf</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          NodeJs. Reach out if you'd like to learn more!
        </p>
        <div className={styles.containContactCv}>
          <a
            href="mailto:malekashraf1500@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a
            href="MY_CV.pdf"
            alt=" Download my CV"
            download="CV.Pdf"
            className={styles.linkDownload}
          >
            <FontAwesomeIcon
              icon={faDownload}
              className={styles.iconDownload}
            />
            Download my CV
          </a>
        </div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
