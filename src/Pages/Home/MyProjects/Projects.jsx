
import './projects.css';

const Projects = ({ project }) => {
  const { id, projects_name, description, picture } = project;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="image-container">
        <img src={picture} alt="Shoes" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{projects_name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
