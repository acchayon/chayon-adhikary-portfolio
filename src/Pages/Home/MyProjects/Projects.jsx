

import './projects.css';

const Projects = () => {
    // const { projects_name, description, picture } = project;

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            <div id='projects' className="card w-96 bg-base-100 shadow-xl transform transition-transform md:hover:scale-110">
                <div className="image-container">
                    <img src="https://i.ibb.co/Wkg7rrr/melody-minds-b5258-web-app.png" alt="Shoes" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">Melody Minds</h2>
                    <p>This website based on music learning school.Where any time all student came to visit & enrolled all courses.</p>
                    <div className="card-actions justify-between">
                        <button className="btn btn-xs btn-outline btn-info"><a target='_blank' href="https://github.com/acchayon/melody-minds-client">Client</a></button>
                        <button className="btn btn-xs btn-outline btn-info"><a target='_blank' href="https://github.com/acchayon/melody-minds-server">Server</a></button>
                    </div>
                    <button className="btn btn-outline btn-info"><a target='_blank' href="https://melody-minds-b5258.web.app">Show Live Demo</a></button>
                </div>
            </div>

            <div id='projects' className="card w-96 bg-base-100 shadow-xl transform transition-transform hover:scale-110">
                <div className="image-container">
                    <img src="https://i.ibb.co/6BhRBFq/toy-garden-e2b26-web-app.png"alt="Shoes" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">Toy Garden</h2>
                    <p>This is basically an e-commerce site where the seller can sell his toys for children.Childrens will be happy to see his favourite toys.</p>
                    <div className="card-actions justify-between">
                        <button className="btn btn-xs btn-outline btn-info"><a target='_blank' href="https://github.com/acchayon/toy-garden-client">Client</a></button>
                        <button className="btn btn-xs btn-outline btn-info"><a target='_blank' href="https://github.com/acchayon/toy-garden-server">Server</a></button>
                    </div>
                    <button className="btn btn-outline btn-info"><a target='_blank' href="https://toy-garden-e2b26.web.app">Show Live Demo</a></button>
                </div>
            </div>

            <div id='projects' className="card w-96 bg-base-100 shadow-xl transform transition-transform hover:scale-110">
                <div className="image-container">
                    <img src="https://i.ibb.co/n7NqQ1F/chefs-best-recipe-client-web-app.png" alt="Shoes" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">Chefs Best Recipe</h2>
                    <p>Bangladesh has many top class chefs. I made this site with some special chefs of our country. Here you visit to see our most desirable chefs with their special recipes </p>
                    <div className="card-actions justify-between">
                        <button className="btn btn-xs btn-outline btn-info"><a target='_blank' href="https://github.com/acchayon/chefs-best-recipe-client">Client</a></button>
                        <button className="btn btn-xs btn-outline btn-info"><a target='_blank' href="https://github.com/acchayon/chefs-best-recipe-server">Server</a></button>
                    </div>
                    <button className="btn btn-outline btn-info"><a target='_blank' href="https://chefs-best-recipe-client.web.app">Show Live Demo</a></button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
