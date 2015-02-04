Session.set("loading", true);
Meteor.subscribe("profiles", function() {
  Session.set("loading", null);
});

Template.profilesList.helpers({
  loading: function () {
    return Session.get("loading");
  },
  profiles: function () {
    return Profiles.find();
  }
});

Template.profilesHovercard.events({
  "click .clickable": function(e, tpl) {
    alert("Hello " + tpl.data.user.email);
  }
});

UI.registerHelper('capitalize', function(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
});
