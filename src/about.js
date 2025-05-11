const getAboutPage = () => {
  console.log("Hello Milky Way!");
  const div = document.createElement("div");
  div.textContent = "Hello Milky Way!";
  div.classList.add("card");

  return div;
}

export { getAboutPage };