/**
 * Created by Михаил on 05.06.2017.
 */
import React, {Component,PropTypes} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
export default class TodayForecastInfo extends Component {
    static propTypes = {
        tableData :PropTypes.array.isRequired
    };
    bodyStyle = {
        color:'steelblue',
        font:'12pt bold',
        fontWeight:'600'
    }
    state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: false,
        height: '300px',
    };
render() {
    if (this.props.tableData && this.props.tableData[0]) {
        return (
            <Table height={this.state.height}
                   fixedHeader={this.state.fixedHeader}
                   fixedFooter={this.state.fixedFooter}
                   selectable={this.state.selectable}
                   multiSelectable={this.state.multiSelectable}
                   showCheckboxes={this.state.showCheckboxes}
            >
                <TableHeader
                    displaySelectAll={this.state.showCheckboxes}
                >
                    <TableRow>
                        <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Status">Value</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={this.state.showCheckboxes}
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}
                >
                    {
                        this.props.tableData.map((row, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableRowColumn style={this.bodyStyle}>{row.name}</TableRowColumn>
                                    <TableRowColumn style={this.bodyStyle}>{row.param.toString()}</TableRowColumn>
                                </TableRow>
                            )
                        })}
                </TableBody>
            </Table>
        )
    }
    else return (<div>Loading data ...</div>)
        }
        }
// export default connect(
//     state => ({
//         forecastData: state
//     }),
//     dispatch => ({})
// )(TodayForecastInfo);
