import React, { useEffect, useState } from "react";
import styled from 'styled-components'






const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`
const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`
const Description = styled.p`
  color: #fff;
  font-weight: 300;
`
const ActionButton = styled.button`
margin: 0 5px;
padding: 8px 14px;
background: rgba(155, 155, 155, 0.2);
color: #fff;
cursor: pointer;
border: 1px solid #fff;
outline: 0;
font-weight: 300;
:hover {
  opacity: 0.8;
}
` 
const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
`

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: ${(props) => `1px solid ${props.theme.border}`};
`


function MenuCard({ title, date, description, actions }) {

  const [favMenu, setFavMenu] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:9292/menus")
      .then((res) => res.json())
      .then((data) =>  setFavMenu(data));
  }, []);

  // fetch(api)
  //     .then(response => response.json())
  //     .then(data => {     
  //              if(**YOUR_CONDITION_HERE**){

  //                 this.setState({ 
  //                  locationName: data.name,
  //                  temperature: data.main.temp,
  //                  weatherDescription: data.weather[0].description,
  //                  isLoading: false, 

  //              } else {

  //                 throw new Error("data invalid");

  //      }).catch(err => console.log(err));
  
  return (

    // {favMenu.map(
    //   menu=> if(menu.price >=200){
    //     return menu
    //   }
      
    <div style={{ color: '#fff',  margin: "100px"}}>
      
      <StyledPhoto src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
    <Title id ='title-card'>{title}</Title>
    <Date>{date}</Date>
    <Description id="title-description">{description}</Description>
    
    <Actions>
    {actions.map(({ label }) => (
      <ActionButton>{label}</ActionButton>
    ))}
    </Actions>

  </div>
)}
  
            
export default MenuCard