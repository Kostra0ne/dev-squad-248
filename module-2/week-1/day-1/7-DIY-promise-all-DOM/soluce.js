function action(btn) {
  return new Promise((resolve) => {
    btn.onclick = () => {
      btn.classList.add("is-active");
      resolve();
    };
  });
}
