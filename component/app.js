(function (React) {
	const todos = [
		{
			id: 1,
			title: 'learn react',
			completed: true
		},
		{
			id: 2,
			title: 'learn vue',
			completed: false
		},
		{
			id: 3,
			title: 'complete todo example',
			completed: true
		}
	]
	window.App =  class extends React.Component {
		constructor () {
			super()	
			this.state = {
				todos,
				checkedStatus: false
			}
		}
		render () {
			return (
				<div>
					<section className="todoapp">
						<header className="header">
							<h1>todos</h1>
							<input className="new-todo" placeholder="What needs to be done?" onKeyDown={ this.handleKeyDown } autoFocus />
						</header>
						{/* This section should be hidden by default and shown when there are todo */}
						<section className="main">
							<input id="toggle-all" className="toggle-all" type="checkbox" />
							<label htmlFor="toggle-all">Mark all as complete</label>
							<ul className="todo-list">
								{/* These are here just to show the structure of the list items */}
								{/* List items should get the className `editing` when editing and `completed` when marked as completed */}
								{
									// <li className="completed">
									// 	<div className="view">
									// 		<input className="toggle" type="checkbox" defaultChecked />
									// 		<label>Taste JavaScript</label>
									// 		<button className="destroy"></button>
									// 	</div>
									// 	<input className="edit" defaultValue="Create a TodoMVC template" />
									// </li>
									// <li>
									// 	<div className="view">
									// 		<input className="toggle" type="checkbox" />
									// 		<label>Buy a unicorn</label>
									// 		<button className="destroy"></button>
									// 	</div>
									// 	<input className="edit" defaultValue="Rule the web" />
									// </li>
								}
								{ this.getTodoList() }
							</ul>
						</section>
						{/* This footer should hidden by default and shown when there are todos */}
						<footer className="footer">
							{/* This should be `0 items left` by default */}
							<span className="todo-count"><strong>0</strong> item left</span>
							{/* Remove this if you don't implement routing */}
							<ul className="filters">
								<li>
									<a className="selected" href="#/">All</a>
								</li>
								<li>
									<a href="#/active">Active</a>
								</li>
								<li>
									<a href="#/completed">Completed</a>
								</li>
							</ul>
							{/* Hidden if no completed items are left ↓ */}
							<button className="clear-completed">Clear completed</button>
						</footer>
				</section>
				<footer className="info">
						<p>Double-click to edit a todo</p>
						{/* Remove the below line ↓ */}
						<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
						{/* Change this out with your name and url ↓ */}
						<p>Created by <a href="http://todomvc.com">you</a></p>
						<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
				</footer>
				</div>
			)
		}

		getTodoList () {
			return this.state.todos.map(todo => {
				return (
					<li key={ todo.id } className={todo.completed ? 'completed' : ''}>
						<div className="view">
							<input className="toggle" type="checkbox" defaultChecked={ todo.completed ? true : false} />
							{/*
							<label>{ todo.title }</label>
							  */}
							<button onKeyDown={ this.handleDeleteInfo }></button>
						</div>
						<input className="edit" defaultValue="Create a TodoMVC template" />
					</li>
				)
			})
		}

		handleKeyDown = event => {
			let {target, keyCode} = event
			if (keyCode !== 13) {
				return
			}
			let inputText = target.value.trim()
			console.log(inputText)
			if (!inputText.length) {
				return
			}
			this.state.todos.push({
				id: this.state.todos.length + 1,
				title: target.value.trim(),
				completed: false
			})
			this.setState({
				todos: this.state.todos
			})
			target.value = ''
		}

		handleDeleteInfo () {
			console.log(event)
		}
		
	}

})(React);
