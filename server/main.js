import { Meteor } from 'meteor/meteor';

var callJson = {
    "private": "51ca1b67efb999415260ef43194ff90ffd72887c607edde8dfd433c58fc08b8e",
    "gas_limit": 2000000
};

var faucet = {
    "address": "d2e4ace3e8ab6debf8360321caeba2c3a15b7d63",
    "amount": 1000000000000000000
};


if (Meteor.isServer){
  Meteor.methods({
      'getContract': function(operation){
          console.log("Hello world"+operation);
          return "received";
      },
	  'getStakeholderLength':function(){
		  Meteor.http.call("POST","https://api.blockcypher.com/v1/beth/test/contracts/"+CongressAddr+"/getStakeholdersLength?token="+token, JSON.stringify(callJson) , function(error,result){
			   console.log(result);
			   return "stakeholder length :"+result;
		  });
	  },
	  'addMember':function(){
		  Meteor.http.call("POST","https://api.blockcypher.com/v1/beth/test/contracts/"+CongressAddr+"?token="+token,function(error,result){
			if (error)}{
				return "error";
			}
			   console.log(result);
			   return "success";
		  }); 
	  }
  });
}
