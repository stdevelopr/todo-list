import React,{Component} from 'react';
import ReactDOM from 'react-dom'; 
import Header from './components/header';
import TodoList from './components/todo_list';
import Modal from './components/modal';


class App extends Component{

	state={
		todos:[],
		tab:''
	};

	
	componentDidMount() {
	 	document.getElementById("all").click();
	 	//close the navbar when clicked outside
	 	window.addEventListener("click",function(event){
	 		var clicked_elem = event.target.textContent;
	 		var todo_val = document.getElementById('todo').value;
	 		var collapse = document.getElementsByClassName('navbar-collapse');
	 		var oppened = collapse[0].classList.contains('show');
	 		var condition = clicked_elem === 'CREATE' && todo_val === '';
	 		if(oppened && event.target.nodeName !== 'INPUT' && !condition){
	 			document.getElementsByClassName('navbar-toggler')[0].click()
	 		}
	 	});
 	}

 	//receive data from the header component
	onNewRequest(newRequest){
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