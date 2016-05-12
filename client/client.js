var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost:1883');

client.on('connect', function () {
  // client.subscribe('some_device_id');
  publish_simulation(client,publish_simulation);
});
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
  client.end();
});

function publish_simulation(client,cb) {
	setTimeout(function() {
		client.publish("some_device_id",(Math.random()*1000).toString(),{ qos: 1, retained: true });
		console.log("Published!");
		cb(client,cb);
	}, 500);
}