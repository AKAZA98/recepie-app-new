import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks,GiRiceCooker} from "react-icons/gi";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'


import React from 'react'

function Category() {
  return (
    <List>
        <SLink to={"/Cuisine/Italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>      
        <SLink to={"/Cuisine/American"}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>      
        <SLink to={"/Cuisine/Thai"}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>      
        <SLink to={"/Cuisine/Indian"}>
            <GiRiceCooker/>
            <h4>Indian</h4>
        </SLink>      
    </List>
  )
}

const List =styled.div`
display:flex;
justify-content:center;
margin:1rem 0rem;


`

const SLink = styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:1rem;
text-decoration:none;
border-radius:50%;
background:linear-gradient(35deg,#494949, #313131);
width:6rem;
height:6rem;
cursor:pointer;
transform:scale(0.8);
transition:0.5s;
h4{
color:white;
font-size:0.8rem;
}
@media (max-width: 550px) {
    margin-right:0rem;
    width:5rem;
    height:5rem;
  }
svg{
    color:white;
    font-size:1.6rem;
}&.active{
    background:linear-gradient(to right,#f27121, #e94057);
    svg{
        color:white;
    }
    h4{
        color:white;
    }
}
`

export default Category;

