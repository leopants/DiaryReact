import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation.js';
import Quote from './components/Quote';
import Entry from './components/Entry';
import History from './components/History';
import fire from './fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:'',
      entry:''
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log('sfubdfjbd')
  }

  getQuote = (quoteText) => {
    console.log(quoteText);
    this.setState({ quote: quoteText });
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navigation class={"text-center"}/>
        </div>
        <div style={{display:'flex'}}>
          <div style={{width:'30%'}}>
            <History currentQuote={this.state.quote}/>
          </div>
          <div>
            <Quote getQuote={this.getQuote}/>
            <Entry onSubmit={this.onSubmit}/>
          </div>
        </div>
      </div>
    );
}
}

export default App;
