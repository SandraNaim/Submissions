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
    list();
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
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

/**  Say help, that lists all the possible commands \
 * @returns {void}
 */

function help() {
  console.log("type hello to say hello");
  console.log("type exit or quit to quit now");
  console.log(
    "type hello (any name) to obtain it as this form: hello 'name'! "
  );
}

var arr = ["Say hello", "quit the code", "use help to know the tasks"];

/** List fo all the tasks */

function list() {
  var d = arr.length;
  for (var i = 0; i < d; i++) {
    console.log(1 + i + "-" + arr[i]);
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
  list();
}

/** remove tasks from the List array */

function remove(x) {
  arr.splice(x - 1, 1);
  list();
}

// The following line starts the application

startApp("Sandra Naim");
