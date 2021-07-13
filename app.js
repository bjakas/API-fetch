// https://docs.github.com/en/rest

const endpoint = "https://api.github.com/users/bjakas";

// SKRAĆENA VERZIJA 

fetch(endpoint) // 1. promise
  .then((response) => {
    return response.json(); // 2. promise
  })
  .then((data) => {
    var body = document.querySelector("body");
    var h1 = document.createElement("h1");
    h1.innerText = data.login;
    body.appendChild(h1);
    var a = document.createElement("a");
    a.innerText = "Visit my GitHub page";
    body.appendChild(a);
    // adding link
    a.href = data.html_url;
    var img = document.createElement("img");
    body.appendChild(img);
    img.src = "https://avatars.githubusercontent.com/u/74099367?v=4";
    img.alt = "<username> profile image";


  })
  .catch((error) => {
    console.error(error);
  });

//  console.log(data.login);  u consoli: bjakas https://github.com/bjakas
// console.log(data.html_url);

/* DUŽA VERZIJA
fetch(endpoint)   // šaljemo zahtjev na naš endpoint // 1. promise
.then((response) => {
  response.json() // 2. promise
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error); // console.error je još jedna metoda za ispisivanje tekstau  consoli, tekst bude crven
    });
})
.catch((error) => {
  console.log(error);
})
*/