function foo(params) {
  console.log("current value of this =>", this);
}

foo.bind("chose")()
