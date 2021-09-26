import styled from "styled-components";



export const FooterContainer=styled.div`
            padding:80px 0  0 0;
            width:1140px;
            margin:0 auto;
`
// above
export const FooterAbove=styled.div`
            
` 

export const  AboveInfo=styled.div`
             display:flex;
             justify-content:space-between;
             border-bottom:1px solid #ddd;
`
export const AboveInfoHeader=styled.div`
             padding:80px 0;
`
export const AboveHeaderLink=styled.a`
            color:#000;
            font-weight:bold;
            cursor:pointer;
            font-size: 20px;
            text-decoration:none;

            &:hover{
                color:#000;
            }
`

export const AboveLabel=styled.div`
             cursor:pointer;
             color: #3f3c3d;
             &:hover{
                text-decoration:underline;
            }
`

export const AboveListContainer=styled.div`
             display:grid;
             grid-template-columns:1fr 1fr 1fr;
`
export const AboveList=styled.ul`
             list-style:none;
`
export const AboveListItem=styled.li`
             cursor:pointer;
             transition:0.3s linear;
             color: #3f3c3d;
             font-size: 16px;
             padding:5px 0;
             &:hover{
                 text-decoration:underline;
             }
             &:first-of-type{
                 color:#000;
                 font-weight:bold;
                 cursor:inherit;
                 font-size: 20px;

                 &:hover{
                     text-decoration:none;
                 }
             }
`

// below

export const FooterBelow=styled.div`
             padding-top:40px;
`

export const FooterBelowList=styled.ul`
             display:flex;
             align-items:center;
             list-style:none;
`
export const FooterBelowListItem=styled.li`
              padding:5px;
              margin:0 10px;
              color: #999;
              cursor:pointer;
              font-size:13px;

              &:first-of-type{
                  cursor:default;
              }
`