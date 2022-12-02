import React, {Component} from 'react';
import {Size} from './helpers.js';
import {Welcome,Auth,Login,Register,Thanks} from './views.js'
import {Review1,Review2,Review3,Review4,Review5} from './review.js'
import {Profile} from './profile.js'

const size = Size()

class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bodySty = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px 0',
    }
    const bodyContainer = {
      width: (size.width < 600 ) ? '90vw' : '50vw'
    }


    return (
      <div className="body" style={bodySty}>
        <div style={bodyContainer}>
        {(this.props.view==='welcome')?<Welcome changeView={this.props.changeView}/>:null}
        {(this.props.view==='auth')?<Auth changeView={this.props.changeView}/>:null}
        {(this.props.view==='login')?<Login changeView={this.props.changeView}/>:null}
        {(this.props.view==='register')?<Register changeView={this.props.changeView}/>:null}
        {(this.props.view==='rev1')?<Review1 changeView={this.props.changeView}/>:null}
        {(this.props.view==='rev2')?<Review2 changeView={this.props.changeView}/>:null}
        {(this.props.view==='rev3')?<Review3 changeView={this.props.changeView}/>:null}
        {(this.props.view==='rev4')?<Review4 changeView={this.props.changeView}/>:null}
        {(this.props.view==='rev5')?<Review5 changeView={this.props.changeView}/>:null}
        {(this.props.view==='thanks')?<Thanks changeView={this.props.changeView}/>:null}
        {(this.props.view==='profile')?<Profile changeView={this.props.changeView}/>:null}
        </div>
      </div>
    )
  }
}

export default Body;