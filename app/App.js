const React = require('react');
const ReactDOM = require('react-dom');

const $ = require('jquery');

const PersonList = require('./PersonList');

const App = React.createClass({
  getInitialState () {
    return {
      people: []
    }
  },

  componentDidMount () {
    // http://swapi.co/api/people/
    $.get('http://swapi.co/api/people/', data => {
    console.log(data);
    this.setState({
      people: data.results;
    })
    });
  },
  


  _handleCardClick (name, e) {
    alert(name);
  },

  render () {
    return (
      <div>
      {!this.state.people.length ? (
        <div style={{ position: 'fixed', background: 'red', color: 'white'}}
      ) : null }
      <PersonList people={this.state.people} onCardClick={this._handleCardClick} />
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));