

// in global mode =>
// browser : this === window
// node : this === global


// in function
// in strict mode : undefined
// in regular mode : window

// when called as a event handler : the event source
// when the function is a fat arrow : the praent's value of this
// when in a function called a constructor : the current instance of the constructor

// in a script type module : undefined


// when used with .bind() : can be ANYTHING


// CONCLUSION : WHEN DEALING WITH THIS => JUST MAKE A CONSOLE.LOG FIRST TO BE SURE