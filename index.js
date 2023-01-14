let luckyNum = Math.floor(Math.random()*101);
let luckyNum2 = Math.floor(Math.random()*101);
let luckyNum3 = Math.floor(Math.random()*101);
let url = "http://numbersapi.com";

// 1.call numbs api
$.getJSON(`${url}/${luckyNum}?json`).then(data => {
  console.log(data);
});

// 2.make multiple requests
let luckyNums = [`${luckyNum},${luckyNum2},${luckyNum3}`];

$.getJSON(`${url}/${luckyNums}?json`).then(data => {
  console.log(data);
});

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${url}/${luckyNum}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});