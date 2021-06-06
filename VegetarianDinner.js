//Filter out vegetarian dishes for a vegetarian menu

const dishes = [
{
    name: "Eggplant parmesan",
    vegetarian: true
},
{
    name: "Chicken curry",
    vegetarian: false
},
{
    name: "Thai green curry",
    vegetarian: true
},
];



const vegetarianDishes = dishes.filter(dishes=>dishes.vegetarian);

var names = vegetarianDishes.map(function(item) {
    return item['name'];
  });
console.log(names);