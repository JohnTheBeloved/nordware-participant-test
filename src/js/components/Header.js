import React from "react";

export default class Header extends React.Component {
	constructor(){
		super();
		this.state = {headerCaption:"Nord Software"};
	}

	render(){
		let caption = this.state.headerCaption;
		return(
			<div className="header">
		      <div className="header-left">
		        <img alt="{caption}" className="header-logo" src="./logo.PNG"/>
		        <span className="header-text">{caption}</span>
		      </div>
		      
		    </div>
		)
	}

}