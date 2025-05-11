const getAboutPage = () => {
  const container = document.createElement("div");
  container.classList.add("about");
  
  let div = document.createElement("div");
  div.classList.add("card");

  let title = document.createElement("h1");
  title.textContent = "Our Story";
  div.appendChild(title);

  // let text = document.createElement("div");

  let story = document.createElement("p");
  story.textContent = "Inspired by the cultures we've experienced around the globe, We aim to infuse our dishes with the experiences of the well-traveled man. We strive to push the boundaries of culinary expression, joining art and history, love and culture. We hope you leave with an expanded world view,"
  story.classList.add("story");
  div.appendChild(story);

  let sendOff = document.createElement("p");
  sendOff.textContent = "Enjoy";
  sendOff.classList.add("final-message");
  div.appendChild(sendOff);

  // div.appendChild(text);

  container.appendChild(div);


  div = document.createElement("div");
  div.classList.add("photo-bg");
  container.appendChild(div);

  return container;
}

export { getAboutPage };