var courseList = [
	{courseName: "Master Reactjs"},
	{courseName: "Master Angularjs"},
	{courseName: "Master JavaScript and jQuery"},
	{courseName: "Browser Developer Tools"},
	{courseName: "Master Knockoutjs"},
	{courseName: "Advance jQuery for Designers & Developer"},
	{courseName: "Amazom EC2 LAMP"},
	{courseName: "Node js"}
];

var ReviewControl = React.createClass({
	getInitialState: function(){
		return {name:'', feedback:'', course: '', reviews:[]};
	},
	submitReview:function(el){
		el.preventDefault();
		this.state.reviews.push({name: this.state.name, feedback: this.state.feedback, course: this.state.course});
		this.setState({name:'', feedback:''});
	},
	onChangeName:function(el){
		this.setState({name: el.target.value});
	},
	onChangeFeedback:function(el){
		this.setState({feedback: el.target.value});
	},
	onChangeCourse: function(el){
		this.setState({course: el.target.value});
	},
	render: function(){
		var options = this.props.list.map(function(d){
			return <option key={d.courseName} value={d.courseName}>{d.courseName}</option>;
		});

		return (<div>
				<form onSubmit = {this.submitReview}>
					<label> Name </label>
					<input type="text" placeholder="Enter Your Name" value={this.state.name} onChange={this.onChangeName}/>
					<br/> <br/>
					<label>Feedback</label>
					<textarea placeholder="Enter Your Feedback" value={this.state.feecback} onChange={this.onChangeFeedback}></textarea>
					<br/><br/>
					<select onChange = {this.onChangeCourse}>
						{options}
					</select>
					<br/><br/>
					<input type='submit' value='submit'/>
				</form>
				<ReviewCollection reviews = {this.state.reviews}/>
			</div>)
	}
});

var ReviewCollection = React.createClass({
	render:function(){
		var review = this.props.reviews.map(function(d){
			return <Review course={d.course} name={d.name} feedback={d.feedback}/>
		});

		return <div>{review}</div>;
	}
});

var Review = React.createClass({
	render: function(){
		return (<div>
					<span>Name: </span> {this.props.name}
					<br/>
					<span>Course: </span> {this.props.course}
					<br/>
					<span>Feedback: </span> {this.props.feedback}
				</div>);
	}
});

ReactDOM.render(<ReviewControl list={courseList} />, document.getElementById('divContainer'));