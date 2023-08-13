import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {counter: 0}

  increase = () => {
    const randomNum = () => Math.floor(Math.random() * 100)

    this.setState(prevState => ({counter: prevState.counter + randomNum()}))
  }

  render() {
    const {counter} = this.state
    const value = counter % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-con">
        <div className="card-con">
          <h1 className="heading">Count {counter}</h1>
          <p className="description">Count is {value}</p>
          <button className="btn" type="button" onClick={this.increase}>
            Increment
          </button>
          <p className="term">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
