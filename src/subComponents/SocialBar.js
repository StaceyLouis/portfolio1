import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {Facebook, Github, Twitter, YouTube} from '../styles/Svgs'


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;

&>*not(:last-child){
    margin: 0.5rem 0;
};

`

const Line= styled.span`
width: 2px;
height: 6rem;
background-color: white;
`

const SocialBar = () => {
    return (
        <Icons>
            <div>  <NavLink to="/">
                    <Github width={25} height={25} fill="white"  className="icons"/>
                </NavLink> </div>
              <div><NavLink to="/">
                    <Twitter width={25} height={25} fill="white" className="icons" />
                </NavLink></div>
                <div>
                <NavLink to="/">
                    <Facebook width={25} height={25} fill="white" className="icons" />
                </NavLink>
                </div>
                <div>
                <NavLink to="/">
                    <YouTube width={25} height={25} fill="white" className="icons"/>
                </NavLink>
              </div>
                
            <Line/>
        </Icons>
    )
}

export default SocialBar
