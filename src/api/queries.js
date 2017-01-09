import axios from 'axios';
import React, {Component} from 'react';

const baseUrl = "https://boiling-sands-47092.herokuapp.com/";

export const getAllContacts = () => {
	axios({
		url: baseUrl + "api/contact/",
		method: 'GET'
	});
}

export const createContact = (name, groupObjectId, maintenance, email, phone, notes, lastContacted) => {
	axios({
		url: baseUrl + "api/contact/",
		method: 'POST'
	});
}

export const editContact = (contactObjectId, name, groupObjectId, maintenance, email, phone, notes, lastContacted) => {
	axios({
		url: baseUrl + "api/contact/" + contactObjectId + "/",
		method: "POST"
	})
}

export const deleteContact = (contactObjectId) => {
	axios({
		url: baseUrl + "api/contact/",
		method: "DELETE", 
		data: {contactObjectId}
	})
}

export const createGroup = (name) => {
	axios({
		url: baseUrl + "api/group/",
		method: "POST"
	})
}

export const editGroup = (groupObjectId, name) => {
	axios({
		url: baseUrl + "api/group/" + groupObjectId + "/",
		method: "POST",

	})
}

export const getAllGroups = () => {
	axios({
		url: baseUrl + "api/group/",
		method: "GET"
	})
}

export const deleteGroup = (groupObjectId) => {
	axios({
		url: baseUrl + "api/group/",
		method: "DELETE",
		data: {groupObjectId}
	})
}