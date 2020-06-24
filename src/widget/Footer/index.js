import React from 'react'
import styled from 'styled-components'


const UlStyled=styled.ul`
   list-style: none;
    padding-left: 0;
`;
const FooterStyled=styled.footer`
background-color: green;
    color: #bbb;
    line-height: 1.5;
    `;
const FooterAnchorStyled=styled.a`
    color:white;
    :hover{
        color:black;
        text-decoration:none;
    }
`;
const FooterTitleStyled=styled.div`
color: #fff;
font-family: ’Merriweather’, serif;
font-size: 1.375rem;
padding-bottom: 0.625rem;
`;
const FooterBody=styled.div`
display: flex;
    min-height: 60vh;
    flex-direction: column;   
    `;
const FooterContainerStyled=styled.div`
    
    height:200px;
    
    `;
const FooterSectionStyled=styled.div`
padding: 1.25rem 1.875rem;
    display: flex;
    flex-wrap: wrap;
    `;
const FooterMainItemStyled=styled.div`
padding: 1.25rem;
    min-width: 12.5rem
    `;
    const FooterFormStyled=styled.form`
    display: flex;
    flex-wrap: wrap;
    `;
    const FooterParaStyled=styled.p`
    color:white;
`;



export default class Footer extends React.PureComponent{
    render(){
        return(
            <>
            <FooterBody>
             <FooterContainerStyled></FooterContainerStyled>
                <FooterStyled>
      
      <FooterSectionStyled>
        <FooterMainItemStyled>
         <FooterTitleStyled>About</FooterTitleStyled>
         <UlStyled>
            <li><FooterAnchorStyled href="#">Home</FooterAnchorStyled></li>
            <li><FooterAnchorStyled href="#">ViewRecipe</FooterAnchorStyled></li>
            <li><FooterAnchorStyled href="#">AddRecipe</FooterAnchorStyled></li>
            <li><FooterAnchorStyled href="#">AboutUs</FooterAnchorStyled></li>
            <li><FooterAnchorStyled href="#">ContactUs</FooterAnchorStyled></li>
            </UlStyled>
          </FooterMainItemStyled>
          <FooterMainItemStyled>
          <FooterTitleStyled>Resources</FooterTitleStyled>
          <UlStyled>
            <li><FooterAnchorStyled href="#">Email</FooterAnchorStyled></li>
            <li><FooterAnchorStyled href="#">Blog</FooterAnchorStyled></li>
            <li><FooterAnchorStyled href="#">Skype</FooterAnchorStyled></li>
            <li><FooterAnchorStyled href="#">Whatsup</FooterAnchorStyled></li>
            </UlStyled>
            </FooterMainItemStyled>
            <FooterMainItemStyled>
            <FooterTitleStyled>Contact</FooterTitleStyled>
            <UlStyled>
            <li><FooterAnchorStyled href="#">MyTeam</FooterAnchorStyled></li>
            <li><FooterAnchorStyled href="#">MailUs</FooterAnchorStyled></li>
            <li><FooterAnchorStyled href="#">Advertise</FooterAnchorStyled></li>
            </UlStyled>
          </FooterMainItemStyled>
          <FooterMainItemStyled>
          <FooterTitleStyled>Stay Updated </FooterTitleStyled>
          <FooterParaStyled>Subscribe to our website to get our latest news.</FooterParaStyled>
          <FooterFormStyled>
            <input type="email" name="email" placeholder="Enter email address" />
            <input type="submit" value="Subscribe" />
            </FooterFormStyled>
          </FooterMainItemStyled>
        </FooterSectionStyled>
     </FooterStyled>
     </FooterBody>
     </>
        );
    }
}