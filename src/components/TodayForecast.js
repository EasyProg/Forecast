/**
 * Created by Михаил on 05.06.2017.
 */
import React, {Component,PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import '../App.css';
const style = {
    height: 200,
    width:  200,
    margin: 20,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    verticalAlign: 'middle',
    justifyContent: 'center',
    alignItems: 'center',
    font:'20pt arial',
    color:'darkcyan',
    letterSpacing:'2px',
    backgroundColor:'lightcyan'
};
export default class TodayForecast extends Component {
    static propTypes = {
        img: PropTypes.string.isRequired,
        temp: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    };

    render() {
        if (this.props.temp) {
            return (
                <div>
                    <Paper zDepth={5} circle={true} style={style}>
                        <div>{this.props.location}</div>
                        <img src={this.props.img} width="100px" height="100px" className="img"/>
                        <div className="circleTemp">{this.props.temp + '°'}</div>
                    </Paper>
                    <div className="weatherStatus">{this.props.text}</div>
                </div>
            )
        }
        else return (<div>Loading...</div>)


    }
}