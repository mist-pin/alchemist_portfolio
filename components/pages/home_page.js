'use client'

import Link from "next/link";
import ProjectCard from "@/components/project_card"
import styles from "./css/home_page.module.css"
import AnimatedArrow from "@/components/home_arrow";
import { useContext } from "react";
import { NavContext } from "@/app/layout";

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is the description for project 1.',
    img: '/images/lap_img_1.jpg',
  },
  {
    id: 2,
    title: 'Project 1',
    description: 'This is the description for project 1.',
    img: '/images/lap_img_1.jpg',
  },
  {
    id: 3,
    title: 'Project 1',
    description: 'This is the description for project 1. This is the description for project 1.This is the description for project 1.This is the description for project 1. This is the description for project 1.This is the description for project 1.This is the description for project 1. This is the description for project 1.This is the description for project 1.This is the description for project 1.This is the description for project 1.This is the description for project 1.',
    img: '/images/lap_img_1.jpg',
  },
];

const Home = () => {
  const {enable_nav} = useContext(NavContext)

  return <>
      <main className={styles.main} id="home">
        <section className={styles.header}>
          <div className={styles.text_holder}>
            <span className={styles.left}>Alche</span><span className={styles.right}>mist</span>
          </div>
          <p className={styles.sub_headding}>A Passionate Fullstack Developer</p>
        </section>

        <section className={styles.card_section}>
          <h2 className={styles.project_header}><span className={styles.project_header_first_letter}>F</span>eatured <br/> Projects</h2>
          <div className={styles.card_arrow_holder}>
            <div className={styles.card_holder}>
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id = {project.id}
                  title={project.title}
                  description={project.description}
                  img={project.img}
                />
              ))}
            </div>
            <div className={styles.next_button}>
              {enable_nav || <AnimatedArrow/>}
              {enable_nav && <Link href={'/#projects'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="80" fill="gray" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
                </Link>}
            </div>
          </div>
        </section>
      </main>
    </>
};

export default Home;
