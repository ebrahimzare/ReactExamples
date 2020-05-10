
import React, { Component } from 'react';
import axios from 'axios';
class Employees extends Component {
     constructor() {
      super();
		
      this.state = {
         employees:[ ],
         error:''
      }
   }
   componentDidMount(){
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => { this.setState({
          employees:response.data.data
      })
      }).catch(error=>{
          this.setState({
            error:"an error accured"
          })
      })
   }

        render(){
        const {employees, error}=this.state
        let data=employees.length? employees.map((employee)=> <p>{employee.employee_name}</p>):<p> {this.error}</p>
          return(
            <div>
                <p>employess</p>
                {data}
              
            </div>
          )
        }
        

}

export default Employees