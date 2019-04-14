import React, { Component } from 'react'

class Result extends Component {
  
  render() {

    const display = () =>{
      console.log(this.props.error)
      if(this.props.error === 200){
        return (
          <React.Fragment>
            <div className="p-2">
              Temperature : {this.props.temp} </div>

              <div className="p-2">
              City : {this.props.city} </div>

              <div className="p-2">
              Humidity : {this.props.humid} </div>

              <div className="p-2">
              Conditions : {this.props.desc} </div>
          </React.Fragment>  
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
