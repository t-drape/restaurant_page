const getAboutPage = () => {
  console.log("Hello Milky Way!");
  const container = document.createElement("div");
  container.classList.add("about");
  let div = document.createElement("div");
  div.textContent = "Hello Milky Way!";
  div.classList.add("card");
  container.appendChild(div);
  div = document.createElement("div");
  div.textContent = "Hello Milky Way!";
  div.classList.add("card");
  container.appendChild(div);
  div = document.createElement("div");
  div.textContent = "Hello Milky Way!";
  div.classList.add("card");
  container.appendChild(div);

  return container;
}

export { getAboutPage };