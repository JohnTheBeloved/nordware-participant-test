import React from "react";

import NewParticipantForm from "./NewParticipantForm"
import Table from "./Table"

export default class Body extends React.Component{
	
	render(){
		return(
			<div className="body">
		      <div className="body-header">List of participants</div>
		      <NewParticipantForm addParticipant={this.props.addParticipant}/>
		     <Table rows={this.props.participants} deleteParticipant={this.props.deleteParticipant}/>
		    </div>
		);
	}
}