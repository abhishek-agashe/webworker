(function() {
  

  var startBtn = document.getElementById('start-btn');
  startBtn.addEventListener('mouseup', function(e) {
    talkToWorker();
  });
 
})();

function talkToWorker() {

  var worker = new Worker('worker1.js');
  var resultElm = document.getElementById('result');
  worker.postMessage({msg: 'dude', data:'I am main thread'});
  worker.addEventListener('message', function(e){
    console.log('data coming from wroker', e.data);
    resultElm.inerHTML = e.data.message;  
  });
}
