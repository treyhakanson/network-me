import {getAllGroups} from 'Queries';

const GET_ALL_GROUPS = "GET_ALL_GROUPS"

function getGroupsAction(name) {
	const request = getAllGroups();
	return {
		type: GET_ALL_GROUPS,
		payload: request
	}
}