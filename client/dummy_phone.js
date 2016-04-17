var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost:1883');



client.on('connect', function () {
  client.subscribe("some_device_id");
  // client.publish('presence', 'Hello mqtt',{qos : 1});
});
 
client.on('message', function (topic, message) {
  console.log(message.toString());
});