class FancySelect {
  constructor(parentElement) {
    this.isActive = false;
    this.parentElement = parentElement;
    this.createMarkup();
    this.cursor = parentElement.querySelector(".cursor");
    // this.cursor.onclick = this.changeStatus.bind(this);
    this.cursor.onclick = this.changeStatus;
  }

  getCurrentStatus() {
    return this.isActive;
  }

  createMarkup() {
    this.parentElement.innerHTML = '<span class="cursor"></span>';
  }

  // changeStatus() {
  //   this.isActive = !this.isActive;
  //   this.cursor.classList.toggle("is-active");
  // }

  changeStatus = () => {
    this.isActive = !this.isActive;
    this.cursor.classList.toggle("is-active");
  };
}

document
  .querySelectorAll(".fancy-select")
  .forEach((element) => {
    const x = new FancySelect(element);
    console.log(x.getCurrentStatus());
  });

