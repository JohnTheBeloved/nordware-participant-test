import React from "react";

import Row from "./Row"

export default class Table extends React.Component{

	constructor(props){
		super(props);
		this.state = {kk:"oo"}
	}

	getSortOrder(columnName){
		if(columnName === "fullName"){
			this.setState({sortNameAsc:(!this.state.sortNameAsc)});
			return !this.state.sortNameAsc;
		}else if(columnName === "email"){
			this.setState({sortEmailAsc:(!this.state.sortEmailAsc)});
			return !this.state.sortEmailAsc;
		}else if(columnName === "phoneNumber"){
			this.setState({sortNumberAsc:(!this.state.sortNumberAsc)});
			return !this.state.sortNumberAsc;
		}
	}

	render(){
		 
		return(
			 <table>
		        <thead>
		          <tr>
		            <th className="input-margin input-display">Name  
		            	<span>
			            	<a href="" className={this.state.sortNameAsc ? "show":"hide"} onClick={(e) => {e.preventDefault();this.props.sort("fullName",this.getSortOrder("fullName"))}} >
				            	<i className="icon ion-android-arrow-up"></i>
				            </a>
							<a href="" className={!this.state.sortNameAsc ? "show":"hide"} onClick={(e) => {e.preventDefault();this.props.sort("fullName",this.getSortOrder("fullName"))}} >
				            	<i className="icon ion-android-arrow-down"></i>
				            </a>
			            </span>
		            </th>
		            <th className="input-margin input-display" >E-mail address
		            	<span>
			            	<a href="" className={this.state.sortEmailAsc ? "show":"hide"} onClick={(e) => {e.preventDefault();this.props.sort("email",this.getSortOrder("email"))}} >
				            	<i className="icon ion-android-arrow-up"></i>
				            </a>
							<a href="" className={!this.state.sortEmailAsc ? "show":"hide"} onClick={(e) => {e.preventDefault();this.props.sort("email",this.getSortOrder("email"))}} >
				            	<i className="icon ion-android-arrow-down"></i>
				            </a>
			            </span>
		            </th>
		            <th className="input-margin input-display">Phone number
		            	<span>
			            	<a href="" className={this.state.sortNumberAsc ? "show":"hide"} onClick={(e) => {e.preventDefault();this.props.sort("phoneNumber",this.getSortOrder("phoneNumber"))}} >
				            	<i className="icon ion-android-arrow-up"></i>
				            </a>
							<a href="" className={!this.state.sortNumberAsc ? "show":"hide"} onClick={(e) => {e.preventDefault();this.props.sort("phoneNumber",this.getSortOrder("phoneNumber"))}} >
				            	<i className="icon ion-android-arrow-down"></i>
				            </a>
			            </span>
		            </th>
		            <th className="input-margin input-display"></th>
		          </tr>
		        </thead>
		        <tbody>
		        	{this.props.rows.map( (row, index) => <Row key={row.id} fullName={row.fullName} email={row.email} phoneNumber={row.phoneNumber} deleteParticipant={ () => {this.props.deleteParticipant(index)}}/>)}
		        	
		        </tbody>
		        <tfoot></tfoot>
		      </table>
		);

	}
}