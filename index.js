import { hotels } from './hotels.js';

const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3010;

app.use(cors())

app.get('/hotels/sort/pricing', (req, res) => {
  let pricing=req.query.pricing;
  let priceArray=null;
  if(pricing=='low-to-high'){
      priceArray=hotels.sort((a,b)=>a.price-b.price);
  }else{
      priceArray=hotels.sort((a,b)=>b.price-a.price);
  }
  res.json({hotels:priceArray});
});

app.get('/hotels/sort/rating', (req, res) => {
  let rating=req.query.rating;
  let ratingArray=null;
  if(rating=='low-to-high'){
      ratingArray=hotels.sort((a,b)=>a.rating-b.rating);
  }else{
      ratingArray=hotels.sort((a,b)=>b.rating-a.rating);
  }
  res.json({hotels:ratingArray});
});

app.get('/hotels/sort/reviews', (req, res) => {
  let reviews=req.query.reviews;
  let reviewsArray=null;
  if(reviews=='least-to-most'){
      reviewsArray=hotels.sort((a,b)=>a.reviews-b.reviews);
  }else{
      reviewsArray=hotels.sort((a,b)=>b.reviews-a.reviews);
  }
  res.json({hotels:reviewsArray});
});

app.get('/hotels/filter/amenity', (req, res) => {
  let amenity=req.query.amenity;
  amenityArray=hotels.filter((a)=>
      a.amenity.toLowerCase()===amenity.toLowerCase());
  res.json({hotels:amenityArray});
});

app.get('/hotels/filter/country', (req, res) => {
  let country=req.query.country;
  countryArray=hotels.filter((a)=>
      a.country.toLowerCase()===country.toLowerCase());
  res.json({hotels:countryArray});
});

app.get('/hotels/filter/category', (req, res) => {
  let category=req.query.category;
  categoryArray=hotels.filter((a)=>
      a.category.toLowerCase()===category.toLowerCase());
  res.json({hotels:categoryArray});
});

app.get('/hotels', (req, res) => {
  res.json({hotels:hotels});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
