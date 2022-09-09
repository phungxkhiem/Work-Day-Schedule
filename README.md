# Work-Day_schedule

This is a simple daytime planner application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.


# Acceptance Criteria

* GIVEN I am using a daily planner to create a schedule
* WHEN I open the planner
* THEN the current day is displayed at the top of the calendar
* WHEN I scroll down
* THEN I am presented with timeblocks for standard business hours
* WHEN I view the timeblocks for that day
* THEN each timeblock is color coded to indicate whether it is in the past, present, or future
* WHEN I click into a timeblock
* THEN I can enter an event
* WHEN I click the save button for that timeblock
* THEN the text for that event is saved in local storage
* WHEN I refresh the page
* THEN the saved events persist
---

# SCRIPT.JS
```
const currentDay = moment().format("MMMM Do YYYY,");
const container = $(".container");
const currentHour = moment().hours();
// current day container and hour
$("#currentDay").text(currentDay);

for(let i = 8; i<18; i++) {
    let storageText="";
    let localStorageKey="hour"+i;
    console.log(localStorageKey);
    console.log(localStorage.getItem(localStorageKey));
 
    if (localStorage.getItem(localStorageKey)) {
        storageText=localStorage.getItem(localStorageKey);
    }
// color code the past current and future
    var hourClass;
    if(i<currentHour){
        hourClass="past";
    } else if (i===currentHour){
        hourClass="current-event";
    } else {
        hourClass="future";
    }
    if (i < 13) {
        container.append(`
        <div id="hour-${i}" class="row time-block"><div class="col-md-1 hour">
        ${i}${i === 12 ? "PM" : "AM"}  
        </div>
        <textarea class="col-md-10 description ${hourClass}">${storageText}                                              
        </textarea>
        <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>             
        </div>                                                                                                    
        `);
      } else {
        container.append(`
        <div id="hour-${i}" class="row time-block"><div class="col-md-1 hour">
        ${i - 12}PM
        </div>
        <textarea class="col-md-10 description ${hourClass}">${storageText}                                              
        </textarea>
        <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>             
        </div>
        `);
      }
    }
    
    // Save button function - localStoreage
    
    const saveBtn = $(".saveBtn");
    
    $(".saveBtn").on("click", function () {
      // finding nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
    
      localStorage.setItem(time, value);
    });


```