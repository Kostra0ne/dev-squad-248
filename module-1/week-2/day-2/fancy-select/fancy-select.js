class FancySelect {
  constructor(parentElement) {
    this.isActive = false;
    this.parentElement = parentElement;
    this.createMarkup();
    parentElement.querySelector(".cursor").onclick = this.handleClick.bind(
      this
    );
  }

  createMarkup() {
    this.parentElement.innerHTML = '<span class="cursor"></span>';
  }

  handleClick(evt) {
    this.isActive = !this.isActive;
    evt.target.classList.toggle("is-active");
  }
}

document
  .querySelectorAll(".fancy-select")
  .forEach((element) => new FancySelect(element));
