// import React from 'react'
import styled from 'styled-components';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
function Search() {
    const [input,setInput]=useState('');
    const navigate = useNavigate();  
    const submitHandler=(e) =>{
        e.preventDefault();
        navigate('/searched/'+input)
    };
  return (
    <FormStle onSubmit={submitHandler}>
        <div>
        <FaSearch></FaSearch>
      <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
        </div>
    </FormStle>
  )
}
const FormStle=styled.form`
margin:0rem 7rem;
@media (max-width: 600px) {
  margin:0rem 0rem;
}
div{
    width:100%;
    position:relative;

}
input{
    border:none;

    background: linear-gradient(35deg,#494949,#313131);
    color: white;
    font-size: 1rem;
    padding: 0.5rem 3rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    width: 100%;

}
svg{
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(100%,-50%);
    color:white;
}
`
export default Search
