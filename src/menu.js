const getMenuPage = () => {
  console.log("Hello Pluto!");
  const div = document.createElement("div");
  div.textContent = "Hello Pluto!";
  div.classList.add("card");

  return div;
}

export { getMenuPage };