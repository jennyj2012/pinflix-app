# Phase 4: Flux Architecture and Board CRUD (1 days)

## Rails
### Models
* Board

### Controllers
* Api::BoardsController (create, destroy, index, show, update)

### Views
* boards/index.json.jbuilder
* boards/show.json.jbuilder

## Flux
### Views (React Components)
* BoardsIndex
  - BoardsIndexItem
* BoardForm
* SearchIndex

### Views (React Components)

### Stores
Board

### Actions
* ApiActions.receiveAllBoards -> triggered by ApiUtil
* ApiActions.receiveSingleBoard
* ApiActions.deleteBoard
* BoardActions.fetchAllBoards -> triggers ApiUtil
* BoardActions.fetchSingleBoard
* BoardActions.createBoard
* BoardActions.editBoard
* BoardActions.destroyBoard

### ApiUtil
* ApiUtil.fetchAllBoards
* ApiUtil.fetchSingleBoard
* ApiUtil.createBoard
* ApiUtil.editBoard
* ApiUtil.destroyBoard

## Gems/Libraries