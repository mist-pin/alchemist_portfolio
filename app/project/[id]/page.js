const get_project_data = async (id)=>{

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

    const project = projects.find(blog => blog.id == id);

    return project ? project : null;
}

const Project = async ({params}) => {
    const project = await get_project_data(params.id)

    return (
        <div>
            <h1 className="text-white" >Dummy page with id :{`${params.id}`} <br/> the data isn't fetched from the api but from local json data(dummy)</h1>
            <h2 className="text-white">{project.title}</h2>
            <p className="text-white">{project.description}</p>
        </div>
    );
};

export default Project;
