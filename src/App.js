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

  handleEmployeeSort = event => {
    event.preventDefault();
    const employeesToSort = this.state.employees;
    let compareFunction;
    const sortCriteria = event.target.innerText;
    switch (sortCriteria) {
      case "name":
        compareFunction = (e1, e2) => this.compareTwoStrings(e1.name, e2.name);
        break;
      case "department":
        compareFunction = (e1, e2) => this.compareTwoStrings(e1.department, e2.department);
        break;
      case "email":
        compareFunction = (e1, e2) => this.compareTwoStrings(e1.email, e2.email);
        break;
      case "id":
        compareFunction = (e1, e2) => (e1.id - e2.id);
        break;
      default:
        console.log("Not Supported");
    }
    employeesToSort.sort(compareFunction);
    this.setState({ employees: employeesToSort });
  }

  handleInputChange = event => {
    this.setState({ searchedName: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.searchedName && this.state.searchedName.trim().length) {
      const filteredEmployee = employees
        .filter(employee => employee.name === this.state.searchedName);
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
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>);
  }
}

export default App;
