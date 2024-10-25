import BlogCard from "@/components/blog_card";

import styles from "./css/blog_page.module.css"

const blogs = [
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
        id:2,
        img:'/images/bg_img_1.jpg',
        title: 'Title text',
        description: 'description text that should show up here.',
        author: 'alchemist',
        date: '24/10/2024',
        tags:['day', 'tech', 'life', ],
    },
    {
        id:3,
        img:'/images/bg_img_1.jpg',
        title: 'Title text',
        description: 'description text that should show up here.',
        author: 'alchemist',
        date: '24/10/2024',
        tags:['day', 'tech', 'life', ],
    },
]

const BlogList = () => {
  return (
    <main className={styles.main} id='blogs'>
        <h1 className={styles.headding}>Blogs</h1>
        <section className={styles.card_section}>
            <div className={styles.card_holder}>
                {
                    blogs.map((blog, index)=><BlogCard
                    key={index}
                    id={blog.id}
                    img={blog.img}
                    title={blog.title}
                    description={blog.description}
                    author={blog.author}
                    date={blog.date}
                    tags={blog.tags}
                    />)
                }
            </div>
        </section>
    </main>
  );
};

export default BlogList;
