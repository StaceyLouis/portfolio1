import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { HomeButton } from '../styles/Svgs'

const Button = styled.button`
position: fixed;
top: 2rem;
left: 50%;
background-color: transparent;
border-radius: 50%;
border: none;
color: white;
padding: 0.3rem;
width: 2.5rem;
height: 2.5rem;
&:hover{
    background-color: rgba(255,255,255,0.2);
    box-shadow: 0 0 8px 6px rgba(255,255,255,0.2);
}
&> *:first-child{
    text-decoration: none;
    color: inherit;
}

`

const Power = () => {
    return (
        <Button>
            <NavLink to="/">
            <HomeButton width={30} height={30} fill="currentColor"/>
            </NavLink>
        </Button>
    )
}

export default Power
