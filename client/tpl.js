Meteor.subscribe("profiles");

Template.profilesList.helpers({
  profiles: function () {
    return Profiles.find();
  }
});

Template.profilesHovercard.events({
  "click .clickable": function(e, tpl) {
    alert("Do something with " + tpl.data.user.email);
  }
});

UI.registerHelper('capitalize', function(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
});
