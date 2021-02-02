import { Component } from 'react';
import './App.css';
import { CardList } from './components/card_list/card_list.component.jsx';
import { SearchBox } from './components/search_box/search_box.component.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      searchValue: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ cats: users }))
    .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  }
  
  render() {
    const { cats, searchValue } = this.state;
    const filteredCats = cats.filter(cat => 
      cat.username.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (
      <div className="App">
        <h1 className='title'> Super cats </h1>
        <SearchBox placeholder='Search'
          handleChange={this.handleChange}/>
        <CardList cats={filteredCats}></CardList>        
      </div>
    );
  }
}

export default App;
