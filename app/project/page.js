import ProjectCard from "@/components/project_card";

import styles from "./project_page.module.css"

const projects = [
    {
        id:1,
        img:'/images/bg_img_1.jpg',
        title: 'Title text',
        description: 'description text that should show up here.',
        author: 'alchemist',
        date: '24/10/2024',
        tags:['day', 'tech', 'life', ],
    },
    {
        id:1,
        img:'/images/bg_img_1.jpg',
        title: 'Title text',
        description: 'description text that should show up here.',
        author: 'alchemist',
        date: '24/10/2024',
        tags:['day', 'tech', 'life', ],
    },
    {
        id:1,
        img:'/images/bg_img_1.jpg',
        title: 'Title text',
        description: 'description text that should show up here.',
        author: 'alchemist',
        date: '24/10/2024',
        tags:['day', 'tech', 'life', ],
    },
    {
        id:1,
        img:'/images/bg_img_1.jpg',
        title: 'Title text',
        description: 'description text that should show up here.',
        author: 'alchemist',
        date: '24/10/2024',
        tags:['day', 'tech', 'life', ],
    },

]

const ProjectList = () => {
    return (
        <main className={styles.main} id='projects'>
            <h1 className={styles.headding}>Projects</h1>
            <section className={styles.card_section}>
                <div className={styles.card_holder}>
                    {
                    projects.map((project, index)=><ProjectCard
                        key={index}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        img={project.img}
                    />)
                    }
                </div>
            </section>
        </main>
    );
};
export default ProjectList;
