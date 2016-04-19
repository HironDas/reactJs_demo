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
	render: function(){

		return (
			<div>
				We have following Courses to offer
				<div>
					<CourseCollection data={this.props.list}/>
				</div>

			</div>

		);
	}
});

var CourseCollection = React.createClass({
	render: function(){

		var course = this.props.data.map(function(d){
				return <Course courseName = {d.courseName}/>
			});

		return(<div>{course}</div>);
	}
})

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