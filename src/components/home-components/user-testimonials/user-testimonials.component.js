import React from 'react';
import { 
    UserTesHeaderContainer , UserTesHeaderdes,
    UserTesContainer, UserTesTitle, UserTesAbsolute,
    UserTestimonialContainer, TesItem, ItemParagraph
} from './user-testimonials.styles';
import Carousel  from 'react-elastic-carousel'

const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];


const clients=[
    { 
        id:2001,
        text:'Streamline how you manage IP from founding to IPOProvisional/Utility Applications Trademark Applications'
    },
    { 
        id:2002,
        text:'Streamline how you manage IP from founding to IPOProvisional/Utility Applications Trademark Applications'
    },
    { 
        id:2003,
        text:'Streamline how you manage IP from founding to IPOProvisional/Utility Applications Trademark Applications'
    },
]

const imageUrl='https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/user.png?alt=media&token=ecc1da3a-f7ca-40b3-a353-05c635047c64'

const UserTestimonials=()=>(
    <UserTesAbsolute>
       <UserTesContainer>
              <UserTesHeaderContainer>
                  <UserTesTitle>
                      CLIENT TESTIMONIALS
                  </UserTesTitle>
                  <UserTesHeaderdes>
                      Prior results described in this site
                      do not gurantee similar outcomes in future cases
                      or outcomes
                  </UserTesHeaderdes>
              </UserTesHeaderContainer>
              <UserTestimonialContainer>
                    <Carousel breakPoints={breakPoints}>
                        { 
                          clients.map(item=>
                          <ItemParagraph key={item.id}>
                              <TesItem>
                              <img src={imageUrl}/>
                                {item.text}
                                </TesItem>
                          </ItemParagraph>
                        )
                        }
                   </Carousel>
              </UserTestimonialContainer>
       </UserTesContainer>
    </UserTesAbsolute>
);


export default UserTestimonials;