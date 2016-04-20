var SimpleMixin = {
	getDefaultProps: function(){
		return {name: "Skillbakery"};
	}
};

var Courses = React.createClass({
	mixins: [SimpleMixin],
	render: function(){
		return (
			<p>
				Course will be available on {this.props.name}
			</p>
		);
	}
});
var Students = React.createClass({
	mixins: [SimpleMixin],
	render: function(){
		return (
			<p>
				Students says I love {this.props.name}.
			</p>
		);
	}
})
ReactDOM.render(<Courses/>, document.getElementById('divContainer'));
ReactDOM.render(<Students/>, document.getElementById('divStudentContainer'));