# Phase 3: Flux Architecture and Comment CRUD (1 days)

## Rails
### Models
* Comment
* Pin

### Controllers
* Api::CommentsController (create, destroy, index, show, update)

### Views
* pins/comments/index.json.jbuilder
* pins/show.json.jbuilder

## Flux
### Views (React Components)
* CommentsIndex
  - CommentsIndexItem
* CommentForm

### Stores
* Comment

### Actions
* ApiActions.receiveAllComments -> triggered by ApiUtil
* ApiActions.receiveSingleComment
* ApiActions.deleteComment
* CommentActions.fetchAllComments -> triggers ApiUtil
* CommentActions.fetchSingleComment
* CommentActions.createComment
* CommentActions.editComment
* CommentActions.destroyComment

### ApiUtil
* ApiUtil.fetchAllComments
* ApiUtil.fetchSingleComment
* ApiUtil.createComment
* ApiUtil.editComment
* ApiUtil.destroyComment

## Gems/Libraries
