(function(){
  var channel5 = 'arm';

  var pubnub = PUBNUB.init({
      subscribe_key: 'sub-c-e0192522-094f-11e7-b8f1-0619f8945a4f',
      publish_key:   'pub-c-aa7ae9c5-6b57-4325-958c-12db93bc3ad5'
  });

  var armstate = true;

  var arm = document.getElementById("arm");

  arm.addEventListener('click', function(e) {
        pubnub.publish({
	channel: channel5,
	message: {arm: armstate},
	callback: function(m){
			console.log(m);
			armstate = !armstate;
			arm.textContent = (armstate) ? 'MOTION OFF' : 'MOTION ON';
		}	
	});

  });

})();