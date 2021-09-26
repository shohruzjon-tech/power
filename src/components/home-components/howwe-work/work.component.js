import React from 'react';
import {
    
    WorkContainer , VideBox,
    TitleBoxHeader, TitleBox,
    VideBoxVideo
} from './work.styles';



const HowWeWork=()=>(
    <WorkContainer>
        <TitleBox>
            <TitleBoxHeader>How we work?</TitleBoxHeader>
        </TitleBox>
        <VideBox className="embed-responsive embed-responsive-16by9">
               <VideBoxVideo className="video-fluid" autoplay='true' controls muted="true"> 
                   <source src="https://firebasestorage.googleapis.com/v0/b/my-test-8f997.appspot.com/o/what-we-do-explainer-copy.mp4?alt=media&token=8df180e6-e8b9-4636-a76f-7ccb9f27d4d7" type="video/mp4" />
               </VideBoxVideo>
        </VideBox>
    </WorkContainer>
)


export default  HowWeWork;