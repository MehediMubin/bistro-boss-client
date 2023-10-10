import Banner from "../components/Banner";
import Category from "../components/Category";
import Cover from "../components/Cover";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category/>
            <Cover heading='Bistro Boss'/>
        </div>
    );
};

export default Home;
