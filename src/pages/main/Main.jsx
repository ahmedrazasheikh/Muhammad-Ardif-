import { Header } from 'components/main/header/Header';
import { AboutUs } from 'components/main/aboutUs/AboutUs';
import { Features } from 'components/main/features/Features';
import { HowWork } from 'components/main/howWork/HowWork';
import { Pricing } from 'components/main/pricing/Pricing';
import { Footer } from 'components/main/footer/Footer';

export const Main = () => {
    return (
        <>
            <Header />
            <AboutUs />
            <Features/>
            <HowWork/>
            <Pricing/>
            <Footer/>
        </>
    );
};
