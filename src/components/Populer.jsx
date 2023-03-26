import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect,useState } from "react";
import styled from "styled-components";
import '@splidejs/splide/dist/css/splide.min.css'
import {Link} from 'react-router-dom';
import Recepie from "../pages/Recipe";

function Populer() {

    const [Populer,setPopuler]=useState([]);

    useEffect(()=>{
        getPopuler();
    },[]);
const getPopuler = async () =>{

    const check = localStorage.getItem("populer");
    if(check){
        setPopuler(JSON.parse(check));
    }
    else{
        const api= await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();
            localStorage.setItem("populer",JSON.stringify(data.recipes));
            console.log(data.recipes)
            setPopuler(data.recipes)
    }
};
  return (
    <div>
                <Wrapper>
                    <h3>Populer Dishes</h3>
                    <Splide options={{
                        perPage:4,
                        gap:"3rem",
                        breakpoints: {
                            1032: {
                                perPage: 3,
                            },
                            800:{
                                gap:"2rem"
                            },
                            626: {
                                perPage:2,
                            },
                            440:{
                                perPage:1,
                            }
                      },
                      snap:true,
                      pagination:false,
                        arrows:false,
                        paginations: false,
                        drag: 'free',
                    }}>
                    {Populer.map((recipe)=>{
                        return(
                            <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={'/Recipe/'+recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title}/>
                                <Gradient/>
                                </Link>
                            </Card>

                            </SplideSlide>
                        )
                    })}
                    </Splide>
                </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
margin:2rem 0rem;`

const Card=styled.div`
min-height:15rem;
border-radius:2rem;
overflow:hidden;
position:relative;

img{
    border-radius:2rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:0.9rem;
    letter-spacing: 0.050rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
}
`;
const Gradient= styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));`
export default Populer
