import React, { Component } from 'react'
import Result from './Result';


class Input extends Component {

  constructor(props){
    super(props)

    this.state  = {
      data : " ",
      temp :"",
      city :"",
      humid :"",
      desc :"",
      error :0,
    }
  }

  getWeather = async (e) =>{

    e.preventDefault()
    const city=e.target.elements.city.value
    let country=e.target.elements.country.value
    if(country !== ""){
      country = ","+country; 
    }

    const API_KEY = '3e1469086c97ddbabe843d3eb8300713';

    if(city!==""){

      const json  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}${country}&appid=${API_KEY}&units=metric`)
      const data = await json.json();
      

      //console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}${country}&appid=${API_KEY}&units=metric`)
      if(data.cod !== "404"){

        this.setState({
          data : data,
          temp :data.main.temp,
          city :data.name +" , " +data.sys.country,
          humid :data.main.humidity,
          desc :data.weather[0].description,
          error :data.cod,
        })      
      } else {
        this.setState({
          error : data.cod,
        })

      }

    } else {
      alert("Enter a valid city");
    }
  }

  render() {
    return (
      <div className="card shadow-lg " >
        <form className="form-inline" onSubmit={this.getWeather}>
          
            <label className="sr-only" >Name</label>
            <input className="form-control mb-2 mr-sm-2" type="text" name="city" placeholder="city.." />
          
            <label className="sr-only" >Name</label>
            <input className="form-control mb-2 mr-sm-2" type="text" name="country" placeholder="country.." />
            
            <button type="submit" className="mb-2 btn btn-primary">Get weather</button>
        </form>
        <div className="card-body">
        <Result temp = {this.state.temp}
          city = {this.state.city}
          humid = {this.state.humid}
          desc = {this.state.desc}
          error = {this.state.error}
          />
          </div>
      </div>
    )
  }
}




export default Input
