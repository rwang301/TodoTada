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
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <DisplayContent test={this.props.apiResponse} />
        {console.log(this.state.apiResponse, "bitch you played!!!")}
      </div>
    );
  }
}

export default App;
