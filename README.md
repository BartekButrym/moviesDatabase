Welcome to simple REST API - a basic movie database interacting with external API.

To build this app I have used NodeJS, framework express, database mongoDB and Mongoose.

To fetch movie details app is connected to public movie database: http://www.omdbapi.com/. For this, You have enter this site and get free API Key. Save this key for further use.

For testing I chose mocha and chai.

INSTALLATION:

I assume You have installed nodeJS with npm.

Open terminal and type:

    git clone https://github.com/BartekButrym/moviesDatabase.git

Next, install dependencies typing:

    npm install

DATABASE:

You can use your local database (mongoDB) or mLab (cloud MongoDB: https://mlab.com/home). If using mLab, You have to create an account and save your user and password data.

USAGE:

Open the ".env" file and assign your api key to variable API_KEY. Also in this file set DB to your database path, for example you can type: 'mongodb://localhost:27017/test'. If using mLab, after creating account and creating database, type: 'mongodb://USERNAME:PASSWOR@ds255588.mlab.com:55588/DATABASE_NAME'.
Replace USERNAME with your user name and PASSWORD with your password, and also DATABASE_NAME with the name of created database.

In my tests I was using Postman (You can download and install this app from: https://www.getpostman.com/).

In main window of Postman select "POST" button and type:

    http://localhost:3000/movies

In the navigation bar below select "Body" and "x-www-form-urlencoded". In the 'Key' column type: title. In the 'Value' column type your movie of choice, e.g. Avengers. Then click the blue button "Send". You should see json file below with details of movie.

To get all the movie select "GET" and just click the blue button "Send". You should see all movies in your database.

For posting comments, in Postman, chose "POST" method, type:

    http://localhost:3000/movies/MOVIE-id/comments
        for example: http://localhost:3000/movies/5a9f0d169f870b5a9176c058/comments

Select "Body" in navbar and "x-www-form-urlencoded". In the 'Key' column type: movieId. In the 'Value' column type: req.params.id. In the next row, nn the 'Key' column type: comment. In the 'Value' column type your comment, e.g.: It's a great movie, hope see it again.

For getting all comments select "GET" method and type:

    http://localhost:3000/comments

TESTING:

open terminal in your folder and type:

    npm run test