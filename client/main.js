import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var callJson = {
    "private": "51ca1b67efb999415260ef43194ff90ffd72887c607edde8dfd433c58fc08b8e",
    "gas_limit": 2000000
};

var faucet = {
    "address": "d2e4ace3e8ab6debf8360321caeba2c3a15b7d63",
    "amount": 1000000000000000000
};



Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0

});


if (Meteor.isClient){

  Template.hello.events({
    'click .init':function(event, instance) {
      Meteor.call('getContract', 'init', function(err, res){
        if(err){
            alert('Error');
        }else{
            Session.set("data", res);
            console.log(res);
        }
      });


      // console.log("call init")
      // Meteor.http.call("GET","https://api.blockcypher.com/v1/beth/test/contracts/"+CongressAddr+"?token="+token,function(error,result){
      //      console.log(result);
      // });
    },
    'click .length':function(event, instance) {
      // increment the counter when button is clicked
      Meteor.http.call("POST","https://api.blockcypher.com/v1/beth/test/contracts/"+CongressAddr+"/getStakeholdersLength?token="+token, JSON.stringify(callJson) , function(error,result){
           console.log(result);
      });
    },
    'click .addMember':function(event, instance) {
      // increment the counter when button is clicked
      Meteor.http.call("POST","https://api.blockcypher.com/v1/beth/test/contracts/"+CongressAddr+"?token="+token,function(error,result){
           console.log(result);
      });
    },
  });


}
