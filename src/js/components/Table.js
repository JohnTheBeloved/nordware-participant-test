import React from "react";

import Row from "./Row"

export default class Table extends React.Component{

	render(){
		 
		return(
			 <table>
		        <thead>
		          <tr>
		            <th className="input-margin input-display">Name &nbsp;&nbsp; <i className="icon ion-android-arrow-down"></i></th>
		            <th className="input-margin input-display">E-mail address</th>
		            <th className="input-margin input-display">Phone number</th>
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