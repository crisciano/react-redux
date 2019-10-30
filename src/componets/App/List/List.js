import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listItems } from '../../../actions'

class List extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  } 

  removeItem(id){
    const { items, listItems } = this.props
    listItems(items.filter( item => item.id !== id ))
  }

  render() {
    const{ items } = this.props
    // const{} = this.state
    return (
      <div>
        <h3 style={{ margin: '0'}}> LISTA </h3>
        <ul style={{ margin: '0'}}>
          {
            items.map( item => (
              <li key={item.id} >{item.name} <button onClick={() => this.removeItem(item.id) } > remove </button> </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  items : store.itemsListState.items
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ 
    listItems
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)