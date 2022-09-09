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

