  $('input[id="LED1"]').on('switchChange.bootstrapSwitch', function(event, state) {
    	relaystate == event;
	console.log(event);
});
  
  pubnub.publish({
      channel: channel2,
      message: {relay: relaystate}
      callback: function(m){
           console.log(m);
      }
});
