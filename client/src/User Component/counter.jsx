import React, { Component } from 'react';
import '../style/App.css';
import { Grid, Button } from '@material-ui/core';
import $ from 'jquery';

// A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
// In this section of the component is the main part since it help to show datas in our DOM to be used and visualize for our users
// direct styling is possible as well in any component , videos, nav bar and direct calling of components is one of the good benefits using react js
// since that the main purpose of an JSX , adopting styles with app.css has been implemented
class Counter extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        $('.count, .count1, .count2').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
        });
    }

    render() {
        return (
            <Grid className="mainDp1">
                <Grid className="videoComp">
                    <div>
                        <Grid className="about" style={{ marginLeft: "200px", marginTop: "200px" }}>
                            <h1 className="title1" style={{ width: "600px" }}><span style={{ color: "#aa1256", marginLeft: "10px" }}>QLine</span><span> saved people time by</span></h1>
                            <p style={{ marginTop: "20px" }}>
                                Qline solves one of the most irritating daily problems which is standing in line by offering an automated smart mobile queuing app
                                to better manage traffic/flow and save people a lot of time.
                        </p>
                        </Grid>
                    </div>
                </Grid>
                <Grid className="videoComp">
                    <div >
                        <Grid className="videoComp1">
                            <div id="shiva1"><span className="count">10</span></div>
                            <div id="shiva2"><span className="count2">365</span></div>
                            <div id="shiva"><span className="count1">8760</span></div>
                        </Grid>
                    </div>
                </Grid>
            </Grid>

        );
    }
}

export default Counter;

