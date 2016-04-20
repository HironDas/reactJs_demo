var Courses = React.createClass({
	propTypes:{
		published: React.PropTypes.bool.isRequired
	},
	getInitialState: function(){
		return {sold: "Not Sold"};
	},
	getDefaultProps: function(){
		return {
			date: new Date("2015-02-14"), 
			launch: " April first week", 
			course: "Master ReactJS",
			author: "Skillbakery"
		};
	},
	render:function(){
		return (
			<p>
				Course Name: {this.props.course.toString()}
				<br/>
				the Date is {this.props.date.toString()}
				<br/>
				This course is {this.state.sold}
				<br/>
				Course will launch in {this.props.launch}
				<br/>
				Author is {this.props.author}
				<br/>
				Studens {this.props.students}
				<br/>
				Course is {this.props.published.toString()}
				<br/>
			</p>
			);
	}
});

var courseElement = <Courses date={new Date()} published={false} author={"Skillbakery.com"} students={0}/>;

ReactDOM.render(courseElement, document.getElementById('divContainer'));