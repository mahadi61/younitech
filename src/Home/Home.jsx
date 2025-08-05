import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Onze from "../Onze/Onze"
import Waaram from "../Waarom/Waaram";


const Home = () => {
    return (
        <div>
          <Banner/>
          <Onze/>
          <Waaram/>
          {/* <Prest/> */}
          <Card/>

        </div>
    );
};

export default Home;