$(document).ready(function() {

	$('#tabsTransparenteHeader a:first').tab('show');
	document.activeTab = '#cartao';
	
	$('a[data-toggle="tab"]').on('show', function (e) {
 		document.activeTab = e.target.hash;
 	})
	
	$("#btnPlay").click(function() {
	
	$("#MoipWidget").attr("data-token", $("#inputToken").val());
    	
    	if(document.activeTab == '#cartao') {
    		pagarComCartao();
    	}
	});
	
});

var pagarComCartao = function() {
		
	var pagamento = {
		"Forma": "CartaoCredito",
		"Instituicao": $("#instituicao").val(),
		"Parcelas": $("#parcelas").val(),
		"Recebimento": "AVista",
		"CartaoCredito": {
			"Numero": $("#numero").val(),
			"Expiracao": $("#expiracao").val(),
			"CodigoSeguranca": $("#cvv").val(),
			"Portador": {
				"Nome": $("#portador").val(),
				"DataNascimento": $("#nascimento").val(),
				"Telefone": $("#telefone").val(),
				"Identidade": $("#cpf").val()
			}
		}
	}
	
	MoipWidget(pagamento);
 };


var sucesso = function(data) {

	console.log(JSON.stringify(data));
	
	var mensagem = 'Pagamento <b>' + data.CodigoMoIP + '</b> com status <b>"' + data.Status + '"</b> realizado com sucesso.';
	var retorno = '';
	retorno += '<div class="alert alert-success">\n';
	retorno += '<a class="close" data-dismiss="alert" href="#">x</a>\n';
	retorno += mensagem + '\n';
	if(data.Status == 'Cancelado') {
		retorno += '<br>Motivo do cancelamento: ' + data.Classificacao.descricao;
	}
	retorno += '</div>\n';
	
	
	$("#results").html(retorno);
};

var erro = function(erros) {

	console.log(JSON.stringify(erros));
	
	var retorno = '';
	
	if(erros.StatusPagamento  == 'Falha') {
	
		var mensagem = erros.Codigo + ' - ' + erros.Mensagem;
		retorno += '<div class="alert alert-error">\n';
		retorno += '<a class="close" data-dismiss="alert" href="#">x</a>\n';
		retorno += mensagem + '\n';
		retorno += '</div>\n';
	}
	else {
		$.each(erros, function(i, erro) {
			
			var mensagem = erro.Codigo + ' - ' + erro.Mensagem;
			retorno += '<div class="alert alert-error">\n';
			retorno += '<a class="close" data-dismiss="alert" href="#">x</a>\n';
			retorno += mensagem + '\n';
			retorno += '</div>\n';
		});
	}
	
	$("#results").html(retorno);
};