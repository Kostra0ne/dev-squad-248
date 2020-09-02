export function count(limit, successCallback, endCallback) {
  var tick = 0;
  let id;
  id = setInterval(() => {
    // async task
    tick++;
    console.log(tick);
    if (tick === limit) {
      successCallback(endCallback);
    }
  }, 1000);

  return id;
}
