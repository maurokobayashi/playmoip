var url = './mocks/planos.json';

$.getJSON(url, function(data) {

	console.log(JSON.stringify(data));

	var planos = data;
	
	var status='';
	var preco = '';
	var periodicidade = '';
	var qtd = planos.length;
	
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

	for (i = 0; i < qtd; i++){

		status = montarStatus(planos[i]);
		preco = montarPreco(planos[i]);
		periodicidade = montarPeriodicidade(planos[i]);
		
		retorno += '    <tr>'
		retorno += '        <td id="id">'+planos[i].plan_code+'</td>'
		retorno += '        <td id="bandeira">'+planos[i].name+'</td>'
		retorno += '        <td>'+planos[i].description+'</td>'
		retorno += '        <td>'+planos[i].created_at+'</td>'
		retorno += '        <td>'+preco+'</td>'
		retorno += '        <td>'+periodicidade+'</td>'
		retorno += '        <td>'+planos[i].afiliacao+'</td>'
		retorno += '        <td>'+status+'</td>'
		retorno += '    </tr>'
	}

	retorno += '    <tbody>'
	retorno += '</table>'

	$("#results").html(retorno);
});

var monstarStatus = function(plano) {

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