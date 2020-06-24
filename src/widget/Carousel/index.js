import React from 'react'


import Picture1 from '../../assets/download4.jpg'
import Picture2 from '../../assets/download5.jpg' 
import Picture3 from '../../assets/download6.jpg'
// import styled from 'styled-components'

// const ContainerStyled=styled.div`
//     display:flex;
//     flex-wrap:nowrap;
//     width:'100%';
//     height:'460px'
// `;
export default class Carousel extends React.PureComponent{
    render(){
        return(           
 
    <>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li  data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li  data-target="#myCarousel" data-slide-to="1" ></li>
                    <li  data-target="#myCarousel" data-slide-to="2" ></li>
                    {/* style="z-index: 102;" */}
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Picture3} alt="First Slide" width="100%" height="550px" class="imgFilter first-slide" />
                        {/* width="100%" height="550px"  */}
                        <div class="container">
                            <div class="carousel-caption text-centre">
                            <h1>The Kitchen King</h1>
                                <p>There is no love sincerer than the love of food</p>
                                <p><a href="ViewRecipe" role="button" class="btn btn-lg btn btn-success">View Recipe</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Picture2} alt="Second Slide" width="100%" height="550px" class="imgFilter Second-slide" />
                        {/* width="100%" height="550px"  */}
                        <div class="container">
                            <div class="carousel-caption text-centre">
                            <h1>Food Lover's</h1>
                                <p>Let food be thy medicine and medicine be thy food.</p>
                                <p><a href="ViewRecipe" role="button" class="btn btn-lg btn btn-success">View Recipe</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Picture1} alt="Third Slide" width="100%" height="550px" class="imgFilter Third-slide"  />
                        {/* width="100%" height="550px" */}
                        <div class="container">
                            <div class="carousel-caption text-centre">
                                <h1>The Kitchen Quuen</h1>
                                <p>A fit, healthy body—that is the best fashion statement</p>
                                <p><a href="ViewRecipe" role="button" class="btn btn-lg btn btn-success">View Recipe</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
</>
        );
    }
}





