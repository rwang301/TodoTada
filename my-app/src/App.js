import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuAppBar from "./components/MenuAppBar";
import DisplayContent from "./DisplayContent";

// function App() {
//   return (
//     <div className="App">
//       <DisplayContent />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <DisplayContent test={this.props.apiResponse} />
      </div>
    );
  }
}

export default App;
