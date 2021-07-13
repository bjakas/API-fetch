const endpoint = "https://api.github.com/users/bjakas";

fetch(endpoint) // 1. promise
  .then((response) => {
    return response.json(); // 2. promise
  })
  .then((data) => {
    const h1 = document.createElement("h1");
    h1.innerText = data.login;
    document.body.appendChild(h1);

    const a = document.createElement("a");
    a.setAttribute("href", data.html_url);
    // OR: a.href = data.html_url;
    a.innerText = "Visit my GitHub page";
    document.body.appendChild(a);


    const img = document.createElement("img");
    img.setAttribute("src", data.avatar_url); // OR: img.src = data.avatar_url;
    img.setAttribute("alt", `${data.login} profile image`); // OR: img.alt = `${data.login} profile image`;
    document.body.appendChild(img);

  })
  .catch((error) => {
    console.error(error);
  });

