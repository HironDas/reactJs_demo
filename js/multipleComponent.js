var courseList = [
	{courseName: "Master Reactjs"},
	{courseName: "Master Angularjs"},
	{courseName: "Master JavaScript and jQuery"},
	{courseName: "Browaer Developer Tools"},
	{courseName: "Master Knockoutjs"},
	{courseName: "Advance jQuery for Designers & Developer"},
	{courseName: "Amazom EC2 LAMP"}
];

var Courses = React.createClass({
	render: function(){

		var course = this.props.list.map(function(d){
			console.log(d);
						return <Course courseName = {d.courseName} />
					});
		console.log(course);

		return (
			<div>
				We have following Courses to offer
				<div>
					{course}
				</div>
			</div>

		);
	}
});

var Course = React.createClass({
	render: function(){
		return (
			<div>
				{this.props.courseName}
			</div>

		);
	}
});

var coursesElement = <Courses list={courseList}/>;
ReactDOM.render(coursesElement, document.getElementById('divContainer'));