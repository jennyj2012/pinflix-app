#PINFLIX

Welcome to PinFlix, a movie discovery site that lets you find and group movies into boards. Pinflix is a clone of Pinterest, pinterest.com.

www.pinflixapp.com

##HOW TO USE
Find movies that match your interests. Create boards for different categories and pin movies to those boards. See your friend's boards and follow your favorites!

##SYSTEM INFO
Ruby version “2.3.0” Node version “4.1.1” NPM version “2.1.x”

System dependencies “babel-core”: “^6.4.5”, “babel-loader”: “^6.2.1”, “babel-preset-react”: “^6.3.13”, “flux”: “^2.1.1”, “history”: “^1.17.0”, “react”: “^0.14.6”, “react-addons-linked-state-mixin”: “^0.14.6”, “react-dom”: “^0.14.6”, “react-history”: “^1.0.0”, “react-router”: “^1.0.3”, “webpack”: “^1.12.12”

##QUICK START Install the bundler package manager and install dependencies gem install bundler bundle install npm install

Database creation $ initdb -D /usr/local/pgsql/data

Database initialization bundle exec rake db:create db:migrate

Seed database bundle exec rake db:seed

To run locally start your servers start postresql “$ postgres -D /usr/local/pgsql/data” start rails “rails server” start webpack “webpack –watch”


##IMPLEMENTATION DETAILS
![Implementation Details](./docs/implementation_details.md)
… Created by Jenny Juarez
