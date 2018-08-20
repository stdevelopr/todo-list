import React, { Component } from 'react';
import ListItem from './list_item';


class TodoList extends Component {
	
	render(){
		//map the items and return a new item element
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
				    <p id="count" className="d-inline-block ml-3">{items.length}</p>
				    <p className="d-inline-block ml-1"> entries</p>
				</div>
				<table className="table">
				<tbody id="tbody" orig='all'>
				{items}
				</tbody>
				</table>
			</div>
		);
	}
}

export default TodoList;