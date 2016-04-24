var courseList = [
	{courseName: "Master Reactjs"},
	{courseName: "Master Angularjs"},
	{courseName: "Master JavaScript and jQuery"},
	{courseName: "Browaer Developer Tools"},
	{courseName: "Master Knockoutjs"},
	{courseName: "Advance jQuery for Designers & Developer"},
	{courseName: "Amazom EC2 LAMP"},
	{courseName: "Node js"}
];

var Courses = React.createClass({
	onSelect: function (i) {
		console.log("You Clicked: " + this.props.list[i].courseName);
	},

	render: function() {
		return (
			<div>
				We have following courses to offer
				{this.props.list.map(function(course, i){
					return (
						<div onClick={this.onSelect.bind(this, i)} key = {i}> {course} </div>
					);
				}, this )}
			</div>
		);
	}
});

var coursesElement = <Courses list = {courseList}/>;

ReactDOM.render(coursesElement, document.getElementById('divContainer'));