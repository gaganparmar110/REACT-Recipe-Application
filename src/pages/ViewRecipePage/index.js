import React from 'react'
import Header from '../../widget/Header'
import Footer from '../../widget/Footer'
import styled from 'styled-components'
import recipeList from './recipeList.json'
import axios from 'axios'
import Pic1 from '../../assets/download5.jpg'
import Pic2 from '../../assets/download6.jpg'
import Pic3 from '../../assets/download4.jpg'
const Heading1Styled=styled.h1`
      text-align:center;
      margin-top:60px;
`;
const ListDivisionStyled=styled.div`

`;
const ContentStyled=styled.div`
background-color:yellow;
`;
const Heading3Styled=styled.h3`
margin-left:30px;
`;
const ContainerStyled=styled.div`
  
`;
const RowStyled=styled.div`

`;
const ColumnStyled=styled.div`
margin-top:30px;
`;
const CardStyled=styled.div`

`;
const ImageStyled=styled.img`

`;
const CardBodyStyled=styled.div`

`;
const HeadingStyled=styled.h5`

`;
const ParagraphStyled=styled.p`

`;
const ButtonStyled=styled.button`

`;
const CardImageStyled=styled.div`

`;
export default class ViewRecipePage extends React.PureComponent{
       constructor(props){
           super(props);
           this.state={
            dataList:[]
            // recipeTitle:'',
            //  recipeIngredients:'',
            //  recipePicture:'',
            //  cookName:''
           }
        //    this.Data=recipeList
    
       }
          
componentDidMount(){
    axios.get('http://localhost:3001/recipes')
    .then(res => {
        const listData = res.data;
        console.log(listData);
        this.setState({dataList: listData
                //    recipeTitle:listData.RecipeTitle,
                //    recipeIngredients:listData.RecipeIngredients,
                //    recipePicture:listData.RecipePicture,
                //    cookName:listData.CookName,
        });
        for (let index = 0; index < this.state.dataList.length; index++) {
          
            let element = this.state.dataList[index].recipeList.RecipePicture.split("\\");
            console.log(element);
            this.state.dataList[index].recipeList.RecipePicture="../../assets/"+element[2];

            let picturePath= this.state.dataList[index].recipeList.RecipePicture;
            console.log(picturePath);
           // this.setState(this.state.dataList[index].recipeList.RecipePicture=picturePath);
          //  this.setState(this.state.dataList[index].recipeList.RecipePicture=picturePath);
            //console.log(this.state.dataList[index].recipeList.RecipePicture);
            this.setState({

            })
            this.state.dataList[index].recipeList.RecipePicture=picturePath
            this.forceUpdate()
        }
      })
      
    // let url="http://localhost:3001/recipes"
    // fetch(url)
    // .then(resp=>resp.json())
    
    // .then(data=>{ 
    //     let posts = data.map((post)=>{
    //         return (
    //             <div>
    //                 <h3>{post.RecipeTitle}</h3>
    //             </div>
    //         )
    //     })
    //     this.setState({recipes : posts});
        
    // })
}     


       
    render(props){
        console.log(this.state);
        console.log(this.state.dataList);
       // console.log(this.state)
        
        // console.log(this.Data)
    
                return(
            <>
            
            <Header />
            <Heading1Styled>RecipeList</Heading1Styled>
         

         <ContainerStyled className="container mt-4">
            <RowStyled className="row justify-content-center">
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic1} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                <HeadingStyled className="card-title">MalaieKofte</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">salt,onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic3} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">PannerRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">salt,onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic1} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">PannerMasalaRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
            </RowStyled>

            <RowStyled className="row justify-content-center" style={{marginTop:'50px'}}>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic3} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">MasalaRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">salt,chilli,tomato.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic1} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">PannerRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">oil,gheee.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic3} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">Recipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">wheet,salt,onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
            </RowStyled>

            <RowStyled className="row justify-content-center" style={{marginTop:'50px'}}>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic1} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">MasalaRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">salt,onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic3} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">PannerMasalaRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">chilli,onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic1} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">PannerMasalaRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">salt,onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
            </RowStyled>
         </ContainerStyled>
         
         <ContainerStyled className="container mt-4">
            <RowStyled className="row justify-content-center">
                {this.state.dataList.map((data1)=>
                             <ColumnStyled className="col-md-4 col-12" key={data1.id}>
                             <CardStyled className="card">
                                 <CardImageStyled className="img-animation">
                                     <ImageStyled src={data1.recipeList.RecipePicture} className="card-img-top" />
                                 </CardImageStyled>
                                 <CardBodyStyled className="card-body text-center">
                                     <HeadingStyled className="card-title" >{data1.recipeList.RecipeTitle}</HeadingStyled>
                                     <ParagraphStyled className="card-text text-justify">{data1.recipeList.RecipeIngredients}</ParagraphStyled>
                                     <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                                 </CardBodyStyled>
                             </CardStyled>
                         </ColumnStyled>
                )}
          </RowStyled>
          </ContainerStyled>
        
    
    
         



         
           
<div className="modal" id="myModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">PannerMasalaRecipe</h2>
                    <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
                </div>
                <div className="modal-body">
                    <p>1-Onion,chilli,salt</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" type="button" data-dismiss="modal">Done</button>
                </div>
            </div>
        </div>
    </div>  
            <Footer />
            </>
        )
    }
}



  {/* <ContentStyled>
            <li key={lists.id}>{lists.RecipeTitle}</li>
                <Heading3Styled>{this.Data.map((lists)=>{
                   
                })}</Heading3Styled>
            </ContentStyled> */}




//     const RenderedData=this.Data.map((lists)=>{
    //     <h4>{lists.RecipeIngredients}</h4>
    // <h2>{lists.RecipeTitle}</h2>
    
    //     )







            //        element=localStorage.getItem('Token');
//        if (element){
//            this.setState({
//                recipeTitle: element.recipeTitle,
//                recipeIngredients: element.recipeIngredients,
//                recipePicture: this.element.recipePicture
//        })
//    } else {
//        this.setState({
//            recipeTitle:'',
//            recipeIngredients:'',
//            recipePicture:''
//        })
//    }








   {/* <div class="container">
            <div class="row">
                <div class="col-4">
            <button class="btn btn-success" type="button" data-toggle="modal" data-target="#myModal">PannerMasala</button>
            </div>
            <div class="col-4">
            <button class="btn btn-success" type="button" data-toggle="modal" data-target="#myModal">KadaiePanner</button>
            </div>
            <div class="col-4">
            <button class="btn btn-success" type="button" data-toggle="modal" data-target="#myModal">Pavbhaji</button>
            </div>
        </div>
            </div> */}