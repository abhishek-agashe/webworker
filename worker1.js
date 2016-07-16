(function(){
  // self.addEventListener('message', function(e) {
  //     console.log('DATA from main to eorker' + JSON.stringify(e.data));
  //     self.postMessage({'msg': 'got it', 'data': 'workers/I am awesome!!'});
      
  //     var x = s + 23;
  // });
  self.addEventListener('fetch', function(e) {
      console.log(e.request);
      e.respondWith('hello am I am worker');
  });
})();
