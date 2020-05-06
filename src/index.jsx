import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <span>@Created by Vinh Le in 2020</span>
        <button onClick={() => alert('Good job!')}>CLICK ME!!!</button>
      </div>
    );
  }
}

ReactDOM.render(<App name="Vinh" />, document.getElementById("app"))
