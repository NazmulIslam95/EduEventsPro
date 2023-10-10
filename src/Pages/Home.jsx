import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Gallery from "../Components/Gallery/Gallery";
import OurTeam from "../Components/OurTeam/OurTeam";
import Statistic from "../Components/Statistic/Statistic";
import Testimonials from "../Components/Testimonials/Testimonials";
import Services from "./Services";

const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <OurTeam></OurTeam>
            <Services services={services}></Services>
            <Statistic></Statistic>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;