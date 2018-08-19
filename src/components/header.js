import React, {Component} from 'react';
import '../css/styles.css';


class Header extends Component {
	constructor(props){
		super();
		this.state = {
			name:props.name
		}
		this.url = 'https://richardturra.pythonanywhere.com';
	}


	//All button action
	allHandler = () => {
		//set the origin of modal_update button to all
		document.getElementById("modal_update").setAttribute('orig','all');
		//set the origin of tbody table to all
		document.getElementById("tbody").setAttribute('orig','all');
		//atualize counter reference name
		document.getElementById("count_tab").innerHTML= "&nbspAll"
		//make the request
		fetch(this.url, {
			method: 'POST',
	  		headers: {"CRUD": "ALL"}
	  		})
		   .then(response => response.json())
		   .then(parsedJSON => {
		   	document.getElementById("count").innerHTML = Object.keys(parsedJSON).length;
		   	this.props.request({data:parsedJSON, tab:'all'})
		   })
		   .catch(error => console.log('error', error));

	}

	//Completed button action
	completedHandler = () => {
		//set the origin of modal_update button to completed
		document.getElementById("modal_update").setAttribute('orig','completed');
		//set the origin of tbody table to completed
		document.getElementById("tbody").setAttribute('orig','completed');
		//atualize counter reference name
		document.getElementById("count_tab").innerHTML= "&nbspCompleted"
		//make the request
		fetch(this.url,	{
			method: 'POST',
	  		headers: {"CRUD": "COMPLETED"}
	  		})
		   .then(response => response.json())
		   .then(parsedJSON => {
		   	document.getElementById("count").innerHTML = Object.keys(parsedJSON).length;
		   	this.props.request({data:parsedJSON, tab:'completed'})})
		   .catch(error => console.log('error', error))
	}

	//Pending button action
	pendingHandler = () => {
		//set the origin of modal_update button to pending
		document.getElementById("modal_update").setAttribute('orig','pending');
		//set the origin of tbody table to pending
		document.getElementById("tbody").setAttribute('orig','pending');
		//atualize counter reference name
		document.getElementById("count_tab").innerHTML= "&nbspPending"
		//make the request
		fetch(this.url,	{
			method: 'POST',
	  		headers: {"CRUD": "PENDING"}
	  		})
		   .then(response => response.json())
		   .then(parsedJSON => {
		   	document.getElementById("count").innerHTML = Object.keys(parsedJSON).length;
		   	this.props.request({data:parsedJSON, tab:'pending'})})
		   .catch(error => console.log('error', error))
	}

	//Create button action
	createHandler =() => {
		var todo = document.getElementById("todo").value;
		fetch(this.url, {
			method: 'POST',
	      	headers: {
	        'Content-Type': 'application/x-www-form-urlencoded',
	        'CRUD': "CREATE",
	        'mode':'cors',
	      	},
	       	body: "todo="+todo
      	})
      	.then(res => {
      		//if the response is an error string
	      	if (res.headers.get("content-type") === 'text/html; charset=utf-8'){
	      		res.text().then(text=> alert(text));
	      	}
	      	//if the response is a JSON
	      	else{
	      		//refresh the tab content
	      		document.getElementById('todo').value = ''
	      		var orig = document.getElementById('tbody').getAttribute("orig");
	      		if (orig === 'all'){
	      			document.getElementById("all").click();
	      			setTimeout(() => window.scrollTo(0,document.body.scrollHeight), 300);
	      		}
	      		else if (orig === 'completed'){
	      			alert('todo created!')
	      		}
	      		else if (orig === 'pending'){
	      			document.getElementById("pending").click();
	      			setTimeout(() => window.scrollTo(0,document.body.scrollHeight), 300)
	      		}
      		}
      	})
	}

	render(){
		return (
			// Header Navbar 
			<div>
				<nav className="navbar navbar-expand-md navbar-light bg-dark fixed-top">
					 <a className="navbar-brand text-light"><img src="sense_logo.png" alt=''/>T<img src="react.png" alt=''/>DO LIST<h6>Powered by React</h6></a>
  
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
					    <ul className="navbar-nav">
					      <li className="nav-item active">
					       <button id='all' className="m-1 btn btn-info" onClick = {this.allHandler}>All</button>
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
						  <button id='create' className="btn btn-success ml-1" onClick = {this.createHandler}>CREATE</button>				  
						</div>
						<a className="text-light" href="https://github.com/stdevelopr/React_TODOList"><img src="github.png" alt=''/></a>

					</div>
				</nav>
			</div>
	    )
	}
}

export default Header;


