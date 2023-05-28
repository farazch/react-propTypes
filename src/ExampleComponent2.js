import propTypes from "prop-types";

const ExampleComponent2 = ({ renderable }) => {
  return renderable;
};

ExampleComponent2.proptypes = {
  renderable: propTypes.node
};

export default ExampleComponent2;
