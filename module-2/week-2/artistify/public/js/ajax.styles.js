const submitBtn = document.getElementById("submit-style");

setDeleteListeners();
editListeners();

function setDeleteListeners() {
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.onclick = (event) => {
      const currentButton = event.currentTarget;
      const id = currentButton.getAttribute("data-id");
      const parentRow = currentButton.closest("tr");
      axios
        .delete(`/api/styles/${id}`)
        .then((apiResponse) => {
          parentRow.remove();
        })
        .catch((apiError) => {
          console.log(apiErr);
        });
    };
  });
}

function editListeners() {
  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const currentButton = event.currentTarget;
      const id = currentButton.getAttribute("data-id");
      const name = currentButton.closest("tr").querySelector("td.name")
        .innerHTML;
      const color = currentButton.closest("tr").querySelector("td.color")
        .innerHTML;

      const inputName = document.querySelector(".input[name='name']");
      const inputColor = document.querySelector(".input[name='color']");
      inputName.value = name;
      inputColor.value = color;
      submitBtn.setAttribute("data-action", "edit");
      submitBtn.setAttribute("data-id", id);
    });
  });
}

submitBtn.onclick = (event) => {
  event.preventDefault();

  const inputColor = document.querySelector(".input[name='color']");
  const inputName = document.querySelector(".input[name='name']");
  const name = inputName.value;
  const color = inputColor.value;
  const action = event.target.getAttribute("data-action");

  if (name === "") return;

  const data = {
    name,
    color,
  };

  if (action === "create") {
    axios
      .post("/api/styles/create", data)
      .then((apiResponse) => {
        //   const { name, color, _id } = apiResponse.data;
        const name = apiResponse.data.name;
        const color = apiResponse.data.color;
        const _id = apiResponse.data._id;
        createDataRow(name, color, _id);
        inputName.value = "";
      })
      .catch((apiError) => {
        console.log(apiError);
      });
      
  } else {
    const id = submitBtn.getAttribute("data-id");

    axios
      .patch(`/api/styles/${id}`, { name, color })
      .then((apiResponse) => {
        submitBtn.setAttribute("data-action", "create");
        submitBtn.setAttribute("data-id", "");
        inputName.value = "";
        const tableRow = document.getElementById(id);
        tableRow.querySelector(".name").innerHTML = apiResponse.data.name;
        tableRow.querySelector(".color").innerHTML = apiResponse.data.color;
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }
};

function createDataRow(name, color, id) {
  const tbody = document.querySelector(".table tbody");
  tbody.innerHTML += `<tr id=${id}>
    <td>${name}</td>
    <td>${color}</td>
    <td  data-id=${id} class="delete"><i class="far fa-trash-alt"></i> </td>
    <td data-id=${id} class="edit"><i class="far fa-edit"></i></td>
</tr>`;

  setDeleteListeners();
}
