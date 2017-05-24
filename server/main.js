import { Meteor } from 'meteor/meteor';

if (Meteor.isServer){
  Meteor.methods({
      'getContract': function(operation){
          console.log("Hello world"+operation);
          return "received";
      }
  });
}
