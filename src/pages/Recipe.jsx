import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import styled from 'styled-components';
import React from 'react'

function Recepie() {
  let params = useParams();
  const [details,setDetails]=useState({});
  const [activeTab, setActiveTab]=useState('instructions');
  const fetchDetails = async ()=>{
    const data= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData= await data.json();
    setDetails(detailData);
    // console.log(detailData)
  }
  useEffect(()=>{
    fetchDetails();
    // console.log(params.name
  },[params.name])
  return (
   <DetailsWrapper>
    <div className='leftd'>
      <h2>{details.title}</h2>
      <img src={details.image} alt={details.title} />
    </div>
    <Info>
      <Button className={activeTab === "instructions"?"active":""}
      onClick={()=> setActiveTab('instructions')}>Instuctions</Button>
      <Button className={activeTab === "ingredients"?"active":""} onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
      {activeTab === 'instructions' &&(

      <div>
        <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
        <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
      </div>
      )}
      {activeTab ==='ingredients' && (

      <ul>
        {details.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      )}
    </Info>
   </DetailsWrapper>
  )
}
const DetailsWrapper=styled.div`
margin-top:5rem;
margn-bottom:5rem;
display: flex;
@media (max-width: 830px) {
  margin:2rem 0rem;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
.active{
  background:linear-gradient(35deg, #494949, #313131);
  color:white;
}
h2{
  margin-bottom: 1.2rem;
  font-size: 1rem;
}
li{
  font-size:0.9rem;
  list-style:none;

}
ul{
  margin-top:2rem
}
h3{
  font-size: 0.9rem;
  color: rgb(70, 23, 77);
  margin: 2rem 0rem;
  line-height:unset;
}

`
const Button=styled.button`
padding:.4rem 1rem;
cursor:pointer;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
@media (max-width: 830px) {
  margin-right:1rem;
@media (max-width: 400px) {
  margin-right:0.2rem;
`
const Info=styled.div`
margin-left:3rem;

@media (max-width: 830px) {
margin-left:0rem;
width:100%
}`

export default Recepie
