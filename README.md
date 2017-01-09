# A light Node API for the network-me app
a basic Node.js api build using express and mongo

## Endpoints
The base url is:
`https://boiling-sands-47092.herokuapp.com/`

### Contact API
*GET* `/api/contact/:groupObjectId?`
- `groupObjectId`: optional param to the contacts associated with a specific group

*POST* `/api/contact` 
- `contactObjectId`: optional body param; if specified, instead of creating a new contact, will find the contact with this id and update it (*NOTE:* when updating, only the keys being updated need to be specified)

*DELETE* `/api/contact`
- `contactObjectId`: the body param that specifies the contact to be removed

*GET* `/api/search/contact/:keyword?`
- `keyword`: what to search for; if nothing is typed in, will return all contacts

### Group API
*POST* `/api/group`
- follows the same pattern as POST `/api/contact` for updating/creating

*GET* `/api/group`
- returns all groups

*DELETE* `/api/group`
- `groupObjectId`: the body param that specifies the group to be removed
