var CustomerCollection = React.createClass({
	getInitialState: function() {
		return {customer: []};
	},
	componentDidMount: function() {
		var url = "http://services.odata.org/v4/Northwind/Northwind.svc/Customers";

		$.get(url, function(data){
			var customerList = data.value;

			if(this.isMounted()){
				this.setState({customer: customerList});
			}
		}.bind(this));

	},
	render: function(){
		return (<Customers customer={this.state.customer}/>)
	}

});


var Customers = React.createClass({
	render:function() {
		var customer  = this.props.customer.map(function(d){
		 return (<Customer CustomerId = {d.CustomerID} CompanyName = {d.CompanyName} ContactName={d.ContactName} />)
		});
		return (
			<div>{customer}</div>
		);
	}
});


var Customer = React.createClass({
	render:function() {
		return (
			<div>
				<span>Customer Id </span> {this.props.CustomerId}<br/>
				<span>Company Name </span> {this.props.CompanyName}<br/>
				<span>Contact Name </span> {this.props.ContactName}<br/><hr/>
			</div>
		);
	}
});


ReactDOM.render(<CustomerCollection/>, document.getElementById("divContainer"));