(function(){
  self.addEventListener('message', function(e) {
      self.postMessage({'msg': 'got it', 'data': 'workers/I am awesome!!'});
  });
})();
