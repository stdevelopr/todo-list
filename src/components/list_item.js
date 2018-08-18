 import React, { Component } from 'react';

// const TodoItem = ({item}) =>{
// 	return(
// 			<div>
// 				<h3>{item.todo}</h3>
// 				<div>
// 					{item.status}
// 				</div>
// 			</div>
// 	)
// }

// export default TodoItem;


class ListItem extends Component {


	okHandler = () => {
		console.log('check ok')
	}

	editHandler = () => {
		document.getElementById("modal_input").setAttribute('value',this.props.todo.item);
		document.getElementById("modal_update").setAttribute('num',this.props.todo.id);
		document.getElementById("modal_update").setAttribute('status',this.props.todo.status);
		this.props.todo.status? document.getElementById("radio_completed").checked=true : document.getElementById("radio_pending").checked=true
	}

	delHandler = () => {
		console.log('check delete')
	}
	// const items = this.props.todo.map((todo) =>{
	// 	return(
	// 		<div>
	// 			<p>todo.item</p>
	// 		</div>
	// 	)
	// });

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
				<th className="edit"><button id={edit_id} type="button" className="btn btn-primary edit" onClick = {this.editHandler} data-toggle="modal" data-target="#EditModal"><i className="fas fa-edit"></i></button></th>
				<th className="delete"><button id={del_id} className="delete btn btn-danger" onClick = {this.delHandler}><i className="fas fa-backspace"></i></button></th>

			</tr>
		);
	}
}

export default ListItem;
