# To Do List

![screenshot of page](/public/screenshot of app page.png)
![screenshot of page](/public/screenshot of app page 2.png)

We want to build a simple to do list, where we can add tasks to do and delete them once they're done.

## Specification

Build a Todo list as a mini front-end application. You don't have to use a database, the front-end is more important - you can use an appropriate data structure stored somewhere in your JavaScript (this time only!)

## User Stories

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count


Still to do:

As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

## Tech Used

Written in Javascript and AngularJS, and tested in Jasmine and Protractor.

## Running the App Locally

Navigate to any folder and in the command line:

```
$ git clone https://github.com/ashleigh090990/to-do

$ cd to-do

$ npm install

$ bower install
```

You may have to install node and bower before installing the dependencies.

Update Selenium Webserver with the following command:

```
$ ./node_modules/webdriver-manager/bin/webdriver-manager update
```

Once it has been updated, run it with:

```
$ ./node_modules/webdriver-manager/bin/webdriver-manager start
```

While Selenium is running, open another tab in the same directory and run HTTP-Server:

```
$ ./node_modules/http-server/bin/http-server ./
```

Then in Google Chrome, navigate to "http://localhost:8080/" and the application should load!


## Running the Tests

*Unit Tests*

To run the unit tests from the command line
```
$ ./node_modules/karma/bin/karma start test/karma.conf.js
```

*Feature Tests*

To run the feature tests, make sure that Selenium Webserver and HTTP-Server are running (detailed above) and in another terminal tab (also in the same directory) run:

```
$ ./node_modules/protractor/bin/protractor test/e2e/conf.js
```