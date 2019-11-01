import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:"http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: 2,
    name: "Doncasu",
    image:"https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id: 3,
    name: "Kimbap",
    image:"http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function Food({name, picture}){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt="food"/>
    </div>
  )
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key= {dish.id} name = {dish.name} picture = {dish.image}/>
      ))}            
    </div>
  );
}

export default App;
