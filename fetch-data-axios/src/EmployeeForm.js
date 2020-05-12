import React, { Component } from 'react';
import axios from 'axios'

class EmployeeForm extends Component {
    constructor() {
        super();
        this.state = {
          name: '',
          salary:'',
          age: ''
        };
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
      handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://dummy.restapiexample.com/api/v1/create', this.stat).then(respone=>{
          if(response.status===200){
            alert("ok")
          }
        })
        .catch(error=>console.log(error))

      }
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          
          <input  type='text'name='name' onChange={this.myChangeHandler}/>
          <input  type='text'name='salary' onChange={this.myChangeHandler}/>
          <input  type='text'name='age' onChange={this.myChangeHandler}/>
          <button typr='submit'>submit</button>
          
          </form>
        );
      }
    }
export default EmployeeForm;