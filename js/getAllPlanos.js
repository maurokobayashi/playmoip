$(document).ready(function() {

	$('a[data-toggle="tab"]').on('show', function (e) {
 		if(e.target.hash == '#getAll') {
 			getAllPlans();
 		}
 	})
 	
 		
	
	$('#PL1').popover({
		title: 'title',
		content: 'content'
	})
	
	function getAllPlans() {
		
		var url = './mocks/planos.json';
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			timeout: 30000,
			success: function(planos, textStatus, jqXHR) {
				montarResultado(planos);
			}
		});
	}
	
	var montarResultado = function(planos) {
	
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
			retorno += '        <td> <a id="' + plano.plan_code + '">'+plano.plan_code+'</a></td>'
			retorno += '        <td>'+plano.name+'</td>'
			retorno += '        <td>'+plano.description+'</td>'
			retorno += '        <td>'+plano.created_at+'</td>'
			retorno += '        <td>'+preco+'</td>'
			retorno += '        <td>'+periodicidade+'</td>'
			retorno += '        <td>'+status+'</td>'
			retorno += '    </tr>'
			
			
			$('#' + plano.plan_code).popover({
				title: plano.plan_code + ' - ' + plano.name,
				content: plano.description
			});
		});
		
		retorno += '    <tbody>'
		retorno += '</table>'
	
		$("#getAllResult").html(retorno);
	};
	
});