var divTag =<div class='course'>Display Data via React</div>

// ReactDOM.render(divTag, document.getElementById('divContainer'));

//classes
var Courses = React.createClass({
	render: function(){
		return (
			<p>
			Course Name: <input type='text' placeholder='Course Name Here'/>!
			The Data is {this.props.date.toString()}
			</p>
			);
	}
});

var courseElement = <Courses/>;
var properties={};
properties.date = new Date();
courseElement.props = properties;
ReactDOM.render(courseElement, document.getElementById('divContainer'));