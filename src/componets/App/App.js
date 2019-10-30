import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  clickButton,
  listItems 
} from '../../actions'
import Form from './Form/Form';
import List from './List/List';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state ={
      name: '',
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Form />
          <List />
        </header>
      </div>
    );
  }

}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  items : store.itemsListState.items
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    clickButton, 
    listItems}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
