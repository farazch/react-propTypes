import ExampleComponent from "./ExampleComponent";
import ExampleComponent2 from "./ExampleComponent2";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <ExampleComponent name="John" age={15} />
      <br />
      <ExampleComponent2 renderable={"Hi"} />
      {/* passing an object {{a:1}} */}
    </div>
  );
}
