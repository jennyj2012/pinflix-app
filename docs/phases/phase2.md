# Phase 2: Flux Architecture and Pin CRUD (1 days)

## Rails
### Models
* Pin

### Controllers
* Api::PinsController (create, index, show, update)

### Views
* pins/index.json.jbuilder
* pins/show.json.jbuilder

## Flux
### Views (React Components)
* PinsIndex
  - PinsIndexItem
* PinForm

### Stores
* Pin

### Actions
* ApiActions.receiveAllPins -> triggered by ApiUtil
* ApiActions.receiveSinglePin
* PinActions.fetchAllPins -> triggers ApiUtil
* PinActions.fetchSinglePin 
* PinActions.createPin
* PinActions.editPin 

### ApiUtil
* ApiUtil.fetchAllPins
* ApiUtil.fetchSinglePin
* ApiUtil.createPin
* ApiUtil.editPin

## Gems/Libraries
