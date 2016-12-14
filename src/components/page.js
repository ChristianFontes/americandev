import React, { Component } from 'react';
import $ from 'jquery';
import 'fullpage.js';

//import '../node_modules/fullpage.js/dist/jquery.fullpage.css';
import '../css/Page.css';

class page extends Component {
  componentDidMount() {
    	$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#f2f2f2', '#4bbfc3', '#7baabe', '#ccddff']
			});
		});
  }

  render() {
    return (
	<div id="fullpage">
        <div className="section active" id="section1">
          <h1>fullPage.js</h1>
        </div>
        <div className="section" id="section2">
          <div className="slide ">
            <h1>Simple Demo</h1>
          </div>
          <div className="slide active">
            <h1>Only text</h1>
          </div>
          <div className="slide">
            <h1>And text</h1>
          </div>
          <div className="slide">
            <h1>And more text</h1>
          </div>
        </div>
        <div className="section" id="section3">
          <h1>No wraps, no extra markup</h1>
        </div>
        <div className="section" id="section4">
          <h1>Just the simplest demo ever</h1>
        </div>
    </div>
    );
  }

}

export default page;