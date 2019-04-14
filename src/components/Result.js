import React, { Component } from 'react'

class Result extends Component {
  
  render() {

    const display = () =>{
      console.log(this.props.error)
      if(this.props.error === 200){
        return (
          

          <table className="table table-lg table-hover">
  <tbody>
    <tr>
      <th scope="col p-2">Temperature</th>
      <th scope="col p-2">{this.props.temp}</th>
    </tr>

    <tr>
      <th scope="col">City</th>
      <th scope="col">{this.props.city}</th>
    </tr>

    <tr>
      <th scope="col">Humidity</th>
      <th scope="col">{this.props.humid}</th>
    </tr>

    <tr>
      <th scope="col">Conditions</th>
      <th scope="col">{this.props.desc}</th>
    </tr>

    </tbody>
        </table>
        )
      } else if(this.props.error === "404") {
          return(
            <p>City not found</p>
          )
      }
    }

  return (
    <div className="d-flex flex-column bd-highlight mb-3">
      {display()}
    </div>
  )



  }
}

export default Result
