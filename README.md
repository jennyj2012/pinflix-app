#PINFLIX

Welcome to [PinFlix](http://www.pinflixapp.com), a movie discovery site that lets you find and group movies into boards. Pinflix is a clone of [Pinterest](https://www.pinterest.com) and built using flux-architecture.

![Pinterest](./docs/wireframes/wireframe_images/pinflix_wireframes.001.jpeg)

##Features
* Dynamically responds to window resize, animating the grid layout
* Integrates RESTful operations into React lifecycle components upon page refresh
* Improves user search experience with categorized pg_search results
* Dynamic url hash
* Uses paperclip to store and upload images via Amazon Web Services S3

##Technologies
* Reactjs
* Flux
* Babel
* Webpack
* AWS S3 
* PostgreSQL

####Basic Usage:
* Create an account
* Log in/ Log out
* View a feed of movies
* Search for movies, boards, or comments that match your interests.
* Create movie pins.
* Create boards for different categories.
* Pin your movie pins to your boards.
* Repin other movie pins to your boards
* Comment on a movie pin
* View comments on a movie pin

##SYSTEM INFO
Ruby version 2.3.0 Node version 4.1.1 NPM version 2.1.x

**System dependencies:** babel-core: 6.4.5, babel-loader: 6.2.1, babel-preset-react: 6.3.13, flux: 2.1.1, history: 1.17.0, react: 0.14.6, react-addons-linked-state-mixin: 0.14.6, react-dom: 0.14.6, react-history: 1.0.0, react-router: 1.0.3, webpack: 1.12.12

##QUICK START
**Install the bundler package manager and install dependencies** gem install bundler bundle install npm install

**Database creation:** $ initdb -D /usr/local/pgsql/data

**Database initialization:** bundle exec rake db:create db:migrate

**Seed database:** bundle exec rake db:seed

To run locally start your servers **start postresql:** $ postgres -D /usr/local/pgsql/data
                                  **start rails:** rails server
                                  **start webpack:** webpack –watch

##FUTURE FEATURES

Follow/Unfollow boards
Follow/Unfollow users
Invite users to boards
Search Users
Add multiple tags to pins and boards
Add Info Box
Add default avatar
Upload file validations
Spinners
Disable buttons while processing

##IMPLEMENTATION DETAILS
[Implementation Details](./docs/implementation_details.md)
… Created by Jenny Juarez
