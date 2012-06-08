var url = './mocks/planos.json';

var getAllPlans = $.ajax({
  url: url,
  type: 'GET',
  dataType: 'json',
//   jsonpCallback: 'cbk',
//   crossDomain: true,
//   isLocal: true,
  statusCode: {
    404: function() {
      alert("404: page not found");
    }
  },
  timeout: 30000 //30 segundos
});

getAllPlans.success(function(data, textStatus, jqXHR) {
  alert('SUCCESS: ' + textStatus + '\nJSON:\n' + JSON.stringify(data));
});

/*
getAllPlans.done(function(msg) {
	alert('DONE: ' + msg);
});

getAllPlans.fail(function(jqXHR, textStatus) {
  alert('FAIL: ' + textStatus );
});

getAllPlans.complete(function(jqXHR, textStatus) {
  alert('COMPLETED: ' + textStatus );
});

//do not works for jsonp requests
getAllPlans.error(function(jqXHR, textStatus, errorThrown) {
  alert('ERROR: ' + textStatus + '\nHTTP STATUS: ' + errorThrown );
});

getAllPlans.always(function() {
	alert('ALWAYS');
});
*/
getAllPlans;
