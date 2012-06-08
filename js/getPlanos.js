var url = './mocks/planos.json';

var getAllPlans = $.ajax({
  url: url,
  type: 'GET',
  dataType: 'json',
  //jsonpCallback: 'cbk',
  //crossDomain: true,
  statusCode: {
    404: function() {
      alert("404: page not found");
    }
  },
  timeout: 30000 //30 segundos
});

getAllPlans.success(function(planos, textStatus, jqXHR) {

	console.log(JSON.stringify(planos));
	
	var status='';
	var preco = '';
	var periodicidade = '';
	
	var retorno='';
	retorno += '<table class="table table-striped">'
	retorno += '    <thead>'
	retorno += '        <tr>'
	retorno += '            <th>c&oacute;digo</th>'
	retorno += '            <th>nome</th>'
	retorno += '            <th>descri&ccedil;&atilde;o</th>'
	retorno += '            <th>criado em</th>'
	retorno += '            <th>pre&ccedil;o</th>'
	retorno += '            <th>periodicidade</th>'
	retorno += '            <th>status</th>'
	retorno += '        </tr>'
	retorno += '    </thead>'
	retorno += '    <tbody>'
	
	$.each(planos, function(i, plano) {
	
		status = montarStatus(plano);
		preco = montarPreco(plano);
		periodicidade = montarPeriodicidade(plano);
		
		retorno += '    <tr>'
		retorno += '        <td id="id">'+plano.plan_code+'</td>'
		retorno += '        <td id="bandeira">'+plano.name+'</td>'
		retorno += '        <td>'+plano.description+'</td>'
		retorno += '        <td>'+plano.created_at+'</td>'
		retorno += '        <td>'+preco+'</td>'
		retorno += '        <td>'+periodicidade+'</td>'
		retorno += '        <td>'+plano.afiliacao+'</td>'
		retorno += '        <td>'+status+'</td>'
		retorno += '    </tr>'
    });
    
    retorno += '    <tbody>'
	retorno += '</table>'

	$("#results").html(retorno);
});

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
	preco += plano.price;

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


getAllPlans;


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
