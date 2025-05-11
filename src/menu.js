const getMenuPage = () => {
  const container = document.createElement("div");

  container.classList.add("menu");



  let firstCourse = document.createElement("div");
  firstCourse.classList.add("items");
  firstCourse.classList.add("card");

  let title = document.createElement("h1");
  title.textContent = "No. 1";
  firstCourse.appendChild(title);

  let course = document.createElement("p");
  course.textContent = "Sea Urchin Bruschetta";
  firstCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Roasted Reishi Mushrooms";
  firstCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Smoked Seaweed Salad";
  firstCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Global Cheese Board";
  firstCourse.appendChild(course);

  container.appendChild(firstCourse);




  const secondCourse = document.createElement("div");
  secondCourse.classList.add("items");
  secondCourse.classList.add("card");

  title = document.createElement("h1");
  title.textContent = "No. 2";
  secondCourse.appendChild(title);

  course = document.createElement("p");
  course.textContent = "Olive Oil Spinach Salve";
  secondCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Balsmaic Squash Soup";
  secondCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Red Curry Basil Broth";
  secondCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Fire Roasted Tomato Soup";
  secondCourse.appendChild(course);

  container.appendChild(secondCourse);



  const thirdCourse = document.createElement("div");
  thirdCourse.classList.add("items");
  thirdCourse.classList.add("card");

  title = document.createElement("h1");
  title.textContent = "No. 3";
  thirdCourse.appendChild(title);

  course = document.createElement("p");
  course.textContent = "Braised Short Rib Ramen";
  thirdCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Filet Mignon Tacos";
  thirdCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Thai Chili Sea Bass";
  thirdCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Rosemary Tea Chicken";
  thirdCourse.appendChild(course);

  container.appendChild(thirdCourse);



  
  const fourthCourse = document.createElement("div");
  fourthCourse.classList.add("items");
  fourthCourse.classList.add("card");

  title = document.createElement("h1");
  title.textContent = "No. 4";
  fourthCourse.appendChild(title);

  course = document.createElement("p");
  course.textContent = "Sustainable Arugula Salad";
  fourthCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Seared Shrimp Tacos";
  fourthCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Braised Coconut Scallops";
  fourthCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Chef's Choice";
  fourthCourse.appendChild(course);

  container.appendChild(fourthCourse);



  const fifthCourse = document.createElement("div");
  fifthCourse.classList.add("items");
  fifthCourse.classList.add("card");

  title = document.createElement("h1");
  title.textContent = "No. 5";
  fifthCourse.appendChild(title);

  course = document.createElement("p");
  course.textContent = "Crème Brûlée";
  fifthCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Ethical Chocolate Cake";
  fifthCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Alaskan Berry Pie";
  fifthCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Charcoal Gelato";
  fifthCourse.appendChild(course);

  container.appendChild(fifthCourse);



  const drinkCourse = document.createElement("div");
  drinkCourse.classList.add("items");
  drinkCourse.classList.add("card");

  title = document.createElement("h1");
  title.textContent = "Beverages";
  drinkCourse.appendChild(title);

  course = document.createElement("p");
  course.textContent = "Mid-Day Mint";
  drinkCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Blended Dark Passion";
  drinkCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Sand in My Glass";
  drinkCourse.appendChild(course);

  course = document.createElement("p");
  course.textContent = "Taste of the World";
  drinkCourse.appendChild(course);

  container.appendChild(drinkCourse);
  

  return container;
}

export { getMenuPage };