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
            <h3 className="text-3xl text-center font-bold">Show My Top Projects</h3>
            <div className="mt-10 ">
                {/* {
                    projects.map(project => <Projects key={project.id}></Projects>)
                } */}
                <Projects></Projects>
            </div>

        </div>
    );
};

export default MyProjects;