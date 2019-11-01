import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:"http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.8
  },
  {
    id: 2,
    name: "Doncasu",
    image:"https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.3
  },
  {
    id: 3,
    name: "Kimbap",
    image:"http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.5
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function Food({name, picture, rating}){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt="food"/>
    </div>
  )
}


function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key= {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating}/>
      ))}            
    </div>
  );
}

export default App;
