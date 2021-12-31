import React from 'react'
import styled from 'styled-components'
import Power from '../subComponents/Power'
import SocialBar from '../subComponents/SocialBar'

const Div = styled.div`
background-color: #2c2c2c;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`

const Form = styled.form`
background-color: white;
opacity: 0.8;
padding: 1rem;
border-radius: 1rem;
height: 25rem;
width: 17rem;
box-shadow: 0.5rem 0.1rem 0.5rem 0.1rem #0A0D19;
`


const Input = styled.input`
padding: 0.6rem;
margin: 1rem;
width: 80%;
border: none;

border-bottom: 2px solid purple;
&::placeholder{
color: black;
font-size: 1.2rem;
font-family: "Noto Sans";

}
&:focus{
    outline: none;
}

`
const Textarea = styled.textarea`
padding: 1rem;
margin: 0 1rem ;
width: 75%;
border:none;
border-bottom: 2px solid purple;
&:focus{
    outline: none;
}
`

const Label = styled.label`
color: black;
margin-left: 1rem;
font-family: "Noto Sans";
`
const Button = styled.button`
border: none;
padding: 0.5rem;
width: 5rem;
margin: 1rem;
background-image: linear-gradient(to right, #fc5c7d, #6a82fb);
border-radius: 0.5rem;
font-size: 1.2rem;
color: white;
font-family: "Noto Sans";



`
const Contact = () => {
    return (
        <>
        <Power/>
        <SocialBar/>
        <Div>
           <Form>
<Input type="text" placeholder='Name' required/> <br/>
<Input type="email" placeholder='Email' required/><br/>
<Input type="tel" placeholder='Phone' required/><br/>
<Label>Additional Comments</Label>
<Textarea></Textarea> <br/>
<Button> Submit</Button>
           </Form>
        </Div>
        </>
    )
}

export default Contact
