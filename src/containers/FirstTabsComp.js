/**
 * Created by Михаил on 05.06.2017.
 */
/**
 * Created by Михаил on 01.06.2017.
 */
import React, {Component,PropTypes} from 'react';
import {Tabs,Tab} from 'material-ui/Tabs';
import SearchBar from '../components/SearchBar';
import TodayForecast from '../components/TodayForecast';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {connect} from 'react-redux';
import TodayForecastInfo from '../components/TodayForecastInfo';
import DaysForecast from '../components/DaysForecast';
var _= require('lodash');
injectTapEventPlugin();
class FirstTabsComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }
    handleChange = (value) => {
        this.setState({
            value: value,
        });

    };
    propData = {
        name:null,
        img:null,
        temp_c:null,
        temp_f:null,
        weatherData:[
            {name:'wind',value:'300'},
            {name:'snow',value:'300'}
        ]
    };
    propDataDays = [
    ];
    propDataDays_10 = [
    ];
    getForecastDataDay(days_10) {
    var days = [];
    days_10 = days_10 || 3;
    var numDay ='';
    var data = _.get(this.props.forecastData,'forecastData.forecast.forecastday')||'';
    var location = _.get(this.props.forecastData,'forecastData.location.name')||'';
     _.forEach(data,function(item,i){
         var dt = new Date(item.date);
         numDay = () => { switch(dt.getDay()) {
             case 0: return 'Sunday';
             case 1: return 'Monday';
             case 2: return 'Thuesday';
             case 3: return 'Wednesday';
             case 4: return 'Thursday';
             case 5: return 'Friday';
             case 6: return 'Saturday';
             default:return 'noDay'
         }};
         if (item&&i!=0&&i<=days_10) {
             days.push({
                 date:      item.date,
                 day:       numDay(),
                 temp_f:    item.day.maxtemp_f,
                 temp_c:    item.day.maxtemp_c,
                 min_temp_c:item.day.mintemp_c,
                 min_temp_f:item.day.mintemp_f,
                 condition: item.day.condition,
                 location:  location
             });
         }
     });
     return days
}
    getForecastData() {
        var data = [];
        var cdata = _.get(this.props.forecastData,'forecastData.current')||'';
        _.forEach(cdata,function(key,value) {
            value === 'wind_mph' ? value = 'wind meter per s/':value;
            value === 'wind_kph' ? value = 'wind Kmeter per s/':value;
            value === 'pressure_mb' ? value = 'pressure(mb)':value;
            value === 'pressure_in' ? value = 'pressure(in)':value;
            value === 'precip_mm' ? value = 'precip(mm)':value;
            value === 'precip_in' ? value = 'precip(in)':value;
            data.push({name:value,param:key});
        });
        data = _.filter(data,function(item) {
            return item.name!=='last_updated_epoch'
                && item.name!=='last_updated'
                && item.name!=='condition'
                && item.name!=='is_day'
                && item.name!=='temp_c'
                && item.name!=='temp_f'
                && item.name!=='feelslike_c'
                && item.name!=='feelslike_f'
                && item.name!=='wind_degree'

        });
        //get values
        return {
            name:  _.get(this.props.forecastData,'forecastData.location.name'),
            img:   _.get(this.props.forecastData,'forecastData.current.condition.icon'),
            temp_c:_.get(this.props.forecastData,'forecastData.current.temp_c'),
            temp_f:_.get(this.props.forecastData,'forecastData.location.temp_f'),
            text:  _.get(this.props.forecastData,'forecastData.current.condition.text'),
            weatherData:data,
        }
    }
    render() {
        this.propData = this.getForecastData();
        this.propDataDays = this.getForecastDataDay(3);
        this.propDataDays_10 = this.getForecastDataDay(10);
        return (
            <div>
            <SearchBar/>
               <Tabs value={this.state.value} onChange={this.handleChange}>
                <Tab value={1} label="Current day weather">
                    <TodayForecast img={this.propData.img}
                                   temp={this.propData.temp_c}
                                   location={this.propData.name}
                                   text = {this.propData.text}
                    />
                    <TodayForecastInfo tableData={this.propData.weatherData}/>
                </Tab>
                <Tab value={2} label="3  day forecast">
                    <DaysForecast datas={this.propDataDays}/>
                </Tab>
                <Tab value={3} label="10 day forecast">
                   <DaysForecast datas={this.propDataDays_10}/>
                </Tab>
            </Tabs>
            </div>
        )
    }
}
export default connect(
    state => ({
        forecastData: state
    }),
    dispatch => ({})
)(FirstTabsComp);