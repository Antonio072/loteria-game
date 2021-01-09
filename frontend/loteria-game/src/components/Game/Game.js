import React, { Component } from 'react'
import { socketConnector } from '../../utils/api';

export default class Game extends Component {

    constructor(props) {
        super(props);
        socketConnector((err, time) => {
            console.log('Connecting to Socket Server')
            this.setState({ 
              time 
            })
        });
      }
      
      state = {
        time: 'clock turned OFF right now',
        timestamp : 'no timestamp yet'
      };
    
      getCurrentTimestamp = () => {
        const timestamp = this.state.time 
        this.setState({
          timestamp
        })
      }
    
      render() {
        return (
           <div className="timer"> 
                <p className="clock">Clock: {this.state.time}</p>
                <button className="getTimeBtn" onClick={this.getCurrentTimestamp}>Time Now!</button>
                <p className="timeNow">Current time: {this.state.timestamp}</p>
            </div>
        )
      }
    }
