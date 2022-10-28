import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from "../data"
import {mobile} from "../responsive"

const Container=styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
margin-top:15px;
overflow:hidden;
${mobile({display:"none"})}
`;
const Arrow=styled.div`
width:50px;
height:50px:
backgroun-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
left:${props=> props.direction === "left"&&"10px"};
right:${props=> props.direction === "right"&&"10px"};
cursor:pointer;
z-index:2;
`;
const Wrapper=styled.div`
height:70%;
display:flex;
transition: all 1.5s ease;
transform:translateX(${props=>props.slideIndex * -100}vw);
`;
const Slide=styled.div`
display:flex;
width:100vw;
height:100vw;
`;
const ImgContainer=styled.div`
flex:1;
height:100%;

`;
const InfoContainer=styled.div`
margin-top:120px;
padding:50px;

`;
const Title=styled.div`
font-size:70px;
text-align:center;
`;
const Desc=styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
text-align:center;
`;
const Button=styled.button`
padding:10px;
margin-left: 220px;
font-size:20px;
cursor:pointer;
background-color:transparent;
`;
const Image=styled.img`
height:60%;
`;
const Slider = () => {
    const [slideIndex,setSlideIndex] =useState(0);
    const handleClick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 :2)
        }else{
            setSlideIndex(slideIndex <2 ? slideIndex+1 :0)
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
               <ChevronLeftOutlined/> 
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item=>(
                <Slide key={item.id}>
                    <ImgContainer>
                        <Image src ={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>WINTER SALE</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
               </Slide>
               ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
               <ChevronRightOutlined/> 
            </Arrow>
        </Container>
    )
}

export default Slider
