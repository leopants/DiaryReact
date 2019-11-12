import React, { Component } from 'react';

class Quote extends Component {
    constructor(props) {
      super(props);
      this.state = {
        quotesData: [],
        quote:"",
        author: "",
      };
    }
    
    componentDidMount() {
      fetch('http://quotes.rest/qod.json')
      .then(response => response.json())
      .then(data => {
          this.setState({quotesData: data.contents}, 
            () => console.log(this.state.quotesData));
          this.setState({quote: this.state.quotesData.quotes[0].quote});
          this.setState({author: this.state.quotesData.quotes[0].author});
        this.sendQuote();
        });
    }

    sendQuote = () => {
        const quoteInfo = this.state.quote;
        this.props.getQuote(quoteInfo);
    }

    render() {
        return(
        <div>
            <p style={{padding:'10px'}}>"{this.state.quote}"</p>
            <p>-{this.state.author}</p>
        </div>
        );
    }
  }

export default Quote;
