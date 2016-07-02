(function() {
  

  var startBtn = document.getElementById('start-btn');
  var errorBtn = document.getElementById('error-btn');
  var terminateBtn = document.getElementById('terminate-btn');
  var worker = new Worker('worker1.js');
  startBtn.addEventListener('mouseup', function(e) {
    talkToWorker(worker);
  });
 startBtn.addEventListener('mouseup', fuunction(e) {
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
    resultElm.inerHTML = e.data.message;  
  });
}

function handleError(worker) {
  var errorElm = document.getElementById('error');
  worker.postMessage('error', function(e){
      console.log(e.data);
      errorElm.textContent =  e.data;
  });
}

function stopWorker(worker) {
  worker.terminate();
}
