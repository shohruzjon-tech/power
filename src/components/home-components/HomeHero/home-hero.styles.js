import styled from 'styled-components';




export const HomeHeroContainer=styled.div`
             display:flex;
             position:relative;
             display:flex;
             justify-content:flex-end;

`

export const HomeHeroDescription=styled.div`
             position:absolute;
             top:0;
             left:0;
             right:0;
             bottom:0;
             display:flex;
             flex-direction:column;
             align-items:flex-start;
             justify-content:flex-start;
             padding:0 60px;
             @media  (max-width:1040px){
                padding:0 20px;
          }
`

export const HomeHeroDesInternal=styled.div`
             width:1140px;
             margin:0 auto;
             display:flex;
             flex-direction:column;
             justify-content:space-between;
             @media  (max-width:1040px){
                width:100vw;
                padding:0;
          }
`

export const HomeHeroPoster=styled.div`

`

// description
export const HeroTextContainer=styled.div`
            width:466px;

`

export const HeroButtonsContainer=styled.div`
             padding:30px 0;
             display:flex;
             width:500px;
             align-content:center;
             justify-content:space-between;
             @media  (max-width:700px){
                width:100vw;
          }
`

export const HeroTitle=styled.h3`
             font-size:60px;
             margin:30px 0;
             color:#ec9706;
`

export const HeroParagraph=styled.p`
            font-family: Euclid, sans-serif;
            color: #3f3c3d;
            font-size: 16px;
            line-height: 1.5;
`

export const HeroButton1=styled.button`
            border:none;
            outline:none;
            box-sizing: border-box;
            background:#ec9706;
            color:#fff;
            padding:13px 32px;
            border-radius:3px;
            border:1px solid #ec9706;
            cursor:pointer;
            transition:color 0.3s linear;
            &:hover{
                background:#ec9706;
            }
`


export const HeroButton2=styled.button`
            border:none;
            outline:none;
            box-sizing: border-box;
            background:none;
            color:#ec9706;
            padding:13px 32px;
            border-radius:3px;
            border:1px solid #ec9706;
            cursor:pointer;
            transition:color 0.3s linear;
            
            &:hover{
                border:1px solid #ec9706; 
            }
`

// image

export const HomeHeroImage=styled.img`
          width:600px;

          @media  (max-width:1100px){
                width:450px;
                margin-bottom:-90px;
          }
          @media  (max-width:910px){
                width:300px;
          }
          @media  (max-width:700px){
                display:none;
          }
`