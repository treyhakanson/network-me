import React from 'react';
import {GET_ALL_GROUPS} from 'Actions';

const INITIAL_STATE = {groups: []}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
	case GET_ALL_GROUPS:
	return { groups: action.payload };
	default: 
	return state;
	}
}