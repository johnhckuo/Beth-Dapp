import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';




Template.hello.onCreated(function helloOnCreated() {

});


if (Meteor.isClient){

  Template.hello.helpers({
	result:function(){

		return Session.get('data');
	}	
	  
	  
	  
  });



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
		
		
		Meteor.call('getStakeholderLength', 'init', function(err, res){
			if(err){
				alert('Error');
			}else{
				Session.set("data", res);
				console.log(res);
			}
		});

    },
    'click .addMember':function(event, instance) {
		
		Meteor.call('addMember', 'init', function(err, res){
			if(err){
				alert('Error');
			}else{
				Session.set("data", res);
				console.log(res);
			}
		});

    },
  });


}
