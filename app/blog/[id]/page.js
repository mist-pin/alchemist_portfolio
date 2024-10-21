const get_blog_data = async (id)=>{

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

    const blog = blogs.find(blog => blog.id == id);

    return blog ? blog : null;
}

const BlogPost = async ({params}) => {
    const blog = await get_blog_data(params.id)

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
        </div>
    );
};

export default BlogPost;
