import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { 
  listItems,
  clickButton } from '../../../actions'

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }

  handleChangeName(e){
    const { clickButton } = this.props
    let name = e.target.value
    this.setState({name})
    clickButton(name)
  }

  addItem(item){
    const { clickButton, listItems, items } = this.props
    listItems([ ...items, { id: items.length + 1, name: item }])
    this.setState({name: ''})
    clickButton('')
    
  }

  render() {
    const{ newValue } = this.props
    const{ name } = this.state
    return (
      <div>

        <h3 style={{ margin: '0'}}> FORM </h3> 

        <p>{ newValue } </p>
        <label>NAME</label>
        <div style={{display:'flex', alignItems: 'center'}}>
          <input 
            value={name}  
            onChange={this.handleChangeName.bind(this)} 
          /> 
          <button onClick={() => this.addItem(name)} > Salve </button>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  items : store.itemsListState.items
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ 
    clickButton, 
    listItems
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)