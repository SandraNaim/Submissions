/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");

  fs.readFile("./database.json", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    arr = JSON.parse(data);
  });
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  var Wel = text.split(" ");

  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (Wel[0] === "hello") {
    hellos(Wel[1]);
  } else if (text === "hello\n") {
    hello();
  } else if (text === "help\n") {
    help();
  } else if (text === "list\n") {
    list();
  } else if (Wel[0] === "add") {
    add(text);
  } else if (text === "add\n") {
    console.log("error");
  } else if (Wel[0] === "remove") {
    remove(Wel[1]);
  } else if (text === "remove\n") {
    arr.pop();
    done.pop();
    list();
  } else if (Wel[0] === "edit") {
    edit(text);
  } else if (text === "edit\n") {
    console.log("error");
  } else if (Wel[0] === "check") {
    check(Wel[1]);
  } else if (Wel[0] === "uncheck") {
    uncheck(Wel[1]);
  } else if (text === "check\n") {
    console.log("error");
  } else if (text === "uncheck\n") {
    console.log("error");
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hellos(x) {
  var rep = x.replace("\n", "!");
  console.log("hello " + rep);
}
function hello() {
  console.log(`hello !`);
}
/**
 * Exits the application
 *
 * @returns {void}
 */

const fs = require("fs");
function quit() {
  fs.writeFile("database.json", JSON.stringify(arr), err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data is saved");
    console.log("Quitting now, goodbye!");
    process.exit();
    //file written successfully
  });
}

/**  Say help, that lists all the possible commands \
 * @returns {void}
 */

function help() {
  console.log("type hello to say hello");
  console.log("type exit or quit to quit now");
  console.log(
    "type hello (any name) to obtain it as this form: hello + 'name'+ ! "
  );
  console.log("type 'list' to have all the lists of the tasks");
  console.log("type 'add' to add a task to the array 'list'");
  console.log("type 'remove' to remove a task from the array 'list'");
  console.log("type 'edit' to edit the elements inside the array");
  console.log(
    "click 'check' for checking the done task and 'uncheck' for the undone task"
  );
}

var arr = ["Say hello", "quit the code", "use help to know the tasks"];
var done = ["✓", " ", " "];
/** List fo all the tasks */

function list() {
  var d = arr.length;
  for (var i = 0; i < d; i++) {
    console.log(1 + i + "- [" + done[i] + "]" + arr[i]);
  }
}

/** add task to the list array */

function add(x) {
  let sentance = x.split(" ");
  sentance.shift();
  let st = sentance.toString();
  st = st.replace(/\,/g, " ");
  st = st.replace("\n", "");
  arr.push(st);
  done.push(" ");
  list();
}

/** remove tasks from the List array */

function remove(x) {
  if (x <= arr.length) {
    arr.splice(x - 1, 1);
    done.splice(x - 1, 1);
    list();
  } else {
    console.log("error");
  }
}

/** edit the task in the array */

function edit(x) {
  var y = x.split(" ");
  if (parseInt(y[1]) > 0 && parseInt(y[1]) <= y.length) {
    var i = parseInt(y[1]) - 1;
    y.shift();
    y.shift();
    let st = y.toString();
    st = st.replace(/\,/g, " ");
    st = st.replace("\n", "");

    arr[i] = st;
    list();
  } else {
    var i = parseInt(y[1]) - 1;
    y.shift();
    let st = y.toString();
    st = st.replace(/\,/g, " ");
    st = st.replace("\n", "");
    arr[arr.length - 1] = st;
    list();
  }
}

function check(x) {
  done[x - 1] = "✓";
  list();
}
function uncheck(x) {
  done[x - 1] = " ";
  list();
}

// The following line starts the application

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

startApp("Sandra Naim");
