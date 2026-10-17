// TASK-105: Category grouping & filter
//filters a list of restaurants by their food category
function filterByCategory(restaurants, category) {
  if (category === "All") return restaurants;
  return restaurants.filter((r) => r.category === category);
}

if (typeof module !== "undefined") {
  module.exports = { filterByCategory };
}
