import { Component } from 'react';
import './App.css';
import Comment from './components/comment';

class App extends Component {
	state = {
		comments: [
			{
				name: 'Yazan',
				email: 'YazanNeedsalot@yahoo.com',
				date: new Date(2021, 9, 1, 12, 15, 0),
				massage: 'Hello, how are you?'
			},
		],
		newComment: {
			name: '',
			email: '',
			massage: ''
		}
	};
	addComment = event => {
		event.preventDefault();
		console.log('adding comment');

		// const newComment = {
		// 	name: 'Maria',
		// 	email: 'MariaNoHave@yahoo.com',
		// 	date: new Date(10, 10, 2021),
		// 	massage: 'Sorry, I am out of what you need'
		// };
		const newComment = {...this.state.newComment, date: new Date()}
		this.setState({
			 comments: [ ...this.state.comments, newComment ],
			 newComment: {name: '', email:'', massage:''}
			 });
	};

	removeComment = comment => {
		let list = this.state.comments;
		list = list.filter(c =>c !== comment)
	this.setState({comments: list})
	}

	writeName = event => {
		const {name, value} = event.target;
	
		this.setState({ newComment: { ...this.state.newComment, [name]: value } });
	};

	render() {
		return (
			<div className="App">
				<h1>Hello</h1>
				{this.state.comments.map((comments, indice) => (
					<Comment key={indice} 
					name={comments.name} 
					email={comments.email} 
					date={comments.date}
					onRemove={this.removeComment.bind(this, comments)}>

						{comments.massage}
					</Comment>
					
				))}

				<form method="post" onSubmit={this.addComment} className="newComment"> 
					<h2>Add Comment</h2>
					<div>
						<input
							type="text"
							name="name"
							value={this.state.newComment.name}
							onChange={this.writeName}
							required
							placeholder="Add your name"
						/>
					</div>
					<div>
						<input
							type="email"
							name="email"
							onChange={this.writeName}
							value={this.state.newComment.email}
							
							placeholder="Add your email"
							required
						/>
					</div>
					<div>
						<textarea
						 name="massage" 
						 value={this.state.newComment.massage}
						 onChange={this.writeName}
						 required
						 rows="4" />
					</div>
					<button className="addComment_btn" type="submit">Add comment</button>
				</form>
			</div>
		);
	}
}

export default App;
