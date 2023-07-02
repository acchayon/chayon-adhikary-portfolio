import { useEffect, useState } from "react";
import Projects from "./Projects";

const MyProjects = () => {

    const [projects, showProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
        .then(res => res.json())
        .then(data => showProjects(data))
    },[])

    return (
        <div className="mt-10 mb-10">
            <h3 className="text-3xl text-center font-bold">My Projects</h3>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {
                    projects.map(project => <Projects key={project.id} project={project}></Projects>)
                }
            </div>

        </div>
    );
};

export default MyProjects;