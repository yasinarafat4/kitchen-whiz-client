import React from "react";
import Pdf from "react-to-pdf";
import { VscFilePdf } from "react-icons/vsc";

const Blog = () => {
  const ref = React.createRef();

  return (
    <div className="m-4">
      {/* PDF download function */}
      <div className="text-end">
        <Pdf targetRef={ref} filename="blog.pdf">
          {({ toPdf }) => (
            <button className="btn mt-2" onClick={toPdf}>
              Download Questions As PDF <VscFilePdf />
            </button>
          )}
        </Pdf>
      </div>

      <div className="p-3" ref={ref}>
        <h2 className="text-center fw-bold mt-3 mb-5">
          {" "}
          Frequently Asked Questions
        </h2>
        <h4>
          1. Tell us the differences between uncontrolled and controlled
          components.
        </h4>

        <div className="ms-4">
          <p>
            Uncontrolled components and controlled components are two different
            approaches for handling form data in React. The differences between
            uncontrolled and controlled components are:
          </p>

          <p>
            # Uncontrolled components are those in which the form data is
            handled by the DOM itself, rather than being controlled by React. In
            this case, the form fields are not bound to any state, and the data
            is handled by the DOM.{" "}
          </p>

          <p>
            # Controlled components are those in which the form data is handled
            by React state. In this case, the value of each form field is bound
            to a corresponding state value, and any changes made to the form
            data are handled by updating the state.
          </p>
        </div>

        <h4>2. How to validate React props using PropTypes?</h4>

        <div className="ms-4">
          <p>
            PropTypes is a library that allows developers to define the data
            types of each prop that are passed to a React component.
          </p>

          <p>
            PropTypes can be used to validate the data that is being passed to a
            component, ensuring that the data is of the correct type and format.
            To use PropTypes, we need to import the library and define the
            propTypes object in the component, specifying the data types of each
            prop.
          </p>
        </div>

        <h4>3. Tell us the difference between nodejs and express js.</h4>
        <div className="ms-4">
          <p>
            Node.js and Express.js are two different technologies used for
            building web applications with JavaScript. The key difference
            between nodejs and express js is:
          </p>

          <p>
            # Node.js is a runtime environment that allows developers to run
            JavaScript code outside of a browser, making it possible to use
            JavaScript for server-side programming.
          </p>

          <p>
            # Express.js is a web application framework built on top of Node.js
            that provides a set of tools and features for building web
            applications.
          </p>
        </div>
        <h4>
          4. What is a custom hook, and why will you create a custom hook?
        </h4>
        <div className="ms-4">
          <p>
            A custom hook is a reusable function in React that allows developers
            to extract and reuse stateful logic from a component.{" "}
          </p>

          <p>
            Custom hooks can be used to share stateful logic between different
            components or to separate concerns within a component. It allows for
            more modular and reusable code, making it easier to maintain and
            scale React applications.
          </p>

          <p>
            Developers may create custom hooks for a variety of reasons,
            including reducing code duplication, improving code organization,
            and improving the readability and maintainability of code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
