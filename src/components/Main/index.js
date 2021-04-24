import React from 'react'
import axios from 'axios'
import SearchForm from '../SearchForm'


class Main extends React.Component{
state = {
    search: "",
    employees: [],
    filteredEmployees: []
}

componentDidMount(){
    this.getEmployees();
};

getEmployees = async () =>{
    const data = await axios.get("https://randomuser.me/api/?results=100")
    this.setState({employees: data.data.results})
    this.setState({filteredEmployees: data.data.results})
    

}
//anytime our search field changes we will get a new array of any matching names
handleInputChange = (e) => {
    const input = e.target.value;
    console.log(input);
    this.setState({search: input})
    const newArray = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(this.state.search) || employee.name.last.toLowerCase().includes(this.state.search) || employee.email.toLowerCase().includes(this.state.search) || employee.phone.toLowerCase().includes(this.state.search))
    this.setState({filteredEmployees: newArray})

}


    render() {return (
        <div>
            <SearchForm handleInputChange={this.handleInputChange} search={this.state.search}/>
            {this.state.filteredEmployees.map(employee => {
                return <p>{employee.name.first} {employee.name.last}</p>
            })}
        </div>
    )}
}

export default Main
