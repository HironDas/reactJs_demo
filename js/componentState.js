var Courses = React.createClass({
	propTypes: function(){
		published: React.Prototypes.bool.isRequired
	},
	getInitialState: function(){
		return { sold: "Not Sold"};
	},

	getDefaultProps: function(){
		return {
			date: new Date('2015-02-14'), 
			launch: " April First Week"
		};
	},

	render: function() {
		return(
			<p>
			 	Course Name: <input type='text' placeholder='Course Name Here' />!
			<br/>
			  	the Date is {this.props.date.toString()}
			<br/>
				This course is {this.state.sold}
			<br/>
				Course will Launch in {this.props.launch}
			<br/>
			</p>
			 );

	}
});

var courseElement = <Courses published={false}/>;
// var properties = {};
// properties.date = new Date();
// properties.launch=;
// courseElement.props = properties;

ReactDOM.render(courseElement, document.getElementById('divContainer'));