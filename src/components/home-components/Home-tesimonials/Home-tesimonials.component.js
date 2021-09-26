import React from 'react';
import { 
    TestimonialsContainer , TestimonialHeadContainer,
    TestimonialHeaderBox, TestimonialHeaderTitle, TestimonialCarouselContainer, HeroTextContainer,
    CarouselSection, CarouselImage, CarouselImageBox
} from './Home-tesimonials.styles';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeTestimonials=()=>{

    const settings = {
        className: "center",
        autoplaySpeed: 1000,
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        swipeToSlide: true,
        autoplay:true,
        touchMove:true,
        focusOnSelect:true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      };



    return(
        <TestimonialsContainer>
           <TestimonialHeadContainer>
                <TestimonialHeaderBox></TestimonialHeaderBox>
                <TestimonialHeaderTitle>TRUSTED BY:</TestimonialHeaderTitle>
                <TestimonialHeaderBox></TestimonialHeaderBox>
           </TestimonialHeadContainer>
           <TestimonialCarouselContainer>
                    <Slider {...settings}>
                        <CarouselSection>
                            <CarouselImageBox>
                               <CarouselImage 
                                 src='https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/Picture10.png?alt=media&token=f736e036-d1ba-4464-b61b-5ebad44d18c5'
                                 />
                             </CarouselImageBox>
                        </CarouselSection>
                        <CarouselSection>
                            <CarouselImageBox>
                              <CarouselImage 
                                src='https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/Picture11.png?alt=media&token=e9473375-8d35-4c4d-98e9-23eb597205b8'
                                />
                            </CarouselImageBox>
                        </CarouselSection>
                        <CarouselSection>
                        <CarouselImageBox>
                            <CarouselImage 
                                src='https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/Picture2.png?alt=media&token=642f0520-ca27-486e-99b3-4eb8579d503d'
                                />
                        </CarouselImageBox>
                        </CarouselSection>
                        <CarouselSection>
                        <CarouselImageBox>
                             <CarouselImage 
                                src='https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/Picture3.png?alt=media&token=7e49fa0c-8d1e-4eb8-b483-74ee592bbec8'
                                />
                        </CarouselImageBox>
                        </CarouselSection>
                        <CarouselSection>
                        <CarouselImageBox>
                               <CarouselImage 
                                src='https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/Picture4.png?alt=media&token=da0fa951-2d9a-47ff-b52a-3837de88e678'
                                />
                        </CarouselImageBox>
                        </CarouselSection>
                        <CarouselSection>
                        <CarouselImageBox>
                               <CarouselImage 
                                src='https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/Picture5.png?alt=media&token=235dea4b-99e6-4194-b2dd-262822dc235a'
                                />
                        </CarouselImageBox>
                        </CarouselSection>
                        <CarouselSection>
                        <CarouselImageBox>
                              <CarouselImage 
                                src='https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/Picture6.png?alt=media&token=b978eca7-b1d4-4e28-9e31-d1578fa7c11b'
                                />
                        </CarouselImageBox>
                        </CarouselSection>
                        <CarouselSection>
                        <CarouselImageBox>
                               <CarouselImage 
                                src='https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/Picture7.png?alt=media&token=ac193d09-66b8-47df-91b8-08fc118acc5a'
                                />
                        </CarouselImageBox>
                        </CarouselSection>
                        <CarouselSection>
                        <CarouselImageBox>
                                <CarouselImage 
                                src='https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/Picture8.png?alt=media&token=ae4102a1-f194-434a-aa78-15af5e38eedf'
                                />
                        </CarouselImageBox>
                        </CarouselSection>
                        <CarouselSection>
                        <CarouselImageBox>
                              <CarouselImage 
                                src='https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/Picture9.png?alt=media&token=77b5fd44-6794-4676-8a93-4e5cf1a08e21'
                                />
                        </CarouselImageBox>
                        </CarouselSection>
                    </Slider>
           </TestimonialCarouselContainer>
        </TestimonialsContainer>
    )
};



export default HomeTestimonials;