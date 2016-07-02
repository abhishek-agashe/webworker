(function(){
  self.addEventListener('message', function(e) {
      self.postMessage({'msg': 'got it', 'data': 'workers/I am awesome!!'});
      console.log('DATA from main to eorker' + JSON.stringify(e.data));
      if(e.data.msg === 'error') {
        throw new Error('an error occured in worker1...');
      }
  });
})();
