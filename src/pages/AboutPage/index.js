import React from 'react'
import Header from '../../widget/Header'
import Footer from '../../widget/Footer'
import Carousel from '../../widget/Carousel'
import styled from 'styled-components'

const ContainerStyled=styled.div`

`;
const RowStyled=styled.div`

`;
const ColumnStyled=styled.div`

`;
const CardStyled=styled.div`
:hover{
    background-color:green;
    color:white;
}
`;
const ImageStyled=styled.div`

`;
const CardBodyStyled=styled.div`

`;
const IconStyled=styled.i`

`;
export default class AboutPage extends React.PureComponent{
    render(){
        return(
            <>
            <Header />
            <Carousel />
            <ContainerStyled className="container mt-4">
        <RowStyled className="row justify-content-center">
            <ColumnStyled className="col-md-3">
                <CardStyled className="card">

                    <ImageStyled className="img-animation">
                       <IconStyled className="fa fa-user-circle fa-5x" aria-hidden="true"></IconStyled>
                    </ImageStyled>
                    <CardBodyStyled className="card-body">
                        <h2>Easy to use Interface</h2>
                        <p>FusionResto comes with an easy to use interface ,platform to save you from complexity of maintaining separate Fusio,that lets you increase your employee efficiency by more than 35%</p>
                    </CardBodyStyled>
                </CardStyled>
            </ColumnStyled>
            <ColumnStyled className="col-md-3">
                <CardStyled className="card">

                    <ImageStyled className="img-animation">
                    <IconStyled className="fa fa-cogs fa-5x" aria-hidden="true"></IconStyled>
                    </ImageStyled>
                    <CardBodyStyled className="card-body">
                        <h2>Completely Integrated System</h2>
                        <p>FusionResto is a single platform to save you from complexity of maintaining separate FusioFusion software for POS, store and inventory, back office and web front.</p>
                    </CardBodyStyled>
                </CardStyled>
            </ColumnStyled>
        
            <ColumnStyled className="col-md-3">
                <CardStyled className="card">

                    <ImageStyled className="img-animation">
                    <IconStyled className="fa fa-university fa-5x" aria-hidden="true"></IconStyled>
                    </ImageStyled>
                    <CardBodyStyled className="card-body">
                        <h2>Inventory/Recipe Management</h2>
                        <p>Restaurant Business demands consistency in taste. FusionResto lets you keep a track on the ingredient of your dishes ensuring accuracy in the kitchen.</p>
                    </CardBodyStyled>
                </CardStyled>
            </ColumnStyled>
            <ColumnStyled className="col-md-3">
                <CardStyled className="card">

                    <ImageStyled className="img-animation">
                    <IconStyled className="fa fa-flag-checkered fa-5x" aria-hidden="true"></IconStyled>
                    </ImageStyled>
                    <CardBodyStyled className="card-body">
                        <h2>Actionable Reports anytime</h2>
                        <p>With FusionMobi you can access reports from iPhone, iPad, Android, Blackberry and Windows Phone and FusionResto lets you keep a track</p>
                    </CardBodyStyled>
                </CardStyled>
            </ColumnStyled>
         </RowStyled>
        
    </ContainerStyled>

            <Footer />
            </>
        )
    }
}