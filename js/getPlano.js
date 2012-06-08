$(document).ready(function() {

	$('#btnGetPlano').click(function() {
	  getPlan();
	});
	
	function getPlan() {
	
		var url = './mocks/planos.json';
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			//jsonpCallback: 'cbk',
			//crossDomain: true,
			statusCode: {
				404: function() {
				  console.log("404: page not found");
				}
			},
			timeout: 30000, //30 segundos
			success: function(planos, textStatus, jqXHR) {
			
				var codigoPlano = $('#inputGetPlano').val();
				
				$.each(planos, function(i, plano) {
					if(plano.plan_code == codigoPlano) {
						montarResultado(plano);
					}
				});
			}
		});
	}
	
	var montarSemResultado = function() {
	
		var codigoPlano = $('#inputGetPlano').val();
		var retorno = '';
		
		retorno += 'N&atilde;o houve resultados para o plano ' + codigoPlano;
	
		$("#getResult").html(retorno);
	};
	
	var montarResultado = function(plano) {
	
		var status='';
		var preco = '';
		var periodicidade = '';
		
		var retorno='';
		retorno += '<table class="table table-striped">';
		retorno += '    <thead>';
		retorno += '        <tr>';
		retorno += '            <th>c&oacute;digo</th>';
		retorno += '            <th>nome</th>';
		retorno += '            <th>descri&ccedil;&atilde;o</th>';
		retorno += '            <th>criado em</th>';
		retorno += '            <th>pre&ccedil;o</th>';
		retorno += '            <th>periodicidade</th>';
		retorno += '            <th>status</th>';
		retorno += '        </tr>';
		retorno += '    </thead>';
		retorno += '    <tbody>';
		
		status = montarStatus(plano);
		preco = montarPreco(plano);
		periodicidade = montarPeriodicidade(plano);
		
		retorno += '       <tr>';
		retorno += '           <td id="id">'+plano.plan_code+'</td>';
		retorno += '           <td id="bandeira">'+plano.name+'</td>';
		retorno += '           <td>'+plano.description+'</td>';
		retorno += '           <td>'+plano.created_at+'</td>';
		retorno += '           <td>'+preco+'</td>';
		retorno += '           <td>'+periodicidade+'</td>';
		retorno += '           <td>'+status+'</td>';
		retorno += '       </tr>';
		retorno += '    <tbody>';
		retorno += '</table>';
	
		$("#getResult").html(retorno);
	};
	
});