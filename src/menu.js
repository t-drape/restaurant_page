const getMenuPage = () => {
  const container = document.createElement("div");
  container.classList.add("menu");
  let div = document.createElement("div");
  div.textContent = "Hello Pluto!";
  div.classList.add("card");
  container.appendChild(div);
  div = document.createElement("div");
  div.textContent = "Hello Moon!";
  div.classList.add("card");
  container.appendChild(div);
  div = document.createElement("div");
  div.textContent = "Hello Moon!";
  div.classList.add("card");
  container.appendChild(div);
  div = document.createElement("div");
  div.textContent = "Hello Moon!";
  div.classList.add("card");
  container.appendChild(div);
  div = document.createElement("div");
  div.textContent = "Hello Moon!";
  div.classList.add("card");
  container.appendChild(div);
  div = document.createElement("div");
  div.textContent = "Hello Moon!";
  div.classList.add("card");
  container.appendChild(div);
  

  return container;
}

export { getMenuPage };