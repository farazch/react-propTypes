import propTypes from "prop-types";

const ExampleComponent = ({ name, age }) => {
  return `Age of ${name} is ${age + 5}`;
};

ExampleComponent.proptypes = {
  name: propTypes.string,
  age: propTypes.number
};

export default ExampleComponent;
