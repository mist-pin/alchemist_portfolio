import Link from "next/link";
import Image from "next/image";
import styles from "./css/project_card.module.css"

export default function ProjectCard({id, title, description, img}){
    return <>
        <div className={styles.card}>
            <Link className={styles.card_link} href={`/project/${id}`}>
                <div className={styles.image_holder}>
                    <Image alt='project-thumbnail' className={styles.image} src={img} width="400" height="200"/>
                </div>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.description}>{description}</span>
            </Link>
        </div>
    </>
}