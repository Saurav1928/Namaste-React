import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", style: { backgroundColor: "red", padding: "5px" } },
//   "React Element using Core React"
// ); // react element=> object

const JsxHeading = <h2 id="jsxHeading">React Element using JSX</h2>; // react element (js object)

const jsxHeading2 = <h3>I am Heading 2 and I have {JsxHeading}</h3>;

// React Compoment : Everything in React is component

const Title = () => <h1 id="jsxHeading">React functional component: Title</h1>;
const root = ReactDOM.createRoot(document.querySelector(".root"));
//after render ->it becomes HTML element
// root.render(heading);

const HeadingComponent = () => (
  <div>
    <h1>Rendering HeadingComponent</h1>
    {/* using other components inside components*/}
    {/* <Title /> */}
    {Title()}
    <h3>Namste react functional component : Heading3 </h3>
    {jsxHeading2}
  </div>
);

const reactelement = (
  <div>
    I am reactElement and I can have <HeadingComponent />{" "}
  </div>
);

//rendering react element
// root.render(jsxHeading);
// root.render(reactelement);

//rendering react functional component
root.render(<HeadingComponent />);
