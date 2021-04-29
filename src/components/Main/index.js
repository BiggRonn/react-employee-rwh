import React from 'react'
import axios from 'axios'
import SearchForm from '../SearchForm'
import EmployeeTable from '../EmployeeTable'


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
handleInputChange = async (e) => {
    const input = e.target.value;
    console.log(input);
    await this.setState({search: input})
    const newArray = this.state.employees.filter(employee => 
        employee.name.first.toLowerCase().startsWith(this.state.search))
    
    this.setState({filteredEmployees: newArray.sort((a,b) => a.name.first.toLowerCase().localeCompare(b.name.first.toLowerCase()))})

}


    render() {return (
        <div>
            <SearchForm handleInputChange={this.handleInputChange} search={this.state.search}/>
            <EmployeeTable employees= {this.state.filteredEmployees}/>
        </div>
    )}
}

export default Main
