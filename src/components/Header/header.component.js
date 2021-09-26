import React from 'react';
import { 
    HeaderContainer , HeaderImageBox,
    HeaderNavUnit, HeaderCentralContainer,
    HeaderCredentials, HeaderImage, HeaderNavList,
    HeaderNavListItem, HeaderRegister, HeaderDemoButton,
    NavIcon, HeaderResize, 
} from './header.styles';
import MenuIcon from '@mui/icons-material/Menu';




const Header=()=>{

    const [top, setTop]=React.useState('-100%');

    const interactMenu=()=>{
           if(top==='-100%'){
               setTop('70px');
               return;
           }

           setTop('-100%');
    }

    const headerRef=React.useRef(null);
     

     React.useEffect(()=>{
                const handler=()=>{
                         if(window.scrollY>200){
                           headerRef.current.style.position="fixed";
                           headerRef.current.style.left=0;
                           headerRef.current.style.top=0;
                           headerRef.current.style.width='100vw';
                           headerRef.current.style.boxShadow='rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px';
                         }else{
                           headerRef.current.style.position="relative";
                           headerRef.current.style.boxShadow='none';
                         }
                }      

                window.addEventListener('scroll', handler);

                return()=>{
                          window.addEventListener('scroll', handler);
                }
     },[])


    return(
      <HeaderContainer ref={headerRef}>
          <HeaderCentralContainer>
               <HeaderImageBox>
                      <HeaderImage
                         src='https://firebasestorage.googleapis.com/v0/b/my-resume-57d24.appspot.com/o/imgpsh_fullsize_anim.png?alt=media&token=d5e07192-1da6-4e91-99cc-7bd0ece5f6d4'
                      />
              </HeaderImageBox>
                 <HeaderNavigation
                   top={top}
                 />
              <HeaderResize
               onClick={interactMenu}
              >
                       Menu <MenuIcon/>
              </HeaderResize>
          </HeaderCentralContainer>
      </HeaderContainer>
    )
}

export default Header;



const HeaderNavigation=({top})=>(
            <HeaderNavUnit top={top}>
                     <HeaderNavList>
                           <HeaderNavListItem>
                             HOME 
                             </HeaderNavListItem>
                           <HeaderNavListItem>
                             TEAM

                            </HeaderNavListItem>
                           <HeaderNavListItem>
                             BLOG POST  <NavIcon/>
                           
                           </HeaderNavListItem>
                           <HeaderNavListItem>
                             BLOG DETAILS 
                             
                         </HeaderNavListItem>
                           <HeaderNavListItem>
                             FEATURES  <NavIcon/>
                             
                         </HeaderNavListItem>
                     </HeaderNavList>

                  <HeaderCredentials>
                        <HeaderRegister>Log in</HeaderRegister>
                       <HeaderDemoButton>REQUEST A DEMO</HeaderDemoButton>
                 </HeaderCredentials>
              </HeaderNavUnit>
)