import { Component } from 'react'
import './App.css';
import { CartList } from './components/cart_list/cart_list.component.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cats: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ cats: users }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <CartList cats={this.state.cats}></CartList>        
      </div>
    );
  }
}

export default App;
