Session.set("loading", true);
HTTP.call("GET", "//api.randomuser.me/?results=100", {}, function(err, res) {
  var profiles = (res && res.data && res.data.results) || [];
  Session.set("profiles", profiles);
  Session.set("loading", null);
});

Template.profilesList.helpers({
  loading: function () {
    return Session.get("loading");
  },
  profiles: function () {
    return Session.get("profiles");
  }
});

Template.profilesHovercard.events({
  "click .clickable": function(e, tpl) {
    alert("Adding " + tpl.data.user.email);
  }
});

UI.registerHelper('capitalize', function(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
});
