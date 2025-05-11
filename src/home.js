const getHomePage = () => {
  const container = document.createElement("div");
  container.classList.add("home");


  let div = document.createElement("div");
  div.classList.add("card");

  let heading = document.createElement("h1");
  heading.textContent = "Our Mission";

  div.appendChild(heading);

  let missionStatement = document.createElement("p");
  missionStatement.textContent = "Welcome to the elevated dining experience. We strive to connect people from around the world through culinary exposition. Each dish tells the story of a culture through flavor, connecting past, future, and present."
  div.appendChild(missionStatement);

  container.appendChild(div);



  div = document.createElement("div");
  div.classList.add("card");

  heading = document.createElement("h1");
  heading.textContent = "Our Team";

  div.appendChild(heading);

  let teamMembers = document.createElement("ul");
  let li = document.createElement("li");
  li.textContent = "Any1, Head Chef, Menu Curator";
  teamMembers.appendChild(li);

  li = document.createElement("li");
  li.textContent = "Any2, Drink Curator, Menu Contributor";
  teamMembers.appendChild(li);

  li = document.createElement("li");
  li.textContent = "A TGR Corporation Establishment";
  teamMembers.appendChild(li);
  div.appendChild(teamMembers);


  container.appendChild(div);


  return container;
}

export { getHomePage };