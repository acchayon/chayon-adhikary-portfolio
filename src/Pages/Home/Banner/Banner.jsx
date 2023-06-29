import Intro from "./Intro/Intro";
import Photo from "./Photo/Photo";

const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
            <Intro></Intro>
            <Photo></Photo>
        </div>
    );
};

export default Banner;