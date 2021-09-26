import React from 'react';
import { 
    HomeDesContainer , HomeItemContainer,
    HomeDesHeader, ItemHeader, ItemPargraph,
    HomeDesItems, ItemImage
} from './home-description.styles';


const data=[
    {
        id:2001,
        name:'Founders',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/young-caucasian-business-man-working-on-a-laptop-on-business-start-up-and-business-sta-SBI-309516966.jpg?alt=media&token=663e41e5-f8e5-45e1-a24e-ece59fa6ea59',
        paragraph1:'Streamline how you manage IP from founding to IPO',
        paragraph2:'Provisional/Utility Applications Trademark Applications '
    },
    {
        id:2002,
        name:'Lawyers',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/imgpsh_fullsize_anim%20(2).png?alt=media&token=01d5640b-a402-442f-9c37-f6595dc8023a',
        paragraph1:'Manage IP with your clients  ',
        paragraph2:'Built-in diagnostic checks, private PAIR docketing, predictive analytics & discounts for your clients'
    },
    {
        id:2003,
        name:'Companies',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/two-businessmen-working-on-a-new-business-idea-businessmen-thinking-about-new-business-SBI-323059740.jpg?alt=media&token=ed54d618-a97f-4cda-b771-90a9bc52b184',
        paragraph1:'Modernize your invention management, enforcement and monetization',
        paragraph2:'Invention disclosure admin, valuations,   docketing, predictive analytics & portfolio insights'
    },
]



const HomeDescription=()=>(
    <HomeDesContainer>
        <HomeDesHeader>
            Why businesses choose powerpatent
        </HomeDesHeader>
        <HomeDesItems>
            {
              data.map(item=><HomeDesItem key={data.id} {...item}/>)
            }
        </HomeDesItems>
    </HomeDesContainer>
);



export default HomeDescription;


const HomeDesItem=({name, paragraph2, paragraph1, imageUrl})=>(
       <HomeItemContainer>
           <ItemImage src={imageUrl}/>
           <ItemHeader>{name}</ItemHeader>
           <ItemPargraph>{paragraph1}</ItemPargraph>
           <ItemPargraph>{paragraph2}</ItemPargraph>
       </HomeItemContainer>
)