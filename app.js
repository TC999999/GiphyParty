console.log("Let's get this party started!");
const party = document.querySelector("#giphyParty");
const input = document.querySelector("#searchGIF");
const find = document.querySelector("#findGIF");
const remove = document.querySelector("#removeGIFs");

async function getGIF(search) {
  const res = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  let len = res.data.data.length;
  let rand = Math.floor(Math.random() * len);
  let GIFURL = res.data.data[rand].images.original.url;
  makeGIF(GIFURL);
}

function makeGIF(source) {
  let newGIF = document.createElement("IMG");
  newGIF.src = source;
  party.appendChild(newGIF);
}

find.addEventListener("click", function (e) {
  e.preventDefault();
  getGIF(input.value);
  input.value = "";
});

remove.addEventListener("click", function (e) {
  e.preventDefault();
  $("#giphyParty").empty();
});
