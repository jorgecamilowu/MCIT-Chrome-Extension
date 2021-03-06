//load the user's first, last, pennID, email from chrome.storage

document.body.onload = function() {
  chrome.storage.sync.get(["first", "last", "email", "pennID", "cit591", "cit592",
        "cit593","cit594", "cit595", "cit596", "cit549", "cit581"], function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      //load user data

      //first, last
      if(items.first == null || items.last == null){
        document.getElementById("name").innerText = "Welcome to your MCIT Portal";
      }
      else{
        document.getElementById("name").innerText = items.first + " " + items.last;
      }
      //email
      if(items.email == null){
        document.getElementById("email").innerText = "your profile!";
      }
      else{
        document.getElementById("email").innerText = items.email;
      }
      //pennID
      if(items.pennID == null){
        document.getElementById("pennID").innerText = "Go to settings and configure";
      }
      else{
        document.getElementById("pennID").innerText = "Penn ID: " + items.pennID;
      }

      //hide 591
      if(!(items.cit591)){
         document.getElementById("overview_591").style.display = "none";
         document.getElementById("live_events_591").style.display = "none";
         document.getElementById("grades_591").style.display = "none";
         document.getElementById("resources_591").style.display = "none";
         document.getElementById("piazza_591").style.display = "none";

         //hide each element in class
         var elems = document.getElementsByClassName('urls_591');
         for (var i=0;i<elems.length;i++){
           elems[i].style.display = 'none';
         }

      }
      //hide 592
      if(!(items.cit592)){
         document.getElementById("overview_592").style.display = "none";
         document.getElementById("live_events_592").style.display = "none";
         document.getElementById("grades_592").style.display = "none";
         document.getElementById("resources_592").style.display = "none";
         document.getElementById("piazza_592").style.display = "none";

         var elems = document.getElementsByClassName('urls_592');
         for (var i=0;i<elems.length;i++){
           elems[i].style.display = 'none';
         }
      }
      //hide 593
      if(!(items.cit593)){
         document.getElementById("overview_593").style.display = "none";
         document.getElementById("live_events_593").style.display = "none";
         document.getElementById("grades_593").style.display = "none";
         document.getElementById("resources_593").style.display = "none";
         document.getElementById("piazza_593").style.display = "none";

         var elems = document.getElementsByClassName('urls_593');
         for (var i=0;i<elems.length;i++){
           elems[i].style.display = 'none';
         }
      }
      //hide 594
      if(!(items.cit594)){
         document.getElementById("overview_594").style.display = "none";
         document.getElementById("live_events_594").style.display = "none";
         document.getElementById("grades_594").style.display = "none";
         document.getElementById("resources_594").style.display = "none";
         document.getElementById("piazza_594").style.display = "none";

         var elems = document.getElementsByClassName('urls_594');
         for (var i=0;i<elems.length;i++){
           elems[i].style.display = 'none';
         }
      }
      //hide 595
      if(!(items.cit595)){
         document.getElementById("overview_595").style.display = "none";
         document.getElementById("live_events_595").style.display = "none";
         document.getElementById("grades_595").style.display = "none";
         document.getElementById("resources_595").style.display = "none";
         document.getElementById("piazza_595").style.display = "none";

         var elems = document.getElementsByClassName('urls_595');
         for (var i=0;i<elems.length;i++){
           elems[i].style.display = 'none';
         }
      }
      //hide 596
      if(!(items.cit596)){
         document.getElementById("overview_596").style.display = "none";
         document.getElementById("live_events_596").style.display = "none";
         document.getElementById("grades_596").style.display = "none";
         document.getElementById("resources_596").style.display = "none";
         document.getElementById("piazza_596").style.display = "none";

         var elems = document.getElementsByClassName('urls_596');
         for (var i=0;i<elems.length;i++){
           elems[i].style.display = 'none';
         }
      }
      //hide 549
      if(!(items.cit549)){
         document.getElementById("overview_549").style.display = "none";
         document.getElementById("live_events_549").style.display = "none";
         document.getElementById("grades_549").style.display = "none";
         document.getElementById("resources_549").style.display = "none";
         document.getElementById("piazza_549").style.display = "none";

         var elems = document.getElementsByClassName('urls_549');
         for (var i=0;i<elems.length;i++){
           elems[i].style.display = 'none';
         }
      }
      //hide 581
      if(!(items.cit581)){
         document.getElementById("overview_581").style.display = "none";
         document.getElementById("live_events_581").style.display = "none";
         document.getElementById("grades_581").style.display = "none";
         document.getElementById("resources_581").style.display = "none";
         document.getElementById("piazza_581").style.display = "none";

         var elems = document.getElementsByClassName('urls_581');
         for (var i=0;i<elems.length;i++){
           elems[i].style.display = 'none';
         }
      }

    }
  });
}
