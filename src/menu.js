import React, {Component} from 'react';
import Body from './Body.js'
import Button from './button.js'
import {Size} from './helpers.js';

const size=Size();

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { view: 'welcome' }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(view){
    this.setState({view});
  }

  render() {
    const menuSty = {
        ...FLEX_BASE,
        flexDirection: (size.width<600)?'column':'row',
        backgroundColor: 'black',
        padding: '10px 25px',
        color: 'white',
    }

    const plusStyle={
        color: 'red',
        fontSize: '24pt',
        marginLeft: '5px',
        fontWeight: 'bold',
        marginBottom: '8px',
    }

    const itemSty = {
      ...FLEX_BASE,
      marginBottom: '15px',
    }

    return (
    <>
      <div className="menu" style={menuSty}>
        <div style={itemSty}>Grade My <span style={plusStyle}>+</span>eacher</div>
        <div style={itemSty}>
            <div>Search: <input type='text'></input></div>
        </div>
        <Button text='Write a Review' next="auth" changeView={this.handleClick} />
        <Button text='Sign In' next="login" changeView={this.handleClick} />
      </div>
      <Body view={this.state.view} changeView={this.handleClick} />
    </>
    )
  }
}
export default Menu;