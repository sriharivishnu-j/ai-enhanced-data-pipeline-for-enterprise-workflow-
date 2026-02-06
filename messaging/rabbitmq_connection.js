const amqp = require('amqplib/callback_api');
function connect() {
  amqp.connect('amqp://localhost', (error0, connection) => {
    if (error0) throw error0;
    connection.createChannel((error1, channel) => {
      if (error1) throw error1;
      channel.assertQueue('tasks', { durable: true });
    });
  });
}
module.exports = { connect };