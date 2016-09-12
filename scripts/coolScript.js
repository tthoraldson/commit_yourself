/*
 _____                           _ _    __   __                        _  __
/  __ \                         (_) |   \ \ / /                       | |/ _|
| /  \/ ___  _ __ ___  _ __ ___  _| |_   \ V /___  _   _ _ __ ___  ___| | |_
| |    / _ \| '_ ` _ \| '_ ` _ \| | __|   \ // _ \| | | | '__/ __|/ _ \ |  _|
| \__/\ (_) | | | | | | | | | | | | |_    | | (_) | |_| | |  \__ \  __/ | |
\____/\___/|_| |_| |_|_| |_| |_|_|\__|    \_/\___/ \__,_|_|  |___/\___|_|_|
(c) tthoraldson 2016 | https://github.com/tthoraldson/commit_yourself
                              v. 0.0.1
*/
$(document).ready(function(){

});

console.log('')

gitUName = "adameastvold" // temporary, just for testing purposes.
gitURL = "http://github.com/" + gitUName;

$.ajax( {
    url : 'https://api.github.com/users/' + gitUName + '/events',
    type: 'GET',
    dataType : 'jsonp',
    success : function(data){
      console.log('Username: ' + gitUName);

      var d = new Date(Date.parse(data.data[0].created_at));
      var commitDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
      console.log('Last Commit Date: ' + commitDate);

      var t = new Date();
      var todaysDate = t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate();
      console.log('Today\'s Date: ' +todaysDate);

      if (commitDate == todaysDate){
        console.log('You Committed Today');
      }
      else {
        console.log('YOU STILL NEED TO COMMIT')
      }

      console.log(data);
    },
    error: function(){
      console.log("AJAX request has failed");
    }
});

//CONVERT(varchar(20),expression,style)

// var currentDate = new Date();
// var commitDate = new Date(Date.parse('2016-08-18T04:14:19Z'));

console.log(Date.parse('2016-08-18T04:14:19Z'));

console.log('current date: ' + currentDate);
console.log('commit date: ' + commitDate);

// figure out more ajax calls for getting commits
