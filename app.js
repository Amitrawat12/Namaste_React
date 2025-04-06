/**
 * Nested HTML structure
 * <div>
 *      <div>
 *          <h1>Heading hai yeeh </h1>
 *          <h2>Heading yeeh bhi hai </h2>
 *      </div>
 * </div>
 * ReactElement(Object) => HTML (Browser Understand)
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "Im h1 tag"),
      React.createElement("h2", {}, "Im h2 tag"),
    ] //if we want to more then one tag then we need to pass it in the form of array
  )
);


/**
 * More complex Nested HTML structure
 * <div>
 *      <div id = 'child1'>
 *          <h1>Heading hai yeeh </h1>
 *          <h2>Heading yeeh bhi hai </h2>
 *      </div>
 *      <div  id = 'child1'>
 *          <h1>Heading hai yeeh </h1>
 *          <h2>Heading yeeh bhi hai </h2>
 *      </div>
 * </div>
 * ReactElement(Object) => HTML (Browser Understand)
 */

const parent2 = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
      "div",
      { id: "child1" },
      [
        React.createElement("h1", {}, "Im h1 tag under child1"),
        React.createElement("h2", {}, "Im h2 tag under child1"),
      ] //if we want to more then one tag then we need to pass it in the form of array
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [
          React.createElement("h1", {}, "Im h1 tag under child2"),
          React.createElement("h2", {}, "Im h2 tag under child2"),
        ] //if we want to more then one tag then we need to pass it in the form of array
      )]
  );

console.log(parent2);

// const heading = React.createElement("h1",
// { id: "heading" }, //It gives attribute to the tag like id or anything
// "Hello world from React!") // Children

// console.log(heading) // --> it's an object. So, heading is an object and we are creating react element over here.
// //props: are the children and attributes that we are passing.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent2); //render is converting that object to h1 tag and putting it to html.
