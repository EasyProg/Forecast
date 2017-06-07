/**
 * Created by Михаил on 01.06.2017.
 */
import React, { Component } from 'react';
import * as types from './actionTypes';
import axios from 'axios';
import link from '../containers/App';
var _= require('lodash');
function requestData() {
    return {type: types.REQ_DATA}
};

function receiveData(json) {
     return {
    //
         type: types.RECV_DATA,
         data: json
    //     viewCurrencies:objArr.length === 0 ?filterData(Currencies,['USD','EUR']):objArr
    //
     }
};
function receiveError(xml) {
    return {
        type: types.RECV_ERROR,
        data: xml
    }
};
// export function SearchData(city) {
//     var city_param =_.upperCase(city);
//     console.log('sdsdsdsds1111');
//     return {
//         type:types.search_City,
//         data:fetchData(link+city_param)
//     }
// }
export function fetchData(url) {
    return function (dispatch) {
        dispatch(requestData());
        return axios( {
            crossDomain: true,
            mode:'cors',
            url: url,
            timeout: 5000,
            method: 'get',
            responseType: 'json',
            transformRequest:[(data)=>JSON.stringify(data,data)],
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Methods':'GET, POST',
                'Access-Control-Allow-Headers':'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token'
            }}
        )
            .then(function (response) {
                dispatch(receiveData(response.data));
            })
            .catch(
                function (response) {dispatch(receiveError(response.data)
                );
            })
    }

    //};
};