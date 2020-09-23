// console.log(axios);
const btn = document.getElementById("get-message");
// console.log(btn);
console.log("HELLO MY BRUDDAHS");
btn.onclick = () => {
  //   console.log("I am clicked");
  axios
    .get("http://localhost:3000/ajax")
    .then((apiResponse) => {
      console.log(apiResponse);
      document.querySelector(
        "body"
      ).innerHTML = `<h1>${apiResponse.data.message}</h1>`;
    })
    .catch((apiError) => {
      console.log(apiError);
    });
};

// console.log(TOTO_LASTICOT);
