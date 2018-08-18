import React, {Component} from 'react';
import '../css/styles.css';


class Header extends Component {
	constructor(props){
		super();
		this.state = {
			name:props.name
		}
	}

	allHandler = () => {
		//set the origin of modal_update button to all
		document.getElementById("modal_update").setAttribute('orig','all');
		//atualize counter reference name
		document.getElementById("count_tab").innerHTML= "&nbspAll"
		//make the request
		fetch('http://127.0.0.1:5000',
		   	{method: 'POST',
	  		headers: {"CRUD": "ALL"}
	  		})
		   .then(response => response.json())
		   .then(parsedJSON => {
		   	document.getElementById("count").innerHTML = Object.keys(parsedJSON).length;
		   	this.props.request({data:parsedJSON, tab:'all'})
		   })
		   .catch(error => console.log('error', error));

	}

	completedHandler = () => {
		//set the origin of modal_update button to completed
		document.getElementById("modal_update").setAttribute('orig','completed');
		//atualize counter reference name
		document.getElementById("count_tab").innerHTML= "&nbspCompleted"
		//make the request
		fetch('http://127.0.0.1:5000',
		   	{method: 'POST',
	  		headers: {"CRUD": "COMPLETED"}
	  		})
		   .then(response => response.json())
		   .then(parsedJSON => {
		   	document.getElementById("count").innerHTML = Object.keys(parsedJSON).length;
		   	this.props.request({data:parsedJSON, tab:'completed'})})
		   .catch(error => console.log('error', error))
	}

	pendingHandler = () => {
		//set the origin of modal_update button to pending
		document.getElementById("modal_update").setAttribute('orig','pending');
		//atualize counter reference name
		document.getElementById("count_tab").innerHTML= "&nbspPending"
		//make the request
		fetch('http://127.0.0.1:5000',
		   	{method: 'POST',
	  		headers: {"CRUD": "PENDING"}
	  		})
		   .then(response => response.json())
		   .then(parsedJSON => {
		   	document.getElementById("count").innerHTML = Object.keys(parsedJSON).length;
		   	this.props.request({data:parsedJSON, tab:'pending'})})
		   .catch(error => console.log('error', error))
	}

	createHandler(){
		console.log(document.getElementById("todo").value)
	}

	render(){
		return (
			// Header Navbar 
			<div>
				<nav className="navbar navbar-expand-md navbar-light bg-dark fixed-top">
					 <a className="navbar-brand text-light" href=""><img src="../images/sense_logo.png" alt=''/>TODO LIST</a>
  
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
					    <ul className="navbar-nav">
					      <li className="nav-item active">
					       <button id='all' className="m-1 btn btn-info" onClick = {this.allHandler}>ALL</button>
					      </li>
					      <li className="nav-item">
					        <button id='completed' className="m-1 btn btn-info" onClick = {this.completedHandler}>COMPLETED</button>
					      </li>
					      <li className="nav-item">
					         <button id='pending' className="m-1 btn btn-info" onClick = {this.pendingHandler}>PENDING</button>
					      </li>
					    </ul>

						<div className="container text-center">
						  <div className="d-inline-block mt-3"><input type="text" id="todo" placeholder="Enter a new todo..."/></div>
						  <button id='create' className="btn btn-success" onClick = {this.createHandler}>CREATE</button>				  
						</div>
					</div>
				</nav>
			</div>
	    )
	}
}

export default Header;


