var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost:1883');
 
client.on('connect', function () {
  client.subscribe('presence');
  client.publish("presence","ABCD");
  // client.publish('presence', 'Hello mqtt',{qos : 1});
});
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
  client.end();
});