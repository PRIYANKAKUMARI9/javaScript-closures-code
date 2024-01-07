function hello() {
    let name = "Mozilla"; // name is a local variable created by init

    function displayName() {
      // displayName() is the inner function, that forms the closure

      let name="priyanka"
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  hello();