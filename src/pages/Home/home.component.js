import React from 'react';
import HomeHero from '../../components/home-components/HomeHero/home-hero.component';
import HomeTestimonials from '../../components/home-components/Home-tesimonials/Home-tesimonials.component';
import HomeDescription from '../../components/home-components/Home-description/home-description.component';
import UserTestimonials from '../../components/home-components/user-testimonials/user-testimonials.component';
import HowWeWork from '../../components/home-components/howwe-work/work.component';


const Home=()=>(
    <React.Fragment>
         <HomeHero/>
         <HomeTestimonials/>
         <HomeDescription/>
         <HowWeWork/>
         <UserTestimonials/>
    </React.Fragment>
)


export default Home;