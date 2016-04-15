var element = <div>&copy; skillbackery.com</div>

// ReactDOM.render(element, document.getElementById('divContainer'));

var Courses = React.createClass({
	render: function(){
		return (
			<p>
				Course Name: <input type="text" placeholder="Course Name Here" />!
				{this.props.copy} skillbackery.com
			</p>
		);
	}
});

var courseElement = <Courses copy = {String.fromCharCode(169)}/>;

ReactDOM.render(courseElement, document.getElementById('divContainer')); 