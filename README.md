#PINFLIX

Welcome to [PinFlix](http://www.pinflixapp.com), a movie discovery site that lets you find and group movies into boards. Pinflix is a clone of [Pinterest](https://www.pinterest.com) and built using flux-architecture.

[![Pinterest](./docs/wireframes/wireframe_images/pinflix_wireframes.001.jpeg)](http://www.pinflixapp.com)

##Basic Usage:
Users can create an account and Log in/ Log out or use the guest account. The home page features a view a feed of movie. Users can then search for movies, boards, or comments that match their interests. They can create movie pins and boards for different categories, then pin their movie pins to their boards or repin other movie pins to their boards. Like pinterest, users can add comments, and view comments on a movie pin. 

##Features
* Dynamically responds to window resize, animating the grid layout
* Integrates RESTful operations into React lifecycle components upon page refresh
* Improves user search experience with categorized pg_search results
* Uses paperclip to store and upload images via Amazon Web Services S3
* Dynamic url hashing

##QUICK START
`gem install bundler bundle install npm install`

##Technologies
* Reactjs
* Flux
* Babel
* Webpack
* AWS S3 
* PostgreSQL

###SYSTEM INFO
>Ruby version 2.3.0 Node version 4.1.1 NPM version 2.1.x
>
>**System dependencies:** babel-core: 6.4.5, babel-loader: 6.2.1, babel-preset-react: 6.3.13, flux: 2.1.1, history: 1.17.0, react: 0.14.6, react-addons-linked-state-mixin: 0.14.6, react-dom: 0.14.6, react-history: 1.0.0, react-router: 1.0.3, webpack: 1.12.12


###FUTURE FEATURES

Follow/Unfollow boards,
Follow/Unfollow users,
Invite users to boards,
Search Users,
Add multiple tags to pins and boards,
Add Info Box,
Add default avatar,
Upload file validations,
Spinners,
Disable buttons while processing

###IMPLEMENTATION DETAILS
[Implementation Details](./docs/implementation_details.md)
… Created by Jenny Juarez
