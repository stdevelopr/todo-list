import React, { Component } from 'react';

class ListItem extends Component {
	constructor(){
		super();
		this.url = 'https://richardturra.pythonanywhere.com'
	}

	//check ok button action
	okHandler = (e) => {
		var id = e.target.closest('tr').id;
		var count = document.getElementById("count").innerHTML;
		var todo = document.getElementById("todo_"+id).innerHTML;
		var origin = document.getElementById("modal_update").getAttribute("orig");
		fetch(this.url,{
	      	method: 'POST',
	      	headers: {
	        'Content-Type': 'application/x-www-form-urlencoded',
	        'CRUD': "UP",
	        'mode':'cors',
	      	},
	       	body: "id="+id+"&todo="+todo+"&status=true"
      	})
      	.then(r => r.text())
      	.then(res => {
      		if(res === 'success'){
      			document.getElementById(id).setAttribute('class','true');
      			if(origin === 'pending'){
      				document.getElementById(id).classList.add("d-none");
      				count--;
              		document.getElementById("count").innerHTML = count;
      			}
      		}
      	})
	}

	//edit button action
	editHandler = () => {
		document.getElementById("modal_input").setAttribute('value',this.props.todo.item);
		document.getElementById("modal_update").setAttribute('num',this.props.todo.id);
		document.getElementById("modal_update").setAttribute('status',this.props.todo.status);
		this.props.todo.status? document.getElementById("radio_completed").checked=true : document.getElementById("radio_pending").checked=true
	}

	//delete button action
	delHandler = (e) => {
		var count = document.getElementById("count").innerHTML;
		var id = e.target.closest('tr').id;
		fetch(this.url,{
	      	method: 'POST',
	      	headers: {
	        'Content-Type': 'application/x-www-form-urlencoded',
	        'CRUD': "DEL",
	        'mode':'cors',
	      	},
	       	body: "id="+id
      	})
      	.then(r => r.text())
      	.then(res => {
      		if(res === 'success'){
      			document.getElementById(id).classList.add("d-none");
      			count--;
              	document.getElementById("count").innerHTML = count;
      		}
      	}) 
	}

	//creates a new item. Receives a 'todo' object as props: {id:'id', todo:'todo', status:'status'}
	render(){
		var string_id = this.props.todo.id.toString();
		var btn_id = "ok_"+string_id;
		var todo_id = "todo_"+string_id;
		var edit_id = "edit_"+string_id;
		var del_id = "del_"+string_id;
		return(
			<tr id={this.props.todo.id} className={this.props.todo.status? "true" : "false"}>
				<th className="ok"><button id={btn_id} className="ok btn btn-warning" onClick = {this.okHandler}><i className="fas fa-check"></i></button></th>
				<th id={todo_id}>{this.props.todo.item}</th>
				<th className="edit"><button id={edit_id} type="button" className="btn btn-primary edit" onClick = {(e)=> this.editHandler(e)} data-toggle="modal" data-target="#EditModal"><i className="fas fa-edit"></i></button></th>
				<th className="delete"><button id={del_id} className="delete btn btn-danger" onClick = {(e) => this.delHandler(e)}><i className="fas fa-backspace"></i></button></th>
			</tr>
		);
	}
}

export default ListItem;
