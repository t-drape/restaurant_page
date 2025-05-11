const getHomePage = () => {
  const container = document.createElement("div");
  container.classList.add("home");


  let div = document.createElement("div");
  div.textContent = "Hello Moon!";
  div.classList.add("card");
  container.appendChild(div);



  div = document.createElement("div");
  div.textContent = "Hello Moon!";
  div.classList.add("card");
  container.appendChild(div);


  
  return container;
}

export { getHomePage };