import React from 'react';
import Col from './components/Col';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Row from './components/Row';
import SearchForm from './components/SearchForm';
import EmployeeTable from './components/EmployeeTable';
import employees from './utils/employees.json';

class App extends React.Component {

  state = {
    employees,
    searchedName: "",
  };

  /**
   * compares string1 with string2 and
   * returns 0, 1 or -1 so that strings
   * can be sorted lexicographically  
   * @param {first string to compare} string1 
   * @param {second string to compare} string2 
   */
  compareTwoStrings(string1, string2) {
    if (string1 === string2) {
      return 0;
    }
    else if (string1 < string2) {
      return -1;
    }
    else {
      return 1;
    }
  }
  /**
   * event handler to sort employees array stored in component state
   * based on the column clicked by the user.
   * @param {event to sort data based on current event column} event 
   */
  handleEmployeeSort = event => {
    event.preventDefault();
    const employeesToSort = this.state.employees;
    let compareFunction;
    const sortCriteria = event.target.innerText;
    switch (sortCriteria) {
      case "Name":
        compareFunction = (e1, e2) => this.compareTwoStrings(e1.name, e2.name);
        break;
      case "Department":
        compareFunction = (e1, e2) => this.compareTwoStrings(e1.department, e2.department);
        break;
      case "Email ID":
        compareFunction = (e1, e2) => this.compareTwoStrings(e1.email, e2.email);
        break;
      case "Employee ID":
        compareFunction = (e1, e2) => (parseInt(e1.id) - parseInt(e2.id));
        break;
      default:
        console.log("Not Supported");
    }
    employeesToSort.sort(compareFunction);
    this.setState({ employees: employeesToSort });
  }

  /**
   * event handler to handle the search textbox change event
   * it just stored the new text entered by user in component state.
   * @param {search textbox change event} event 
   */
  handleInputChange = event => {
    this.setState({ searchedName: event.target.value });
  };

  /**
   * handles the event of search submission i.e.
   * filters employees array based on current name searched.
   * It will keep those employees where name is exact match
   * or partial match.
   * @param {search submit event} event 
   */
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.searchedName && this.state.searchedName.trim().length) {
      const filteredEmployee = employees
        .filter(employee => employee.name.includes(this.state.searchedName));
      this.setState({ employees: filteredEmployee });
    }
    else {
      this.setState({ employees: employees });
    }
  };

  render() {
    return (<div>
      <Header />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              employees={employees.map(employee => { return { name: employee.name, id: employee.id } })}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <EmployeeTable
              employees={this.state.employees}
              handleEmployeeSort={this.handleEmployeeSort}
              colNames={Object.keys(employees[0])}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>);
  }
}

export default App;
