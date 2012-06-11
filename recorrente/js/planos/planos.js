var montarStatus = function(plano) {

	var labelStatus = '';

	if(plano.status == 'ativo') {
		labelStatus = '<span class="label label-success">ativo</span>';
	}
	else if (plano.status == 'inativo') {
		labelStatus = '<span class="label label-error">inativo</span>';
	}
	else if (plano.status == 'expirado') {
		labelStatus = '<span class="label label-error">expirado</span>';
	}
	else {
		labelStatus = '<span class="label label-inverse">desconhecido</span>';
	}
	
	return labelStatus;
};

var montarPreco = function(plano) {

	var preco = 'R$';
	preco += plano.price/100;

	return preco;
};

var montarPeriodicidade = function(plano) {

	var periodicidade = plano.periodicity.length;
	
	if(plano.periodicity.unit == 'day') {
		periodicidade += ' dia(s)';
	}
	else if(plano.periodicity.unit == 'month') {
		periodicidade += ' m&ecirc;s(es)';
	}
	else if(plano.periodicity.unit == 'year') {
		periodicidade += 'ano(s)';
	}
	
	return periodicidade;
};

$(document).ready(function() {

	$('#tabsPlanosHeader a:first').tab('show');

	
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
});