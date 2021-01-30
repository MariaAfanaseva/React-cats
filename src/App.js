import { Component } from 'react'
import './App.css';
import { CartList } from './components/cart_list/cart_list.component.jsx';

class App extends Component {
  constructor(props) {
    super(props);

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

  render() {
    const { cats, searchValue } = this.state;
    const filteredCats = cats.filter(cat => 
      cat.username.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (
      <div className="App">
        <input type='search' placeholder='search cats'
        onChange={e => this.setState({ searchValue: e.target.value })}>
          
        </input>
        <CartList cats={filteredCats}></CartList>        
      </div>
    );
  }
}

export default App;
