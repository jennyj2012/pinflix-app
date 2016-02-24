#PINFLIX

Welcome to [PinFlix](http://www.pinflixapp.com), a movie discovery site that lets you find and group movies into boards. 

[![Pinterest](./docs/wireframes/wireframe_images/pinflix.jpg)](http://www.pinflixapp.com)

##OVERVIEW
Pinflix is a clone of [Pinterest](https://www.pinterest.com) and built using flux-architecture.
* The home page features movie pins. Users can search pins, boards, or comments.
* Users can add comments to pins and create, read, update, and delete boards.
* Users can create pins by uploading an image, providing a url, or re-pinning an existing movie pin to a board.
* Authentication system for user sign in and sign up.
* Dynamic update of boards, pins and comments
* Navigation to new pages by updates in the url location hash

##FEATURES
* Dynamically responds to window resize, animating the grid layout
* Integrates RESTful operations into React lifecycle components upon page refresh
* Improves user search experience with categorized pg_search results
* Uses paperclip to store and upload images via Amazon Web Services S3

##FRAMEWORKS
* Rails
* React.js 
* 
##LIBRARIES AND TECHNOLOGIES
* Flux Architecture
* React Router
* React Masonry
* JQuery
* BCrypt
* Paperclip
* AWS S3
* pg_search
* PostgreSQL
* Babel (JSX)
* Webpack

##LANGUAGES
* Ruby
* Javascript
* HTML
* CSS

###SYSTEM INFO
Ruby version 2.3.0
Node version 4.1.1
NPM version 2.1.x

**System dependencies:**
babel-core: 6.4.5
babel-loader: 6.2.1
babel-preset-react: 6.3.13
flux: 2.1.1, history: 1.17.0
react: 0.14.6, react-addons-linked-state-mixin: 0.14.6
react-dom: 0.14.6
react-history: 1.0.0
react-router: 1.0.3
webpack: 1.12.12

###IMPLEMENTATION DETAILS
[Implementation Details](./docs/implementation_details.md)

Developed by Jenny Juarez
