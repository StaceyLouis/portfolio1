import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
background-color: white;
margin: 1rem;
opacity: 0.8;
border-radius: 1rem;
height: 25rem;
width: 17rem;
box-shadow: 0.5rem 0.1rem 0.5rem 0.1rem #0A0D19;
overflow: hidden;
color: black;
font-weight: bolder;
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


const Img =styled.img`
border-radius: 0.1rem;
object-fit: cover;
`

const ProjectTile = () => {
    return (
        <Div>
            <Img  src="https://picsum.photos/800/300/?random" width="100%" height="50%" alt="1" />
            <p>Project Description</p>
            <hr/>
        </Div>
    )
}

export default ProjectTile
