import React from 'react';
import Header from '../../widget/Header';
import Footer from '../../widget/Footer';
import styled from 'styled-components';
import axios from 'axios'

const FormContainerStyled=styled.div`
border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-top:80px;
  input[type=text], select, textarea{
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }
  @media screen and (max-width: 600px) {
    .col-25, .col-75, input[type=submit] {
      width: 100%;
      margin-top: 0;
    }
  }
`;
const FormLableStyled=styled.label`
padding: 12px 12px 12px 0;
display: inline-block;
`;
const FormLableColumnStyled=styled.div`
float: left;
width: 25%;
margin-top: 6px;
`;
const FormInputColumnStyled=styled.div`
float: left;
  width: 75%;
  margin-top: 6px;
`;
const FormRowStyled=styled.div`
:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export default class AddRecipePage extends React.PureComponent{
    constructor(){
        super();
        this.state={
            recipeTitle:'',
            recipeIngredients:'',
            recipePicture:'',
            cookName:''
        }
        this.inputRef=React.createRef();
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        // this.setState({
        //   recipePicture:event.target.files[0]
        // })
        console.log(this.state);
  }
    handleSubmit(event){
      const recipeList = {
        RecipeTitle: this.state.recipeTitle,
        RecipeIngredients: this.state.recipeIngredients,
        RecipePicture: this.state.recipePicture,
        CookName:this.state.cookName

      };

      axios.post(`http://localhost:3001/recipes`, { recipeList })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })



      event.preventDefault();
      this.inputRef.current.focus();
      localStorage.setItem('Token',JSON.stringify(this.state))
      this.setState(
         { recipeIngredients:'',recipeTitle:'',recipePicture:'',cookName:''}
      );
      alert("Successfully added");
      console.log(localStorage.getItem('Token'));
    //   this.setstate({[event.target.name]:''} );
    }


    render(){
        return(
            <>
            <Header />
            <FormContainerStyled>
  <form action="#" onSubmit={this.handleSubmit}>
    <FormRowStyled>
      <FormLableColumnStyled>
        <FormLableStyled htmlFor="Title">Recipe Title :</FormLableStyled>
      </FormLableColumnStyled>
      <FormInputColumnStyled>
        <input type="text" id="title" name="recipeTitle" ref={this.inputRef} placeholder="Enter Title.." onChange={this.handleChange} value={this.state.recipeTitle}/>
      </FormInputColumnStyled>
    </FormRowStyled>
    <FormRowStyled>
      <FormLableColumnStyled>
        <FormLableStyled htmlFor="Title">Recipe Ingredients :</FormLableStyled>
      </FormLableColumnStyled>
      <FormInputColumnStyled>
        <input type="text" id="ingredients" name="recipeIngredients" placeholder="Enter Ingredientd which separated by comma.." onChange={this.handleChange}value={this.state.recipeIngredients} />
      </FormInputColumnStyled>
    </FormRowStyled>
    <FormRowStyled>
      <FormLableColumnStyled>
        <FormLableStyled htmlFor="Picture">Recipe Picture :</FormLableStyled>
      </FormLableColumnStyled>
      <FormInputColumnStyled>
        <input type="file" id="picture" name="recipePicture" placeholder="Enter Picture.." onChange={this.handleChange} value={this.state.recipePicture}/>
      </FormInputColumnStyled>

    </FormRowStyled>
    <FormRowStyled>
      <FormLableColumnStyled>
        <FormLableStyled htmlFor="cookName">Cook Name :</FormLableStyled>
      </FormLableColumnStyled>
      <FormInputColumnStyled>
        <input type="text" id="cook" name="cookName" placeholder="Enter Cook Name" onChange={this.handleChange}value={this.state.cookName} />
      </FormInputColumnStyled>
    </FormRowStyled>
   <FormRowStyled>
     <FormInputColumnStyled>
   <input type="submit" value="Submit" disabled={!this.state.recipeTitle,!this.state.recipeIngredients,!this.state.recipePicture,!this.state.cookName}/>
   </FormInputColumnStyled>
   </FormRowStyled>

    {/* <div className="row">

    </div> */}
  </form>
</FormContainerStyled>
            <Footer />
            </>
        )
    }
}