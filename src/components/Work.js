import React from 'react'
import '../index.css'
import Title from '../subComponents/Title'
import { Div} from '../styles/bodyStyles'
import Power from '../subComponents/Power'
import SocialBar from '../subComponents/SocialBar'
import Slider from 'react-slick'
import Slide from './Slider'
import ProjectTile from '../subComponents/ProjectTile'


const Work = () => {
    return (
        <Div>
            <Power/>
            <SocialBar />
            
    <ProjectTile/>
    <ProjectTile/>
            <Title text="WORK" top="7%" left="3%"/>
        </Div>
    )
}

export default Work
