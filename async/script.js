"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////
const renderCountry = function (data) {
  const html = `
    <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>${(+data.population / 100000).toFixed(
              1
            )}</span>POP people</p>
            <p class="country__row"><span></span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
    </article>`;

  //   countriesContainer.insertAdjacentHTML("beforeend", html);
  //   countriesContainer.style.opacity = 1;
  // };
  //const getCountryandNeighbour = function (country) {
  //Ajax call country 1
  //   const request = new XMLHttpRequest();
  //   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);

  //   request.send();

  //   request.addEventListener("load", function () {
  //     const [data] = JSON.parse(this.responseText);
  //     console.log(data);

  //Render country 1
  // renderCountry(data);

  //Get neighbour country
  // const [neighbour] = data.borders;
  // if (!neighbour) return;
  // //Ajax call country 2
  // const request2 = new XMLHttpRequest();
  // request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbour}`);

  // request2.send();

  // request2.addEventListener("load", function () {
  //     console.log(JSON.parse(this.responseText));
  //   console.log(data2);
  //     });
  //   });
  // };
  // getCountryandNeighbour("portugal");

  //Fetch API

  // const request = new XMLHttpRequest();
  // request.open("GET", `https://restcountries.eu/rest/v2/name/portugal`);
  // console.log(request);

  // const getCountryData = function (country) {
  //   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  //     .then(function (response) {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //       renderCountry(data[0]);
  //     });
  // };

  // const getCountryData = function (country) {
  //   //Country 1
  //   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  //     .then((response) => {response.json()})
  //     .then((data) => {
  //       renderCountry(data[0]);
  //       const neighbour = data[0].borders[0];
  //       if (!neighbour) return;

  //       //Country 2
  //       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
  //         .then((response) => response.json())
  //         .then((data) => renderCountry(data, "neighbour"))
  //         .catch((err) => alert(err));
  //     });
  // };
  // btn.addEventListener("click", function () {
  //     getCountryData('portugal');
  // })

  // console.log("Test start");
  // setTimeout(() => console.log("0 sec timer"), 0);
  // Promise.resolve("Resolved Promise 1").then((res) => console.log(res));

  // Promise.resolve("Resolved promise 2").then((res) => {
  //   for (let i = 0; i < 10000; i++) {}
  //   console.log(res);
  // });
  // console.log("Test end");

  // const lotteryPromise = new Promise(function (resolve, reject) {
  //   console.log("Lottery draw is happening");
  //   setTimeout(function () {
  //     if (Math.random() >= 0.5) {
  //       resolve("You win $");
  //     } else {
  //       reject("You lost your money");
  //     }
  //   }, 2000);
  // });
  // lotteryPromise
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));

  // //Promisifying setTimeout
  // const wait = function (seconds) {
  //   return new Promise(function (resolve) {
  //     setTimeout(resolve, seconds * 1000);
  //   });
  // };
  // wait(2)
  //   .then(() => {
  //     console.log("I waited for 2 seconds");
  //     return wait(1);
  //   })
  //   .then(() => console.log("I waited gfor 1s"));

  const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  const whereAmI = async function () {
    //Geolocation
    const pos = await getPosition();

    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    //Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  };
  whereAmI();
  console.log("FIRST");
};
// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }
