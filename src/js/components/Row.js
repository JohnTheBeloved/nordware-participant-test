import React from "react";

import ValidateUtils from "../utils/Validate.js"

export default class Row extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			fullName:props.fullName,
			email:props.email,
			phoneNumber:props.phoneNumber
		}

		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleChange(e){
		if(e.target.className.indexOf('invalid')){
			e.target.className += 'invalid'
		}

		if(ValidateUtils.isEmpty(e.target.value)){
			e.target.className = e.target.className.replace("invalid",'');
		}
		
		this.setState({[e.target.name]: e.target.value});
	}

	handleEdit(e){
		this.setState({oldValue :{fullName:this.props.fullName, email:this.props.email,phoneNumber:this.props.phoneNumber}});
		this.setState({edit:true});
		e.preventDefault();
	}

	handleCancel(e){
		this.setState(this.state.oldValue);
		this.setState({edit:false});
		e.preventDefault();
	}

	handleDelete(e){
		console.log(e);
		this.props.deleteParticipant();
		e.preventDefault();
	}

	handleSubmit(event) {
		if(!ValidateUtils.isEmpty(this.state.fullName) && 
			!ValidateUtils.isEmpty(this.state.email) &&
			!ValidateUtils.isEmpty(this.state.phoneNumber)){
			this.setState({edit:false});
		}else{

		}
	}

	render(){
		return(
				<tr>
		            <td className="input-display" ><input className={this.state.edit ? 'show' : 'hide'} type="text" name="fullName" placeholder="Full name" value={this.state.fullName} onChange={this.handleChange.bind(this)} /><div className={!this.state.edit ? 'show' : 'hide'}>{this.state.fullName}</div></td>
			        <td className="input-display" ><input className={this.state.edit ? 'show' : 'hide'} type="text" name="email" placeholder="E-mail address"  value={this.state.email} onChange={this.handleChange.bind(this)} /><div className={!this.state.edit ? 'show' : 'hide'}>{this.state.email}</div></td>
			        <td className="input-display"><input className={this.state.edit ? 'show' : 'hide'} type="text" name="phoneNumber" placeholder="Phone number"  value={this.state.phoneNumber} onChange={this.handleChange.bind(this)} /><div className={!this.state.edit ? 'show' : 'hide'}>{this.state.phoneNumber}</div></td>
			        <td className="input-display">
			        	<a className={this.state.edit ? 'hide' : 'show'} href="" onClick={this.handleEdit}><i className="icon ion-edit"  ></i></a>
			        	<a className={this.state.edit ? 'hide' : 'show'} href="" onClick={this.handleDelete}><i className="icon ion-trash-b"  ></i></a>
			        	<input className={this.state.edit ? 'show button-blue pull-right' : 'hide button-blue pull-right'} onClick={this.handleSubmit.bind(this)} type="submit" value="Save" />
			        	<input className={this.state.edit ? 'show text-blue pull-right margin-15-right' : 'hide  text-blue pull-right margin-15-right'}  onClick={this.handleCancel.bind(this)} type="button" value="Cancel" />
			        </td>
			    </tr>
		);

	}
}