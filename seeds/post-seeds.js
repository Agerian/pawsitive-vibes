// Require the models and the database connection
const Pet = require("../models/pet");
const User = require("../models/user");
const db = require("../config/db");

// Import the Pet model
const Pet = require("../models/pet");

// Find all the pets in the database
Pet.find({}, function(err, pets) {
  if (err) {
    console.error(err);
  } else {
    // Loop through the pets array and print their names
    pets.forEach(function(pet) {
      console.log(pet.name);
    });
  }
});

// Create an array of 20 pet objects with name and type properties
let pets = [
    {name: "Fluffy", type: "cat"},
    {name: "Spot", type: "dog"},
    {name: "Nemo", type: "fish"},
    {name: "Snowy", type: "rabbit"},
    {name: "Tweety", type: "bird"},
    {name: "Spike", type: "hedgehog"},
    {name: "Bella", type: "hamster"},
    {name: "Cookie", type: "guinea pig"},
    {name: "Leo", type: "turtle"},
    {name: "Luna", type: "cat"},
    {name: "Max", type: "dog"},
    {name: "Dory", type: "fish"},
    {name: "Thumper", type: "rabbit"},
    {name: "Kiwi", type: "bird"},
    {name: "Shadow", type: "hedgehog"},
    {name: "Milo", type: "hamster"},
    {name: "Coco", type: "guinea pig"},
    {name: "Rex", type: "turtle"},
    {name: "Simba", type: "cat"},
    {name: "Lola", type: "dog"}
  ];
  
  // Loop through the array and print the name and type of each pet
  for (let pet of pets) {
    console.log(pet.name + " is a " + pet.type);
  }
  