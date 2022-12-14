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
    this.state = { view: 'welcome', username: undefined, profile: undefined }
    this.handleClick=this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleClick(view,profile=undefined){
    this.setState({view,profile})
  }

  handleChange(username){
    this.setState({username})
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

    const srch = {
      ...FLEX_BASE
    }

    const spc = {
      marginLeft: '5px',
      marginRight: '5px',
      cursor: 'pointer',
    }

    const hm = {
      fontSize: '24pt',
      cursor: 'pointer',
    }

    return (
    <>
      <div className="menu" style={menuSty}>
        <div style={itemSty}>Grade My <span style={plusStyle}>+</span>eacher</div>
        <div style={itemSty}>
            <div style={srch}><div style={spc}>Search:</div> <input type='text'></input><div style={spc} onClick={()=>this.handleClick('search1')}>&#x1f50d;</div></div>
        </div>
        <Button text='Write a Review' next="auth" changeView={this.handleClick} />
        {(this.state.username)
          ? <div>Welcome {this.state.username}</div>
          : <Button text='Sign In' next="login" changeView={this.handleClick}/>
        }
        <div style={hm} onClick={()=>this.handleClick('welcome')}>&#8962;</div>
      </div>
      <Body view={this.state.view} profile={this.state.profile} handleChange={this.handleChange} changeView={this.handleClick} />
    </>
    )
  }
}
export default Menu;