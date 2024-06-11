const h2 = React.createElement(
  "h2",
  { className: "sub-heading" },
  "Hello React JS"
);
/* Now only creating this will not render on our web-page, 
  to do this we need to use ReactDOM library which is a part of reactjs library.
  we need to create a new element every time when we want to update something in that particular element.
*/

// First create root using ReactDOM library, this will return the element that you have passed as an argument in its constructor function.
const root = ReactDOM.createRoot(document.querySelector("#root"));
// Now root object is created so we will use render method of react-dom to render our component on web-page.
// Creating children also
const container = React.createElement("div", { className: "container" }, [
  h2,
  React.createElement("section", {}, [
    React.createElement(
      "p",
      {},
      "The library for web and native user interfaces"
    ),
  ]),
]);

// Render the container which includes both the h2 and the section
root.render(container);

// After using this you can see your object on the page, and it's working fine as well.
