(function(){
  // self.addEventListener('message', function(e) {
  //     console.log('DATA from main to eorker' + JSON.stringify(e.data));
  //     self.postMessage({'msg': 'got it', 'data': 'workers/I am awesome!!'});
      
  //     var x = s + 23;
  // });
  console.log('Wroker1 is ready to respond');
  self.addEventListener('fetch', function(e) {
      console.log('worker1 heard the fetch event');
      e.respondWith(new Response('hello am I am worker'));
  });
})();
