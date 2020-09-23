import ApiHandler from "./apiHandler.js";

const stylesApi = new ApiHandler("/api/styles");

// const pokemonApi = new ApiHandler("https://pokeapi.co/api/v2/pokemon");

// pokemonApi.getAll().then((result) => {
//   console.log(result.data);
// });

const submitBtn = document.getElementById("submit-style");

setDeleteListeners(); // Sets  the event listener on the delete buttons
editListeners(); // Sets  the event listener on the edit buttons

function setDeleteListeners() {
  const deleteButtons = document.querySelectorAll(".delete"); // Get all the buttons with the class delete

  deleteButtons.forEach((button) => {
    button.onclick = (event) => {
      const currentButton = event.currentTarget; // Get the element that triggered the event && on which the event listener was attached to.
      // small difference with event.target more here (https://stackoverflow.com/questions/10086427/what-is-the-exact-difference-between-currenttarget-property-and-target-property)

      // Here in order to know which style/row the button belongs to be able to send it to the backend, we
      // can get the id via the custom data attribute (data-id) that we set on the .hbs file when loading the page.

      const id = currentButton.getAttribute("data-id");
      const parentRow = currentButton.closest("tr"); // Get the closest tr so we can remove it once the delete is successful

      stylesApi
        .deleteOne(id) // Make the call to delete an element
        .then((apiResponse) => {
          parentRow.remove(); // remove the row that has just been clicked
        })
        .catch((apiError) => {
          console.log(apiErr);
        });
    };
  });
}

function editListeners() {
  const editButtons = document.querySelectorAll(".edit"); // Get all the edit buttons

  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const currentButton = event.currentTarget; // cf: setDeleteListeners
      const id = currentButton.getAttribute("data-id");

      /**
       *  Here we want to get the name and color values display in the row
       *  So we need to target those elements and extract their value either via custom data attribute
       *  here, we're getting the values from the innerHTML.
       *
       */

      const name = currentButton.closest("tr").querySelector("td.name")
        .innerHTML;
      const color = currentButton.closest("tr").querySelector("td.color")
        .innerHTML;

      // Get the inputs (name|color) and pass them the values coming from the row
      const inputName = document.querySelector(".input[name='name']");
      const inputColor = document.querySelector(".input[name='color']");
      inputName.value = name;
      inputColor.value = color;

      // When we submit the form, we need to know if we're creating or editing an element.
      //   So we created a custom data attribute (data-action) to which we give the value edit or create
      // And we pass in the id of the element we're editing in order to make our patch when the button is clicked
      submitBtn.setAttribute("data-action", "edit");
      submitBtn.setAttribute("data-id", id);
    });
  });
}

submitBtn.onclick = (event) => {
  event.preventDefault();

  const inputColor = document.querySelector(".input[name='color']"); // Gets the <input name="color" />
  const inputName = document.querySelector(".input[name='name']"); // Gets the <input name="name" />
  const name = inputName.value; // get the name value
  const color = inputColor.value; // get the color value

  const action = event.target.getAttribute("data-action"); // Get the action in order to post/patch (create/edit)

  if (name === "") return; // Check if input is empty, if it is, excit the function

  const data = {
    name,
    color,
  };

  if (action === "create") {
    //   Create
    stylesApi
      .createOne(data)
      .then((apiResponse) => {
        //   const { name, color, _id } = apiResponse.data; // Destructuring
        const name = apiResponse.data.name;
        const color = apiResponse.data.color;
        const _id = apiResponse.data._id;
        createDataRow(name, color, _id); // Create a row when a style has been succesfully created
        inputName.value = ""; // Empty the input value for user experience
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  } else {
    //   Update
    const id = submitBtn.getAttribute("data-id"); // Gets the id of the element we want to edit

    stylesApi
      .updateOne(id, { name, color }) // patch by passing the id as a url parameter, and the values to update
      .then((apiResponse) => {
        submitBtn.setAttribute("data-action", "create"); // Switch back the submit button action to create
        submitBtn.setAttribute("data-id", ""); // Clear the custom data attribute
        inputName.value = ""; // Clear the input value
        const tableRow = document.getElementById(id); // Get the table row that the updated element belongs to  <tr id="{{this._id}}">
        tableRow.querySelector(".name").innerHTML = apiResponse.data.name; // Change the innerHTML with the new value
        tableRow.querySelector(".color").innerHTML = apiResponse.data.color; // Change the innerHTML with the new value
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }
};

function createDataRow(name, color, id) {
  // Creates a row
  const tbody = document.querySelector(".table tbody");
  tbody.innerHTML += `<tr id=${id}>
    <td>${name}</td>
    <td>${color}</td>
    <td  data-id=${id} class="delete"><i class="far fa-trash-alt"></i> </td>
    <td data-id=${id} class="edit"><i class="far fa-edit"></i></td>
</tr>`;

  setDeleteListeners(); //Set event listeners on the delete button otherwise the newly created <td class="delete"> doesnt have an event listener
}
