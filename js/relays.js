(function(){

  var channel1 = 'relay1';
  var channel2 = 'relay2';
  var channel3 = 'relay3';
  var channel4 = 'relay4';

  var pubnub = PUBNUB.init({
      subscribe_key: 'sub-c-e0192522-094f-11e7-b8f1-0619f8945a4f',
      publish_key:   'pub-c-aa7ae9c5-6b57-4325-958c-12db93bc3ad5'
  });

  var relaystate1 = true;
  var relaystate2 = true;
  var relaystate3 = true;
  var relaystate4 = true;

  var relay1 = document.getElementById("relay1");
  var relay2 = document.getElementById("relay2");
  var relay3 = document.getElementById("relay3");
  var relay4 = document.getElementById("relay4");

  relay1.addEventListener('click', function(e) {
        pubnub.publish({
	channel: channel1,
	message: {relay1: relaystate1},
	callback: function(m){
			console.log(m);
			relaystate1 = !relaystate1;
			relay1.textContent = (relaystate1) ? 'OFF' : 'ON';
		}	
	});

  });

  relay2.addEventListener('click', function(e) {
        pubnub.publish({
	channel: channel2,
	message: {relay2: relaystate2},
	callback: function(m){
			console.log(m);
			relaystate2 = !relaystate2;
			relay2.textContent = (relaystate2) ? 'OFF' : 'ON';
		}	
	});

  });

  relay3.addEventListener('click', function(e) {
        pubnub.publish({
	channel: channel3,
	message: {relay3: relaystate3},
	callback: function(m){
			console.log(m);
			relaystate3 = !relaystate3;
			relay3.textContent = (relaystate3) ? 'OFF' : 'ON';
		}	
	});

  });

  relay4.addEventListener('click', function(e) {
        pubnub.publish({
	channel: channel4,
	message: {relay4: relaystate4},
	callback: function(m){
			console.log(m);
			relaystate4 = !relaystate4;
			relay4.textContent = (relaystate4) ? 'OFF' : 'ON';
		}	
	});

  });



})();