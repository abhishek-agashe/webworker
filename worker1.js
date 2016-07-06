(function(){
  self.addEventListener('message', function(e) {
      console.log('DATA from main to eorker' + JSON.stringify(e.data));
      window.localStorage.setItem('foo','Abhishek');
      self.postMessage({'msg': 'got it', 'data': 'workers/I am awesome!!'});
      
      var x = s + 23;
  });
})();
