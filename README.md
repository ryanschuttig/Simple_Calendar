# Simple_Calendar

<!-- Start UP
1. Show Date
2. Type in time block, click save, refresh, make sure text stays in time block (local storage)
3. Retrieve from local storage to display on page
4. Color coat blocks depending on time of day. Past blocks = gray, current time block = red, future time blocks = green
***Time blocks are rows***
***Time, Description, Save***
***Row -> 3 colums***

ALL WE DO WITH MOMENT
Display current times with Moment.js
Moment() gives you current time
Compare time on calendar to current moment in time

&#128190;

localStorage setItem, localStorage getItem -->

05 Third-Party APIs: Work Day Scheduler
Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the Moment.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
The following animation demonstrates the application functionality:

day planner demo

Check list
✓ The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).

✓ Each timeblock contains an input field and save button.

✓ Clicking a time block's save button saves the input text to local storage, allowing the text to persist when the application is refreshed.

✓ The current day is displayed at the top of the calendar.

✓ Each timeblock is color coded to indicate whether it is in a past, present, or future hour.

✓ Repository contains quality README with description, screenshot, link to deployed application.
Submission
You are required to submit the following for review:

1. The URL of the deployed application.

2. The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

Total of two (2) links.