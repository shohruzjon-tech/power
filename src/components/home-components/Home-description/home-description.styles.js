import styled from 'styled-components';



export const HomeDesContainer=styled.div`
          width:1140px;
          margin:0 auto;
          padding:40px 0;
`

export const HomeDesItems=styled.div`
          width:1040px;
          margin:0 auto;
          padding:80px 0;
          display: grid;
          grid-auto-columns: 1fr;
          grid-column-gap: 90px;
          grid-template-columns: 1fr 1fr 1fr;
`

export const HomeDesHeader=styled.h3`
          text-align: center;
          color:#ec9706;
`


export const HomeItemContainer=styled.div`
           display:flex;
           flex-direction:column;
           justify-content:space-between;
           text-align:justify;
`

export const ItemHeader=styled.h4`
           color:#ec9706;

`

export const ItemPargraph=styled.p`
            color:#3f3c3d;
            font-size:16px;
            font-family:Euclid, serif;
`

export const ItemImage=styled.img`
             width:108px;
`