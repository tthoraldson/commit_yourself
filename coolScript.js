/*
 _____                           _ _    __   __                        _  __
/  __ \                         (_) |   \ \ / /                       | |/ _|
| /  \/ ___  _ __ ___  _ __ ___  _| |_   \ V /___  _   _ _ __ ___  ___| | |_
| |    / _ \| '_ ` _ \| '_ ` _ \| | __|   \ // _ \| | | | '__/ __|/ _ \ |  _|
| \__/\ (_) | | | | | | | | | | | | |_    | | (_) | |_| | |  \__ \  __/ | |
\____/\___/|_| |_| |_|_| |_| |_|_|\__|   \_/\___/ \__,_|_|  |___/\___|_|_|
(c) tthoraldson 2016 | https://github.com/tthoraldson/commit_yourself
                              v. 0.0.1
*/


gitUName = "tthoraldson" // temporary, just for testing purposes.
gitURL = "http://github.com/" + gitUName;

// date var the same as github's data-date
var d = new Date();
var dataDate = (d.getMonth() + 1) + "-" + d.getDate() + "-" + (d.getFullYear() - 2000);

console.log(dataDate);
console.log(gitURL);
