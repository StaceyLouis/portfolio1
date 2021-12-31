import React from 'react'
import { Carousel } from '3d-react-carousal'
import {Box} from '../styles/bodyStyles'
import styled from 'styled-components'

const Img = styled.img`
width: 20rem;
height: 20rem;
`
const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
`


const slides = [
    <Img  src="https://picsum.photos/800/300/?random" alt="1" />,
    <Img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
    <Img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
    <Img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
    <Img src="https://picsum.photos/800/304/?random" alt="5" />  
]
const Slider = () => {
    return (
        <div>
       <Carousel slides={slides}  interval={1000} />
       
       </div>
    )
}

export default Slider
