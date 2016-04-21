var Course = React.createClass({
	setFocus: function(){
		this.refs.textCourse.getDOMNode().focus();
	},
	render: function(){
		return (
			<div>
				<input type="text" ref="textCourse"/>
				<br/><br/>
				<input type="button" value="Focus the Course input" onClick={this.setFocus}/>
			</div>
		);
	}
});

ReactDOM.render(<Course/>, document.getElementById('divContainer'));