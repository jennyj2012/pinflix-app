# Phase 6: Follow and Unfollow 

## Rails
### Models
* Follow
* Board

### Controllers
* Api::FollowsController (create, destroy, index, show, update)

### Views
* boards/index.json.jbuilder

## Flux
### Views (React Components)
* BoardsIndex
  - BoardIndexItem
* BoardShow
* BoardForm

### Stores
* Follow

### Actions
* ApiActions.receiveAllFollows -> triggered by ApiUtil
* ApiActions.receiveSingleFollow
* ApiActions.deleteFollow
* FollowActions.fetchAllFollows -> triggers ApiUtil
* FollowActions.fetchSingleFollow
* FollowActions.createFollow
* FollowActions.updateFollow
* FollowActions.destroyFollow

### ApiUtil
* ApiUtil.fetchAllFollows
* ApiUtil.fetchSingleFollow
* ApiUtil.createFollow
* ApiUtil.updateFollow
* ApiUtil.destroyFollow

## Gems/Libraries
