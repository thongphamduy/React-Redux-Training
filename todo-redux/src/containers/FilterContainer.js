import React, {Component} from 'react';
import Filter from '../components/Filter'
import {connect} from 'react-redux'
import {FilterAll,FilterCompleted,FilterNew} from "../actions/FilterAction";

const mapStateToProps = state => ({
    filter: state.filter
});
const mapDispatchToProps = (dispatch) => {
	return {
		filterAll: () => {
			dispatch(FilterAll())
		},
		filterCompleted: () => {
			dispatch(FilterCompleted())
		},
		filterNew: () => {
			dispatch(FilterNew())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);