import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


import styles from "./css/about_page.module.css"

const About = () => {
  return (
    <main className={styles.main}  id='about'>
      <div className={styles.card}>
        <section className={styles.intro_section}>
          <h1 className={styles.me}>Hi, I'm Alchemist</h1>
          <h1 className={styles.focus_point}>a full stack Developer</h1>
          <p className={styles.what_i_do}>I create all kinds of websites from portfolios, to huge e-commerce sites. If you are interested to get one for you, then don't forget to contact me.</p>
          <Link href={'#contact'} className={styles.contact_hook} >contact me..</Link>
        </section>

        <section className={styles.dp_section}>
          <img className={styles.dp_img} alt="dp" width={100} height={100} src="/images/me.jpg"/>
        </section>
      </div>

      <section className={styles.link_section}>
        <Link className={styles.icon} href={"github"}><FaGithub/></Link>
        <Link className={styles.icon} href={"github"}><FaLinkedin /></Link>
        <Link className={styles.icon} href={"github"}><FaXTwitter /></Link>
        <Link className={styles.icon} href={"github"}><SiGmail /></Link>
      </section>
    </main>
  );
};

export default About;
