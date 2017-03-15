import React from "react";

import ValidateUtils from "../utils/Validate.js"

export default class NewParticipantForm extends React.Component{
	
	constructor(props){

		super(props);
		this.state = {fullName:"",email:"",phoneNumber:""};
	    this.handleNameChange = this.handleNameChange.bind(this);
	    this.handleNumberChange = this.handleNumberChange.bind(this);
	    this.handleEmailChange = this.handleEmailChange.bind(this);
		this.addUser = this.addUser.bind(this);

	}	

	  handleNameChange(e) {
	  	this.setState({nameIsDirty:true});
	  	let newValue = e.target.value;
	    let newErrorValue = '';
	    //validate stuff here
	    if(newValue === '') {
	      newErrorValue = 'Field is empty';
	      this.setState({emailIsDirty:false});
	    }

	    this.setState({
	      name: newValue,
	      nameError: newErrorValue
	    });

	    if(newErrorValue === ''){
	    	e.target.className = e.target.className.replace("invalid",'');
	    }else{
	    	e.target.className += 'invalid'
	    }

	    this.setState({fullName:newValue});
	  }


 	handleNumberChange(e) {
 		this.setState({numberIsDirty:true});
	    let newValue = e.target.value;
	    let newErrorValue = '';
	    if(ValidateUtils.isEmpty(newValue)) {
	      newErrorValue = 'Field is empty';
	      this.setState({emailIsDirty:false});
	    }

	    this.setState({
	      number: newValue,
	      numberError: newErrorValue
	    });

	    if(newErrorValue === ''){
	    	e.target.className = e.target.className.replace("invalid",'');
	    }else{
	    	e.target.className += 'invalid'
	    }

	    this.setState({phoneNumber : e.target.value});
	  }


	handleEmailChange(e) {
		this.setState({emailIsDirty:true});
		let newValue = e.target.value;
		let newErrorValue = '';
		
		if(ValidateUtils.isEmpty(newValue)) {
		  newErrorValue = 'Field is empty';
		  this.setState({emailIsDirty:false});
		}
		if(ValidateUtils.isValidEmail(newValue)){
			e.target.className = e.target.className.replace("invalid",'');
		}else{
	    	newErrorValue = 'Email is invalid';
	    	if(e.target.className.indexOf('invalid')){
				e.target.className += 'invalid';
			}
	    }


		this.setState({
		  email: newValue,
		  emailError: newErrorValue
		});
		console.log(this.state.emailError);


	}

	addUser(e) {
		console.log(this.state.emailError);
	    e.preventDefault();
	    console.log(this.state.emailError);
	    if(this.state.nameError || this.state.numberError || this.state.emailError) {
	      this.setState({showErrors: true});
	      return;
	    }

	    this.props.addParticipant(this.state.fullName, this.state.email, this.state.phoneNumber);
		this.setState({fullName:"",email:"",phoneNumber:"",emailIsDirty:false,numberIsDirty:false,nameIsDirty:false});
	  
	}


	render(){
		return(
 
				<form className="add-new-form" onSubmit={this.addUser}>
			        <div className="input-margin input-display" >
			        	<input type="text" name="fullName" placeholder="Full name" value={this.state.fullName} onChange={this.handleNameChange} required/>
			        	<span className={this.state.showErrors ? 'showError' : 'hide'}>{this.state.nameError}</span>
			        </div>
			        <div className="input-margin input-display" >
			        	<input type="text" name="email" placeholder="E-mail address"  value={this.state.email} onChange={this.handleEmailChange} required/>
			        	<span className={this.state.showErrors ? 'showError' : 'hide'}>{this.state.emailError}</span>
			        </div>
			        <div className="input-margin input-display">
			        	<input  type="text" name="phoneNumber" placeholder="Phone number"  value={this.state.phoneNumber} onChange={this.handleNumberChange} required/>
			        	<span className={this.state.showErrors ? 'showError' : 'hide'}>{this.state.numberError}</span>
			        </div>
			        <div className="input-margin input-display" ><input className={((this.state.nameIsDirty && this.state.numberIsDirty && this.state.emailIsDirty) && (!this.state.nameError || !this.state.numberError || !this.state.emailError)) ? 'button-blue pull-right' : 'pull-right'} type="submit" value="Add new" /></div>
		        </form>
		      

		);

	}

}