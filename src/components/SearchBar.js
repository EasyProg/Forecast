/**
 * Created by Михаил on 01.06.2017.
 */
import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/actions';
import '../srchBar.css';
const link_day = 'http://api.apixu.com/v1/forecast.json?key=fe3ca5b09d1c4d03b7f220122170306&days=10&q=';
@connect(
    dispatch => bindActionCreators({fetchData}, dispatch)
)
export default class SearchBar extends Component {
    handleClick(e) {
        var city  = this.refs.input.value;
        this.props.dispatch(fetchData(link_day+city));
    }
render() {
    return (<div className="divBar">
            <input className="input" ref="input" placeholder="Enter search city here"/>
            <FlatButton label="Search" primary={true} onTouchTap={e=>this.handleClick(e)}/>
            </div>
            )
}
}