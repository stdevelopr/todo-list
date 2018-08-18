import React,{Component} from 'react';
import ReactDOM from 'react-dom'; 

// import JSON from './db.json';

// //COMPONENTS

import Header from './components/header';
import TodoList from './components/todo_list';
import Modal from './components/modal';


class App extends Component{

	state={
		todos:[],
		tab:''
	};

	
	// constructor(){
	// 	super();
	// 	this.state={
	// 		Todo:"alguma coisa"
	// 	};
	// 	let dae = "pl";
	// }
	on_alert(v){
		alert(v);
	};


	

	onNewRequest(newRequest){
		console.log(newRequest.data);
		var data = []
		newRequest.data.map((item)=>{
			return(data.push(item))
		})
		this.setState({
			todos:data,
			tab:newRequest.tab
		})
	}


	render(){
		console.log('render');
		return(
			<div>
				<Header request={this.onNewRequest.bind(this)}/>
				<div className="container">
				<Modal/>
				<TodoList todo={this.state.todos}/>
				</div>
			</div>
		)
	}
}



ReactDOM.render(<App/>, document.querySelector("#root"));

// <div>
// 	<Header name={"teste"} number={23} fun={on_alert}/>
// 	<TodoList/>
// 	</div>,