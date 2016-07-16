(function() {
  

  var startBtn = document.getElementById('start-btn');
  var errorBtn = document.getElementById('error-btn');
  var terminateBtn = document.getElementById('terminate-btn');
  var worker = new Worker('worker1.js');
  fetch('https://i.imgur.com/NruwA2a.gif').then(function(response){
    return response.json();
  }).then(function(data){
    console.log(data);
  });
  startBtn.addEventListener('mouseup', function(e) {
    talkToWorker(worker);
  });
  startBtn.addEventListener('mouseup', function(e) {
    handleError(worker);
 });
 terminateBtn.addEventListener('mouseup', function(e){
    stopWorker(worker);
 });
})();

function talkToWorker(worker) {

  
  var resultElm = document.getElementById('result');
  worker.postMessage({msg: 'dude', data:'I am main thread'});
  worker.addEventListener('message', function(e){
    console.log('data coming from wroker', e.data);
    console.log(window.localStorage.getItem('foo'));
    resultElm.inerHTML = e.data.message;  
  });
}

function handleError(worker) {
  var errorElm = document.getElementById('error');
  worker.postMessage({msg:'error'});
  worker.addEventListener('error', function(e){
      console.log('ERROR ' + JSON.stringify(e));
      errorElm.textContent =  e.fileno + ' ' + e.message + ' '+ e.filename;
  });
}

function stopWorker(worker) {
  worker.terminate();
}
