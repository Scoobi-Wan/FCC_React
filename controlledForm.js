class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    // Bind this for each method
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    // Handler for the input box
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Handler for the Submit! button
    // preventDefault keeps form from refreshing page
    event.preventDefault();
    this.setState({
      submit: this.state.input
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
          <input value={this.state.input} onChange={this.handleChange} />
          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}
        <h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
