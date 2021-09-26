import React from 'react';
import {
     HomeHeroContainer, HomeHeroDescription, 
     HomeHeroPoster, HeroTitle, HeroParagraph, HeroTextContainer, 
     HeroButtonsContainer, HeroButton1, HeroButton2, HomeHeroImage, HomeHeroDesInternal
     } from './home-hero.styles';

const HomeHero=()=>{



    return(
       <HomeHeroContainer>
           <HomeHeroDescription>
             <HomeHeroDesInternal>
                <HeroTextContainer>
                    <HeroTitle>
                         Why PowerPatent
                    </HeroTitle>
                    <HeroParagraph>
                            IP. Simplified
                   </HeroParagraph>
                <HeroParagraph>
                      PowerPatent helps companies manage patent and IP creation, 
                 filing, issuance, maintenance, licensing, and monetization.
            </HeroParagraph>
                </HeroTextContainer>
                <HeroButtonsContainer>
                <HeroButton1>REQUEST  A DEMO</HeroButton1>
                <HeroButton2>TAKE A VIDEO TOUR</HeroButton2>
                </HeroButtonsContainer>
                 </HomeHeroDesInternal>
           </HomeHeroDescription>
           <HomeHeroPoster>
                  <HomeHeroImage
                    src='https://assets-global.website-files.com/60a5136f2c6c8e4fb3a130d9/60a672402c7d3074ca16e6e8_hero-graphic.jpg'
                  />
           </HomeHeroPoster>
       </HomeHeroContainer>
    )
}


export default HomeHero