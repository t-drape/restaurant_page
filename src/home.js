const getHomePage = () => {
  console.log("Hello Moon!");
  const div = document.createElement("div");
  div.textContent = "Hello Moon!";
  div.classList.add("card");
  return div;
}

export { getHomePage };