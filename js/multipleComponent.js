var Courses = React.createClass({
	render: function(){
		return (
			<div>
				We have following Courses to offer
				<div>
					<Course courseName = "Master Reactjs"/>
					<Course courseName = "Master Angularjs"/>
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

var coursesElement = <Courses/>;
ReactDOM.render(coursesElement, document.getElementById('divContainer'));