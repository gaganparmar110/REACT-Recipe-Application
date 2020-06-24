import React from 'react'
import Header from '../../widget/Header'
import Footer from '../../widget/Footer'
import Carousel from '../../widget/Carousel'
import styled from 'styled-components'

const FormStyled=styled.form`
       margin:auto;
       width:500px;
       margin-top:100px;
`;
const FormLableStyled=styled.label`
margin-top:20px;
`;
const FormInputStyled=styled.input`

`;
const SelectStyled=styled.select`

`;
const OptionStyled=styled.option`

`;
const ButtonStyled=styled.button`
margin-top:20px;
`;
const TextAreaStyled=styled.textarea`

`;


export default class ContactPage extends React.PureComponent{
    render(){
        return(
            <>
            <Header />
            
            <Carousel />
            <FormStyled action="#" >
        <FormLableStyled for="fName">NAME</FormLableStyled>
        <FormInputStyled type="text" name="userName" id="uName" className="form-control" placeholder="enter name"/>
        
        <FormLableStyled for="profession">PROFFESION</FormLableStyled>
        <FormInputStyled type="text" name="userProfession" id="uProfession" className="form-control" placeholder="enter profession"/>

        <FormLableStyled for="gender">Gender</FormLableStyled>
        <SelectStyled name="gender" className="form-control">
            <OptionStyled value="male">Male</OptionStyled>
            <OptionStyled value="female">Female</OptionStyled>
        </SelectStyled>

        <FormLableStyled for="address">ADDRESS</FormLableStyled>
        <TextAreaStyled type="text" name="address" id="address" className="form-control" placeholder="enter address"/>
        <ButtonStyled type="button" className="btn btn-primary">Submit</ButtonStyled>
    </FormStyled>
      
		
            <Footer />
            </>
        )
    }
}



  

   

 

       
           

    