import React from 'react';
import { 
    FooterContainer , AboveInfo, AboveInfoHeader, 
    AboveLabel, AboveList, AboveListContainer, 
    AboveListItem, AboveHeaderLink, FooterBelow,
    FooterBelowListItem, FooterBelowList
} from './footer.stles';




const Footer=()=>(
    <FooterContainer>
        <AboveInfoHeader>
            <AboveHeaderLink> PowerPatent</AboveHeaderLink>
        </AboveInfoHeader>
       <AboveInfo>
              <AboveLabel>info@powerpatent.com</AboveLabel>
              <AboveListContainer>
                    <AboveList>
                        <AboveListItem>Products</AboveListItem>
                        <AboveListItem>Bookkeeping</AboveListItem>
                        <AboveListItem>CFO Services</AboveListItem>
                        <AboveListItem>Tax</AboveListItem>
                        <AboveListItem>R&D Credit</AboveListItem>
                        <AboveListItem>Pricing</AboveListItem>
                    </AboveList>
                    <AboveList>
                        <AboveListItem>Solutions </AboveListItem>
                        <AboveListItem> Startups</AboveListItem>
                        <AboveListItem>Consumer Goods & Retail </AboveListItem>
                        <AboveListItem>Professional Services </AboveListItem>
                        <AboveListItem> </AboveListItem>
                    </AboveList>
                    <AboveList>
                        <AboveListItem>Company</AboveListItem>
                        <AboveListItem>About</AboveListItem>
                        <AboveListItem>Careers</AboveListItem>
                        <AboveListItem>FAQ</AboveListItem>
                        <AboveListItem>Blog</AboveListItem>
                        <AboveListItem>Media Kit</AboveListItem>
                    </AboveList>
              </AboveListContainer>
       </AboveInfo>
       <FooterBelow>
            <FooterBelowList>
                    <FooterBelowListItem>© Pilot.com, Inc.</FooterBelowListItem>
                    <FooterBelowListItem>Terms of Service</FooterBelowListItem>
                    <FooterBelowListItem>Privacy Policy</FooterBelowListItem>
            </FooterBelowList>
       </FooterBelow>
    </FooterContainer>
)



export default Footer;