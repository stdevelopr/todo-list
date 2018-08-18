import React, { Component } from 'react';
import ListItem from './list_item';


// const TodoList = (props)=> {
// 	console.log(props);
// 	// const items = props.todos.map((item) =>{
// 		return(
// 			<div>ok</div>
// 		)
// 	};

// 	return (
// 		<div>
// 		{props.children}
// 		{items}
// 		</div>
// 	)
// }


// const TodoList = (props)=> {
// 	console.log(this.props)

// 	return (
// 		<div>
// 			Todoooooo
// 		</div>
// 	)
// }


// export default TodoList;


class TodoList extends Component {
	// const items = this.props.todo.map((todo) =>{
	// 	return(
	// 		<div>
	// 			<p>todo.item</p>
	// 		</div>
	// 	)
	// });

	render(){
		const items = this.props.todo.map((todo) =>{
			const str = todo.id.toString();
			return(
					<ListItem key={str} todo={todo}/>
			)
		});
		return(
			<div>
				<div className="count">
				    <p className="d-inline-block">List: </p>
				    <p id="count_tab" className="d-inline-block">All</p>
				    <p id="count" className="d-inline-block ml-2">{items.length}</p>
				    <p className="d-inline-block ml-1"> entries</p>
				</div>
				<table className="table">
				<tbody>
				{items}
				</tbody>
				</table>
			</div>
		);
	}
}

export default TodoList;