(function countSeconds() {
  var tick = 0;
  var limit = 5;
  var intervalId;

  function displayMessage() {
    console.log("IAM THE MESSAGE");
  }

  const count = () => {
    if (tick === limit) {
      displayMessage();
      clearInterval(intervalId);
    } else {
      tick++;
      console.log("tick", tick);
    }
  };

  intervalId = setInterval(count, 1000);
})();
