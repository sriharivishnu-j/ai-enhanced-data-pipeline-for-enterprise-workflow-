const dd = require('datadog-metrics');
dd.init({
  apiKey: 'your_api_key',
  appKey: 'your_app_key',
  prefix: 'workflow.'
});
function recordMetric(name, value) {
  dd.increment(name, value);
}
module.exports = { recordMetric };