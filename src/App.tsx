import "./App.css";
import Checkbox, { CheckboxInput } from "./components/checkbox";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Checkbox Input</h1>
        <div className="wrapper">
          <div className="checkbox__input">
            <Checkbox></Checkbox>
          </div>
          <div className="checkbox__input">
            <Checkbox value={true}></Checkbox>
          </div>
          <div className="checkbox__input">
            <Checkbox defaultValue={true}></Checkbox>
          </div>
          <div className="checkbox__input">
            <Checkbox onChange={(newCheck) => console.log(newCheck)}></Checkbox>
          </div>
          <div className="checkbox__input">
            <CheckboxInput></CheckboxInput>
          </div>
          <div className="checkbox__input">
            <CheckboxInput value={true}></CheckboxInput>
          </div>
          <div className="checkbox__input">
            <CheckboxInput defaultValue={true}></CheckboxInput>
          </div>
          <div className="checkbox__input">
            <CheckboxInput
              onChange={(newCheck) => console.log(newCheck)}
            ></CheckboxInput>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
