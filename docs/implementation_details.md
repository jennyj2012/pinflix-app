# PinFlix
# By Jenny Juarez

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

PinFlix is a movie discovery web application inspired by Pinterest built using Ruby on Rails and React.js. PinFlix allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, and update pins
- [ ] Comment on pins
- [ ] Create, read, update, and delete boards
- [ ] Organize pins within boards
- [ ] Follow / unfollow other boards
- [ ] Search through pins or boards by subject


## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication and User JSON API push to Heroku(1 days)

In Phase 1, I will begin by implementing user signup and authentication (using BCrypt). Create a JSON API to sign up, log in, and log out. Push to Heroku. Create flux architecture for authentication. Create react components, and necessary forms for user authentication. Add a home page users will be redirected to after sign in. 

[Details][phase-one]

### Phase 2: Flux Architecture and Pin CRUD (1 days)

Phase 2 is focused on continuing setting up Flux, the React Router, and the React view structure for the main application. After the basic Flux architecture has been set up, a Pin store will be implemented and a set of actions corresponding to the needed CRUD functionality created. Once this is done, I will create React views for the Pins `Index`, `IndexItem` and `Form`. At the end of Phase 2, Pins can be created, read, and edited in the browser. 

[Details][phase-two]

### Phase 3: Flux Architecture and Comment CRUD (1 days)

Phase 3 is focused on continuing setting up Flux, the React Router, and the React view structure for the main application. After the basic Flux architecture has been set up, a Comment store will be implemented and a set of actions corresponding to the needed CRUD functionality created. Once this is done, I will create React views for the Comments `Index`, `IndexItem` and `Form`. At the end of Phase 3, Comments can be created, read, edited, and deleted in the browser.

[Details][phase-three]

### Phase 4: Flux Architecture and Board CRUD (1 days)

Phase 4 is focused on continuing setting up Flux, the React Router, and the React view structure for the main application. After the basic Flux architecture has been
set up, a Board store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Boards `Index`, `IndexItem` and `Form`. At the end of Phase 4,
Boards can be created, read, edited, and destroyed in the browser. 

[Details][phase-four]

### Phase 5: Boards and Tags (2 days)

Phase 5 adds organization to the Pins. Comments belong to Pins, and Pins can belong to Boards, which has its own `Index` view. Create JSON API for Boards. Boards can be tagged with multiple genres. Pins will have many tag associations through boards.Users can bring up pins or boards in the home view by searching for their tags. Tags are a predefined collection.

[Details][phase-five]

### Phase 6: Follow and Unfollow (2 day)

Phase 6 introduces a new feature. Users can follow and unfollow boards, which will affect the pins that are displayed on their home screen. 

[Details][phase-six]

### Phase 7: Styling Cleanup and Seeding (1 day)

In Phase 7 I will add styling flourishes and make modals out of some elements (like
the BoardForm).


### Bonus Features (TBD)
- [ ] Like button
- [ ] Send a pin
- [ ] Page scraping engines
- [ ] Finding other users
- [ ] Adding users to boards
- [ ] Follow Users
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md

