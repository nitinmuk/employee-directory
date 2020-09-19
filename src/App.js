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

  handleInputChange = event => {
    this.setState({ searchedName: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(`searchedName = ${this.state.searchedName}`);
    if(this.state.searchedName && this.state.searchedName.trim().length) {
      const filteredEmployee = employees
      .filter(employee => employee.name === this.state.searchedName);
      this.setState({employees : filteredEmployee});      
    }
    else {
      this.setState({employees : employees});      
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
              employees={employees.map(employee => employee.name)}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <EmployeeTable employees={this.state.employees}></EmployeeTable>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>);
  }
}

export default App;
