import React from 'react'
import Header from '../../widget/Header'
import Footer from '../../widget/Footer'
import Carousel from '../../widget/Carousel'
import styled from 'styled-components'
import Pic1 from '../../assets/download4.jpg'
import Pic2 from '../../assets/download5.jpg'
import Pic3 from '../../assets/download6.jpg'
import Pic4 from '../../assets/cook2.jpg'
import Pic5 from '../../assets/cook3.jpg'
import Pic6 from '../../assets/cook1.webp'
import Pic7 from '../../assets/cook-4.jpg'
import Pic8 from '../../assets/cook5.jpg'
import Pic9 from '../../assets/cook6.jpg'

const HeaderStyled = styled.div`
  text-align: center;
  padding: 32px;
`;

const HeadingStyled=styled.h1`
text-align:center;



`;
const HeadStyled=styled(HeadingStyled)`
   color:black;
   margin-top:40px;
`;
const ParaStyled=styled.p`
text-align:center;
`;
const CardColumnStyled=styled.div`
  margin-top:50px;
`;
const CardStyled=styled.div`

`;
const CardBodyStyled=styled.div`

`;
const CardImageStyled=styled.div`

`;
const ImageStyled=styled.img`
// max-width:100%;
`;
const ContainerStyled=styled.div`
background-color:green;
color:white;
`;
const RowStyled=styled.div`

`;
const columnStyled=styled.div`

`;
const ParagraphStyled=styled.p`

`;
const ButtonStyled=styled.button`
    width:200px;
    height:60px;
`;
const ContainerButtonStyled=styled.div`

`;
const PopularHeadingStyled=styled.div`

`;


export default class HomePage extends React.PureComponent{
    render(){
        return(
            <>
            <Header />
            <Carousel />
            <HeaderStyled>
              <HeadingStyled>Having A Recipe</HeadingStyled>
              <ParaStyled>Then Show Your Talent With us.</ParaStyled>
            </HeaderStyled>
            <ContainerStyled className="container">
              <RowStyled className="row">
                <columnStyled className="col-md-3">
                        <HeadingStyled className="heading-grid">3000+</HeadingStyled>
                        <ParaStyled>Users</ParaStyled>
                </columnStyled>
                <columnStyled className="col-md-3">
                        <HeadingStyled>40+</HeadingStyled>
                        <ParaStyled>Dishes</ParaStyled>
                </columnStyled>
                <columnStyled className="col-md-3">
                        <HeadingStyled>3</HeadingStyled>
                        <ParaStyled>Years</ParaStyled>
                </columnStyled>
                <columnStyled className="col-md-3">
                        <HeadingStyled>10+</HeadingStyled>
                        <ParaStyled>ProfessionalCooks</ParaStyled>
                </columnStyled>
              </RowStyled>
            </ContainerStyled>




  <PopularHeadingStyled className="container Popular-heading" style={{textAlign:'center',marginTop:'90px'}}>

    <RowStyled className="row">
        <columnStyled className="col-sm-12">
         <h2>How Recipe Book works</h2>
         <h4>Posting food recipe online has never been this easy</h4>
        </columnStyled>

    </RowStyled>
    <RowStyled className="row" style={{marginTop:'30px'}}>

     <columnStyled className="col-sm-4">
        <ImageStyled src={Pic1} alt="Avatar" style={{borderRadius:'50%',width:'200px',height:'200px'}}  />

        <ParagraphStyled style={{marginTop:'20px'}} ><b>Explore recipe</b> that deliver to Everyone</ParagraphStyled>

     </columnStyled>
     <columnStyled className="col-sm-4">
        <ImageStyled src={Pic2} alt="Avatar" style={{borderRadius:'50%',width:'200px',height:'200px'}} />

        <ParagraphStyled style={{marginTop:'20px'}}>Browse View and <b>build your dishes</b> in seconds</ParagraphStyled>

     </columnStyled>
     <columnStyled className="col-sm-4">
        <ImageStyled src={Pic3} alt="Avatar" style={{borderRadius:'50%',width:'200px',height:'200px'}}  />

        <ParagraphStyled style={{marginTop:'20px'}}>Follow the suggestion from <b>your email</b></ParagraphStyled>

     </columnStyled>
    </RowStyled>
</PopularHeadingStyled>




    <HeadStyled className="heading-text">Restaurant Software you can count upon</HeadStyled>
       <CardColumnStyled className="card-columns">
  <CardStyled className="card bg-primary">
    <CardBodyStyled className="card-body text-center">
    <CardImageStyled className="img-animation">
    <ImageStyled src={Pic4} className="card-img"/>
    </CardImageStyled>
    </CardBodyStyled>
  </CardStyled>
  <CardStyled className="card bg-danger">
    <CardBodyStyled className="card-body text-center">
    <CardImageStyled className="img-animation">
    <ImageStyled src={Pic9} className="card-img"/>
    </CardImageStyled>
    </CardBodyStyled>
  </CardStyled>
  <CardStyled className="card bg-danger">
    <CardBodyStyled className="card-body text-center">
    <CardImageStyled className="img-animation">
    <ImageStyled src={Pic6} className="card-img"/>
    </CardImageStyled>
    </CardBodyStyled>
  </CardStyled>
  <CardStyled className="card bg-primary">
    <CardBodyStyled className="card-body text-center">
    <CardImageStyled className="img-animation">
    <ImageStyled src={Pic7} className="card-img"/>
    </CardImageStyled>
    </CardBodyStyled>
  </CardStyled>
  <CardStyled className="card bg-primary">
    <CardBodyStyled className="card-body text-center">
    <CardImageStyled className="img-animation">
    <ImageStyled src={Pic8} className="card-img"/>
    </CardImageStyled>
    </CardBodyStyled>
  </CardStyled>
  <CardStyled className="card bg-danger">
    <CardBodyStyled className="card-body text-center">
    <CardImageStyled className="img-animation">
    <ImageStyled src={Pic9} className="card-img"/>
    </CardImageStyled>
    </CardBodyStyled>
  </CardStyled>
</CardColumnStyled>


            <Footer />
            </>
        )
    }
}