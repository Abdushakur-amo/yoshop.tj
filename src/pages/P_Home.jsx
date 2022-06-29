import { Outlet, Link } from 'react-router-dom';
import { Slider, Products, Katalog, BanerToo, BanerOne, NashiUslugi, News } from '../components';


function Home() {
    return (
        <>
            {/* <Slider /> */}

            <BanerOne />
            <NashiUslugi />
            <Katalog />
            <Products />
            {/* <News /> */}
            <BanerToo />
        </>
    );
}

export default Home;