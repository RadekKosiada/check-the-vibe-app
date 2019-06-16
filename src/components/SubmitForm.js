import React, { Component } from "react";
import "../App.css";
import secret from "../secret.json";

export default class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  componentDidMount() {
    console.log("did mount");
    this.sendToAnalyze();
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
      body: "text=great value in its price range!"
    }
      ); const data = await response.json();
      this.setState({});
      console.log(data);
    } catch(err) {
      console.log(err.message);
    }
  }
  render() {
    
    return (
      <div>
 
      </div>
    );
  }
}
