import React, { Component } from "react";
import "../App.css";
import secret from "../secret.json";

export default class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      stringToCheck: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log("did mount");
    
  }
  async sendToAnalyze() {
    try {
      const response = await fetch("https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",
      {method: "POST", 
      headers: {
        "Content-Type":  "application/x-www-form-urlencoded",
        "X-RapidAPI-Host": secret["X-RapidAPI-Host"],
        "X-RapidAPI-Key": secret["X-RapidAPI-Key"]
      }, 
      body: `text=${this.state.stringToCheck}`
    }
      ); const data = await response.json();
      this.setState({
        response: data.type
      });
      console.log(data);
    } catch(err) {
      console.log(err.message);
    }
  }
  handleChange(e) {
    this.setState({
      stringToCheck: e.target.value
    })
  }
  handleSubmit() {
    this.sendToAnalyze();
  }
  render() {    
    {this.state.response === "positive" && (document.body.style.backgroundColor = 'green')}
    {this.state.response === "negative" && (document.body.style.backgroundColor = 'red')}
    {this.state.response === "neutral" && (document.body.style.backgroundColor = 'lightgrey')}
    return (
      <div>
        <textarea onChange={this.handleChange}></textarea>
        <button onClick={this.handleSubmit}>Submit</button>
        {this.state.response === "positive" && (<h1>:)</h1>)}
        {this.state.response === "negative" && (<h1>:(</h1>)}
        {this.state.response === "neutral" && (<h1>:|</h1>)}
      </div>
    );
  }
}
