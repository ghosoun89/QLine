import React, { Component } from 'react';
import '../style/App.css';
import { Button } from '@material-ui/core';
import pinfo from '../style/phoneinfo.png';


  // A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
  // In this section of the component is the main part since it help to show datas in our DOM to be used and visualize for our users
  // since that the main purpose of an JSX , adopting styles with app.css has been implemented
class DownloadApp extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div class="ctv" id="t1">
        <div class="page33" id="p1">
          <section class="icon33"><span class="title1nodeomn"><img src={pinfo} width="700px" height="700px" style={{ marginTop: "-300px", marginLeft: "200px" }} /></span>
            <span class="hint1" style={{ marginTop: "-600px", marginLeft: "1000px", width: "500px" }}><h1 className="How">Get in the queue before you arrive. Get the </h1><h1 className="How" style={{ color: "#e33a2e" }}>queuing app.</h1>
              <Button className="google" style={{ width: "270px", height: "85px", marginLeft: "-50px", marginTop: "20px" }} href="https://play.google.com"></Button>
              <Button className="apple" style={{ width: "250px", height: "85px", marginLeft: "20px", marginTop: "20px" }} href="https://www.apple.com/lae/ios/app-store/"></Button>
            </span></section>
        </div>
      </div>

    )
  }
}

export default DownloadApp;

