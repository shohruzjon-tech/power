import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const HeaderContainer=styled.div`
       position:relative;
       z-index:10;
       background:#fff;
`

export const HeaderCentralContainer=styled.div`
        width:1140px;
        margin:auto;
        display:flex;
        align-items:center;
        justify-content:space-between;
        box-sizing:border-box;
        padding:0 20px;

        @media  (max-width:980px){
            width:100vw;
            padding:0 40px;
     }
`



export const HeaderImageBox=styled.div`
       
`
export const HeaderImage=styled.img`
        width:100px;
        margin:0;
`

export const HeaderNavUnit=styled.div`
     display:flex;
     align-items:center;



      @media  (max-width:980px){
             display:block;
             position:fixed;
             background:#fff;
             width:100vw;
             flex-direction:column;
             justify-content:space-between;
             transition:0.5s linear;
             left:0;
             top:${props=>props.top};
             z-index:-1;
      }
`

export const HeaderCredentials=styled.div`
       display:flex;
       align-items:center;

       @media  (max-width:980px){
        flex-direction:column;
        justify-content:space-between;
 }
`


// Header Navigation
// icon

export const NavIcon=styled(KeyboardArrowDownIcon)`
        transition:0.3s linear;
`
// end icon

export const HeaderNavList=styled.ul`
        list-style:none;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0;
        margin:0;

        @media  (max-width:980px){
            flex-direction:column;
            justify-content:space-between;
     }
`

export const HeaderNavListItem=styled.li`
       margin-bottom:0;
       padding:5px 5px;
       margin:0 10px;
       color: #ec9706;
       cursor:pointer;
       display:flex;
       align-items:ceter;

       @media  (max-width:970px){
              margin:15px 0;
         }
       

       &:hover{
           
           ${NavIcon}{
                 transition:0.3s linear;
                 transform:rotate(180deg);
           }
       }
`


// Header credentials

export const HeaderRegister=styled.h3`
        margin-bottom:0;
        font-size:16px;
        color:#ec9706;
        padding-right:32px;
        cursor:pointer;
`

export const HeaderDemoButton=styled.button`
        border:none;
        outline:none;
        background:#ec9706;
        color:#fff;
        padding:9px 32px;
        border-radius:3px;
        cursor:pointer;
        transition:color 0.3s linear;
        &:hover{
            background:#ec9706;
        }

        @media  (max-width:970px){
                 margin:15px 0;
        }
`

// media menu

export const HeaderResize=styled.div`
       display:none;
       @media  (max-width:980px){
       display:block;
       display:flex;
       align-items:center;
       font-size:16px;
       color: #656363;
       cursor:pointer;
 }
`