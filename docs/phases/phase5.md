# Phase 5: Boards and Tags (2 days)

## Rails
### Models
* Board
* Tag
* Tagging

### Controllers
* Api::TaggingController (index, show)

### Views
* board/show.json.jbuilder

## Flux
### Views (React Components)
* BoardShow
* BoardForm

### Stores
* Tags

### Actions
* ApiActions.receiveAllTags -> triggered by ApiUtil
* ApiActions.receiveSingleTag
* TagActions.fetchAllTags -> triggers ApiUtil
* TagActions.fetchSingleTag


### ApiUtil
* ApiUtil.fetchAllTags
* ApiUtil.fetchSingleTag


## Gems/Libraries
