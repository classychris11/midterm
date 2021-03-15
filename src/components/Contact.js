import React, {Component} from 'react'



export class Contact extends Component {

  constructor(props) {
    super(props)

    this.state ={
      username: '',
    
    }
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = event => {
      alert(`Thanks, ${this.state.username} for your comments! We will get back to you shortly!`)
      event.preventDefault()
    }
  
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <h3 className="center">Contact Us</h3>
      
      <h6 className="center">For those who wish to schedule an appointment, please refer to the form below. We hope to see you very soon!</h6>
    <br/>
      <label className="white">Username</label>
      <input type="text" value={this.state.username}onChange={this.handleUsernameChange}/>
    
    
      <label className="white">Email</label>
      <input type="text"/>
  
    
      <label className="white">Comments</label>
      <textarea cols="30" rows="10"></textarea>

      <button color="teal">Submit!</button>
    
    </form>
   )
  }
}
  
export default Contact
