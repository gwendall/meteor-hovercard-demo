Profiles.deny({
  insert: function() { return true; },
  update: function() { return true; },
  remove: function() { return true; }
});

Meteor.publish("profiles", function() {
  return Profiles.find();
});

if (Profiles.find().count() === 0) {
  HTTP.call("GET", "http://api.randomuser.me/?results=100", {}, function(err, res) {
    var items = (res && res.data && res.data.results) || [];
    items.forEach(function(item) {
      Profiles.insert(item);
    });
  });
}
