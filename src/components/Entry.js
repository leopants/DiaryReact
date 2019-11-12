import React, { Component } from 'react'

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    this.setState({body: ''});
  }

  render() {
    return (
      <div>
        <form>
          <div style={{display:'block'}}>
            <textarea name="body" 
                      placeholder="Express Yourself!!" 
                      value={this.state.body}
                      onChange={this.onChange}/>
          </div>
          <div>
            <button type="submit" style={{borderRadius:'100%'}} onSubmit={this.onSubmit}>+</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Entry;