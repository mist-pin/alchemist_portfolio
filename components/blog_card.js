import Image from "next/image"
import Link from "next/link"
import styles from "./css/blog_card.module.css"


export default function BlogCard({img, title, description, author, date, tags, id}){
    return<>
        <div className={styles.card}>
            <div className={styles.img_holder}>
                <span className={styles.date}>{date}</span>
                <Image className={styles.img} src={img} alt="" width={40} height={40}/>
            </div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <div className={styles.tag_by_holder}>
                <div className={styles.tag_holder}>
                {
                    tags && <>
                        {tags.map((tag, index)=><span key={index} className={styles.tag}>{`#${tag}`}</span>)}
                    </>
                }
                </div>
                <span className={styles.author}>{author}</span>
            </div>
            <Link className={styles.button} href={`/blog/${id}`}> Read More </Link>
        </div>
    </>
}