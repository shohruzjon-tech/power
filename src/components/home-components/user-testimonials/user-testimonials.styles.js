import styled from 'styled-components';


export const UserTesAbsolute=styled.div`
             background:rgb(59, 83, 115);
`

export const UserTesContainer=styled.div`
              width:1140px ;
              margin:0 auto;

`

export const UserTesHeaderContainer=styled.div`


`

export const UserTesTitle=styled.h3`
             width:max-content;
             margin:0 auto;
             position:relative;
             display:flex;
             align-items:flex-end;
             justify-content:center;
             padding:50px 0;
             color:#fff;

             &:after{
                 content:'';
                 height:2px;
                 background:#ec9706;
                 width:30%;
                 position:absolute;
                 margin-bottom:-30px;
             }
`

export const UserTesHeaderdes=styled.p`
             text-align:center;
             color:#fff;
`

export const UserTestimonialContainer=styled.div`
              padding:60px 0;

`

export const TesItem=styled.div`
              background:#fff;
              width:95%;
              padding:20px;
`

export const ItemParagraph=styled.p`
              padding:20px;
              box-sizing:border-box;
`