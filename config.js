(function() {
  
  if (process.env.INFLUXDB_HOST !== undefined) {
    var host = process.env.INFLUXDB_HOST;
  } else if (process.env.INFLUXDB_MASTER_SERVICE_HOST !== undefined) {
    var host = process.env.INFLUXDB_MASTER_SERVICE_HOST;
  } else {
    var host = "127.0.0.1";
  }
  
  if (process.env.INFLUXDB_PORT !== undefined) {
    var port = parseInt(process.env.INFLUXDB_PORT);
  } else if (process.env.INFLUXDB_MASTSER_SERVICE_PORT !== undefined) {
    var port = parseInt(process.env.INFLUXDB_MASTER_SERVICE_PORT);
  } else {
    var port = 8086;
  }
  
  return {
    influxdb: {
      host: host,
      port: port,
      database: process.env.INFLUXDB_DATABASE || "site_dev",
      username: process.env.INFLUXDB_USERNAME || "root",
      password: process.env.INFLUXDB_PASSWORD || "root",
      flush: {
        enable: true
      },
      proxy: {
        enable: false,
        suffix: 'raw',
        flushInterval: 1000
      }
    },
    port: parseInt(process.env.STATSD_PORT) || 8125,
    debug: process.env.STATSD_DEBUG || false,
    backends: ['statsd-influxdb-backend'],
  };
  
})();

