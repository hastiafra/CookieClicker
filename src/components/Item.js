import React, {useEffect, useRef}from "react";
import styled from "styled-components";

const Item = (props) => {
  const {id, name, cost, value, numOwned, handleClick} = props;

  const firstNameRef = useRef(null);

  useEffect(()=>{
    if(id === "cursor"){
    firstNameRef.current.focus();}
    console.log(firstNameRef)
  }, []);

  

// i had to change the <a> to <button> so the focus() works

  return (
    <>
      <Wrapper >
        <Button ref={firstNameRef} onClick={handleClick} >
        <Title>{name}</Title>
        <Info>
          Cost:{cost} cookie(s).Produces {value} cookies/second.
        </Info>
        <Score>{numOwned[id]}</Score>
        </Button>
      </Wrapper>
    </>
  );
};

export default Item;

const Button = styled.button `
background-color: transparent;
border:none;
`

const Title = styled.p`
color:white;
text-align:left;
display:block;
font-size:35px;
font-weight:bold;
`
const Info = styled.p`
color:white;
font-size:20px;
font-weight: 400;
display: inline;
`

const Score = styled(Info)`
font-size: 40px;
padding: 20px;
`

const Wrapper = styled.div`
border-bottom: 3px solid gray;
padding: 20px;

`