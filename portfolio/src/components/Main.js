import React, { useState } from 'react'
import Logo from '../subComponents/Logo'
import SocialBar from '../subComponents/SocialBar'
import { NavLink } from 'react-router-dom'
import styled,{ keyframes } from 'styled-components'
import {Box} from '../styles/bodyStyles'
import Power from '../subComponents/Power'
import Title from '../subComponents/Title'
import { Gear } from '../styles/Svgs'
import { motion } from 'framer-motion'


const Div = styled.div`
height: 100vh;
width: 100vw;
background-color: #2c2c2c;
overflow: hidden;
position: relative;
display: flex;
`

const Container = styled.div`
padding: 2rem;
`
const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;

`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
color: white;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
color: white;
`
const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
color: white;
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
color: white;
`
const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
color: whitesmoke;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
&>:first-child{
    animation: ${rotate} infinite 4.5s linear;
}
&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`



const Main = () => {
    const [click,setClick] = useState(false)
    const handleClick=() => setClick(!click)

    return (
        <Div>
            <DarkDiv click={click}/>
    <Container>
    <Power/>
            <Logo />
            <SocialBar />
            <Center click = {click}>
                <Gear onClick={() =>handleClick()} width={click? 120: 100} height={click ? 120 : 200} fill='currentColor' />
                <span>Check Out My Work!</span>
            </Center>
            <BLOG to="/contact">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    Contact Me
                </motion.h2>
            </BLOG>
            <Contact to='/about'>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    About
                </motion.h2>
            </Contact>
            <WORK to="/work" click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Work
                </motion.h2>
            </WORK>
           

            </Container>
        </Div>
    )
}

export default Main
