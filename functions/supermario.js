import { basic } from "acuityscheduling";
var userId = 24448045;
var apiKey = "237b058135bf820f43062468fbd2a61e";

var acuity = basic({
  userId: userId,
  apiKey: apiKey,

});
exports.handler=async function(){
    console.log("func supermario");
    acuity.request("appointments", function (err, res, appointments) {
        if (err) {
          return err;
        } else {
          return console.log(appointments);
        }
      });
    }