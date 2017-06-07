/**
 * Created by Михаил on 07.06.2017.
 */
/**
 * Created by Михаил on 05.06.2017.
 */
import React, {Component,PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import '../App.css';
import sun from '../img/sun.jpg'
import moon from '../img/moon.jpg'
const style = {
    height: 100,
    width:  100,
    margin: 50,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    verticalAlign: 'middle',
    justifyContent: 'center',
    alignItems: 'center',
    font:'10pt, Parkavenue, cursive',
    color:'darkcyan',
    letterSpacing:'1.5px',
    fontWeight:'400'
};
export default class DaysForecast extends Component {
    static propTypes = {
        datas:PropTypes.array.isRequired,
    };
    render() {
        if (this.props.datas&&this.props.datas[0])
        return (
            <div className="container">
                {
                    this.props.datas.map((item, index) => {
                        return (
                            <div>
                             <p className="date_format_date">{item.date}</p>
                             <p className="date_format">{item.day}</p>
                            <Paper zDepth={5} circle={true} style={style}>
                                    <div>{item.location}</div>
                                    <img  src={item.condition.icon} width="30px" height="30px"/>
                                    <div className="container">
                                    <img src={sun} width="15px" height="15px"/>
                                    {item.temp_c +'°'}
                                    </div>
                                    <div className="container">
                                    <img src={moon} width="15px" height="15px"/>
                                    {item.min_temp_c + '°'}
                                    </div>
                            </Paper>
                                <p className="date_format">{item.condition.text}</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
        )
        else return (<div>Loading...</div>)
    }

}