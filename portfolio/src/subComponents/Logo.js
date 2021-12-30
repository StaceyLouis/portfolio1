import React from 'react'
import styled from 'styled-components'

const Logoc = styled.h1`
display: inline-block;
color: white;
font-family: 'Pushster',serif;
position: fixed;
left: 2rem;
top: 2rem;
font-size: 1.5rem;
z-index: 3;
border: 3px solid white;
padding: 1rem;
border-radius: 50%;
`
const Logo = () => {
    return (
        <>
        <Logoc>
            
            SL
            
        </Logoc>
        </>
        
    )
}

export default Logo
