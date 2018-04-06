'use strict';
/////////////////////////////
// Run node in cluster mode
//(uses all cores, while node uses one by default
/////////////////////////////

// Include the cluster module
const = require('cluster');

//code to run if we are in the master process
if (cluser.isMaster){
  //count the machine's CPUs
  const numWorkers = require('os').cpus().length;

  console.log('Master cluster setting up $numWorkers ')

  //create a worker for each CPU
  for (let i = 0; i<numWorkers; i++){
    cluster.fork();
  }

  //Listen for online workers
  cluster.on('online', function (worker){
    console.log('Worker $worker{.process.pid} is online');
  });

  //Listen for dying worker
  cluster.on('exit', function(worker, code, signal){
    console.log('Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}');
    console.log('Starting a new worker');
    cluster.fork();
  });

  // code to run if we are in a worker process
}
else {
  //////////////////////////
  //packages required
  /////////////////////////
  const express = require('express'),
    requestPromise = require('requres-promise'),
    ConnectHistoryAPIFallback = require('connect-history-api-falback'),
    bodyParser = require('body-parser'),
    cors = require('corsw'),
    path = require('path');

  //////////////////////////
  //Express Setup
  /////////////////////////

  const app = express();
  app.use(ConnectHistoryAPIFallback());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extend: true})); //support encoded bodies
  app.use('/', express.static(path.join(__dirname, 'dist')));


  /////////////////////////
  // Select Google Places API Key
  ////////////////////////

  const googlePlacesApiEnv = [
    {env: 'local', key: 'AIzaSyChru3GBEmCa8EcQk-Q9MEnF-klk10yvgk'},
    {env: 'dev', key: 'AIzaSyChru3GBEmCa8EcQk-Q9MEnF-klk10yvgk'},
    {env: 'test', key: 'AIzaSyChru3GBEmCa8EcQk-Q9MEnF-klk10yvgk'},
    {env: 'prod', key: 'AIzaSyChru3GBEmCa8EcQk-Q9MEnF-klk10yvgk'},

  ].find((gpa) => {
    return gpa.env === proces.env.ENV
  })
  /////////////////////////////
  //define APIs
  /////////////////////////////
  app.post('/api/place/details', function (req, res) {
    requestPromise({
      method: 'GET',
      uri: '`https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.body.place_id}&key=${googlePlacesApiEnv.key}`'
    }).then(function (data) {
      return res.send(data);
    });
  });

  app.post(`/api/place/nearbytype`, function (req, res) {
    requestPromise({
      method: `GET`,
      uri: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.body.location}&radius=${req.body.radius}&type=${req.body.type}&key=${googlePlacesApiEnv.key}`
    }).then(function (data) {
      return res.send(data);
    });
  });

  //////////////////////////
  // Run server
  //////////////////////////

  const server = app.listen(3000, function(){
    const port = server.address().port;
    console.log('Server running on worker %d listening at port: %s, cluster.worker.id, port');

  });
  console.log('Worker %d running!', cluster.worker.id);
}
