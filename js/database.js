// TASK-101: Restaurant database 
const restaurants = [
  { id: 1, name: "Pasta Man", category: "Italian", open: true },
  { id: 2, name: "Pizzeria di Paulo", category: "Italian", open: false },
  { id: 3, name: "Tacos Lokitos", category: "Mexican", open: true },
  { id: 4, name: "El Burrito Enorme", category: "Mexican", open: true },
  { id: 5, name: "Burger Factory", category: "Fast Food", open: true },
  { id: 6, name: "Quick Moist Fries", category: "Fast Food", open: false },
  { id: 7, name: "Bento Sushi", category: "Japanese", open: true },
  { id: 8, name: "Beijing Dragon", category: "Chinese", open: true },
  { id: 9, name: "Katsu House", category: "Japanese", open: true},
  { id: 10, name: "Ceviche de Machu Pichu", category: "Peruvian", open: true}

];

// TASK-102: Search method, takes user input and returns matching restaurants
function searchRestaurants(list, query) {
  const q = (query || "").trim().toLowerCase();
  if (q === "") return list;
  return list.filter((r) => r.name.toLowerCase().includes(q));
}

if (typeof module !== "undefined") {
  module.exports = { restaurants, searchRestaurants };
}