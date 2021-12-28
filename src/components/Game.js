import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Item from "./Item";
import cookieSrc from "../cookie.svg";
import useInterval from "../hooks/use-interval.hook";
import useKeyup from "../hooks/useKeyUp";
import useDocumentTitle from "../hooks/useDocumentTitle";


const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

const Game = () => {
  // TODO: Replace this with React state!
  // const numCookies = 100;
  // const purchasedItems = {
  //   cursor: 0,
  //   grandma: 0,
  //   farm: 0,
  // };

  const [purchasedItems, setPurchasedItems] = useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  const handleClick = (id) => {
    items.forEach((item) => {
      if (id === item.id) {
        if (numCookies >= item.cost) {
          setNumCookies(numCookies - item.cost);
          setPurchasedItems({
            ...purchasedItems,
            [id]: purchasedItems[id] + 1,
          });
        } else {
          window.alert("booo! You don't have enough cookies");
        }
      }
    });
  };



  const [numCookies, setNumCookies] = useState(100);

  const clickCounter = () => {
    setNumCookies(numCookies => (numCookies + 1));
  };

  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItems);

    setNumCookies(numCookies + numOfGeneratedCookies);
  }, 1000);

  const calculateCookiesPerTick = (purchasedItems) => {
    const { cursor, grandma, farm } = purchasedItems;

    return cursor + grandma * 10 + farm * 80;
  };

  // console.log(calculateCookiesPerTick(purchasedItems));

  useKeyup("Space", () => setNumCookies(numCookies + 1))


useDocumentTitle (numCookies +" Cookies")
 

 


  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          <strong>{calculateCookiesPerTick(purchasedItems)}</strong> cookies per
          second
        </Indicator>
        <Button onClick={clickCounter}>
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>
      <ItemArea>
        <SectionTitle>
          <p>Items:</p>
          {items.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                cost={item.cost}
                value={item.value}
                numOwned={purchasedItems}
                handleClick={() => {
                  handleClick(item.id);
                }}
              />
            );
          })}
        </SectionTitle>
        {/* TODO: Add <Item> instances here, 1 for each item type. */}
      </ItemArea>
      <HomeLink to="/">Return home</HomeLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const GameArea = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Cookie = styled.img`
  width: 200px;
`;

const ItemArea = styled.div`
  height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: yellow;
`;

const Indicator = styled.div`
  position: absolute;
  width: 250px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Total = styled.h3`
  font-size: 28px;
  color: lime;
`;

const HomeLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
  color: #666;
`;

export default Game;
