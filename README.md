# Work-Day-Planner
The aim of this project was to create a work day (from 9am to 5pm) scheduler that allows a user to save events for each hour of the day. We had to use a JavaScript library such as  [Moment.js](https://momentjs.com/) to work with dates and times

## Link To Application
[Work Day Planner](https://karen-o94.github.io/Work-Day-Planner/)

## First Steps: Pseudocoding & Styling HTML page 
Before attempting to code the Javascript file, I took some time to pseudocode a flow chart of how I wanted the application to work based on the client's user story. 

The client's first criteria was that a series of timeblocks will appear and in each block, they will be able to type in a message/event to save. 

I started off styling the HTML page mainly using Bootstrap and correlating the HTML tag attributes with the CSS selectors provided in the stylesheet given to us as part of the starter code.

## Second steps: Declaring intial global variables & using DOM Methods
After pseudocoding, I proceeded to declaring the variables I would need to store the current date, time and elements that I would need to manipulate on the DOM. I used a click event (`.on("click", function() {})` to the `saveBtn` class which will prompt the user to save anything written in the `<textarea>` element.

Then I worked on how to save the event into the user's `localStorage` by retrieving the value from the target elements and storing those in variables to be used as key-value pairs later on. 4

## Final Steps: Comparing current time with time in timeblocks
As the client wanted a colour-coded timeblock to represent whether event was in the past, present or future; I wrote a function to display this comparison using a `forEach` loop and setting the conditions with if/else statements. 

## Deployed Application Image
![image](https://user-images.githubusercontent.com/74797740/104839493-644e9e00-58b9-11eb-8d5a-b950cb7cfe14.png)

![image](https://user-images.githubusercontent.com/74797740/104839518-7f211280-58b9-11eb-8d5c-d83342d876c0.png)

## Difficulties
Organizing: Similar to previous assignments, I still struggle with figuring out how to organise my JavaScript/jQuery code for it to flow logically especially when writing functions.

I used console.log, Chrome DevTools, YouTube and peer reviews to troubleshoot what was going wrong and what direction to take to fix these issues.

**Built With**
- HTML
- [Bootstrap](https://getbootstrap.com/)
- CSS
- JavaScript / [jQuery](https://jquery.com/)
- [VScode](https://code.visualstudio.com/)

# License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

