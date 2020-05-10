import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  render() {
    const currentTime = new Date()
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <label htmlFor='name-field'>Your name</label>
        <br />
        <input
          id='name-field'
          type='text'
          onChange={e => this.setState({name: e.target.value})}
          />
        <button onClick={() => alert('Good job!' + this.state.name)}>CLICK ME!!!</button>
        <br />
        <span>@Created by Vinh Le in 2020</span>
        <br />
        <span><i>Updated by Vinh Le on ${currentTime}</i></span>
      </div>
    );
  }
}

ReactDOM.render(<App name="Vinh" />, document.getElementById("app"))
