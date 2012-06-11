$(document).ready(function() {

    $('#dados_cofre').hide();

    $('#ckbUsarCofre').click(function() {
        if($('#ckbUsarCofre').is(':checked')) {
            $('#dados_cartao').hide();
            $('#dados_cofre').show();
        }
        else {
	        $('#dados_cartao').show();
            $('#dados_cofre').hide();
        }
	});

	$('#btnPreencher').click(function() {
	  preencherFormulario();
	});

    $('#btnLimpar').click(function() {
	  limparFormulario();
	});

    function preencherFormulario() {

        //dados da transação
        $('#valor').val(990);
        $('#login_vendedor').val('mauro.kobayashi');
        $('#transacao_id_proprio').val('cob1234');
        $('#assinatura_id_proprio').val('ass1234');
        $('#descricao').val('Cobranca teste');
        $('#analise_risco_sim').attr('checked', 'checked');
        $('#ocorrencia').val(1);
        $('#periodicidade_quantidade').val(1);
        $('#periodicidade_unidade option').each(function() {
           if($(this).val() == 'mes'){
               $(this).attr('selected',true);
           }
        });

        //dados cartão
        $('#bandeira option').each(function() {
           if($(this).val() == 'Visa'){
               $(this).attr('selected',true);
           }
        });
        $('#numero_cartao').val('4073020000000002');
       $('#expiracao_mes option').each(function() {
           if($(this).val() == 'Mar'){
               $(this).attr('selected',true);
           }
        });
        $('#expiracao_ano option').each(function() {
           if($(this).val() == '2015'){
               $(this).attr('selected',true);
           }
        });
        $('#portador_nome').val('Mauro Kobayashi');
        $('#portador_cpf').val('340.570.298-42');
        $('#portador_nascimento').val('29/04/1986');
        $('#portador_telefone').val('(11) 8045-6449');

        //dados do assinante
        $('#assinante_nome').val('Mauro Kobayashi');
        $('#assinante_email').val('mauro.kobayashi@gmail.com');
        $('#assinante_telefone').val('(11) 8045-6449');
        $('#assinante_id_proprio').val('mem1234');
        $('#assinante_logradouro').val('Rua Mandicununga');
        $('#assinante_numero').val('570');
        $('#assinante_bairro').val('Vila Sonia');
        $('#assinante_complemento').val('Casa');
        $('#assinante_cidade').val('Sao Paulo');
        $('#assinante_estado option').each(function() {
           if($(this).val() == 'SP'){
               $(this).attr('selected',true);
           }
        });
        $('#assinante_pais option').each(function() {
           if($(this).val() == 'BRA'){
               $(this).attr('selected',true);
           }
        });
        $('#assinante_cep').val('05619-010');

    }

    function limparFormulario() {

        //dados da transação
        $('#valor').val('');
        $('#login_vendedor').val('');
        $('#transacao_id_proprio').val('');
        $('#assinatura_id_proprio').val('');
        $('#descricao').val('');
        $('#analise_risco_sim').attr('checked', 'checked');
        $('#ocorrencia').val('');
        $('#periodicidade_quantidade').val('');
        $('#periodicidade_unidade option').each(function() {
           if($(this).val() == 'dia'){
               $(this).attr('selected',true);
           }
        });

        //dados cartão
        $('#bandeira option').each(function() {
           if($(this).val() == ''){
               $(this).attr('selected',true);
           }
        });
        $('#numero_cartao').val('');
        $('#expiracao_mes option').each(function() {
           if($(this).val() == ''){
               $(this).attr('selected',true);
           }
        });
        $('#expiracao_ano option').each(function() {
           if($(this).val() == ''){
               $(this).attr('selected',true);
           }
        });
        $('#portador_nome').val('');
        $('#portador_cpf').val('');
        $('#portador_nascimento').val('');
        $('#portador_telefone').val('');

        //dados do assinante
        $('#assinante_nome').val('');
        $('#assinante_email').val('');
        $('#assinante_telefone').val('');
        $('#assinante_id_proprio').val('');
        $('#assinante_logradouro').val('');
        $('#assinante_numero').val('');
        $('#assinante_bairro').val('');
        $('#assinante_complemento').val('');
        $('#assinante_cidade').val('');
        $('#assinante_estado option').each(function() {
           if($(this).val() == ''){
               $(this).attr('selected',true);
           }
        });
        $('#assinante_pais option').each(function() {
           if($(this).val() == ''){
               $(this).attr('selected',true);
           }
        });
        $('#assinante_cep').val('');

    }

    function capturarDados() {
        
        //dados da transação
        var valor = $('#valor').val();
        var loginVendedor = $('#login_vendedor').val();
        var transacao_id_proprio = $('#transacao_id_proprio').val();
        var assinatura_id_proprio = $('#assinatura_id_proprio').val();
        var descricao = $('#descricao').val();
        var analisar_risco = false;
        var ocorrencia = $('#ocorrencia').val();
        var periodicidade_quantidade = $('#periodicidade_quantidade').val();
        var periodicidade_unidade = $('#periodicidade_unidade').val();

        //dados cartão
        var instituicao = $('#instituicao').val();
        var numero_cartao = $('#numero_cartao').val();
        var expiracao_mes = $('#expiracao_mes').val();
        var expiracao_ano = $('# expiracao_ano').val();
        var portador_nome = $('#portador_nome').val();
        var portador_cpf = $('#portador_cpf').val();
        var portador_nascimento = $('#portador_nascimento').val();
        var portador_telefone = $('#portador_telefone').val();

        //dados do assinante
        var assinante_nome = $('#assinante_nome').val();
        var assinante_email = $('#assinante_email').val();
        var assinante_telefone = $('#assinante_telefone').val();
        var assinante_id_proprio = $('#assinante_id_proprio').val();
        var assinante_logradouro = $('#assinante_logradouro').val();
        var assinante_numero = $('#assinante_numero').val();
        var assinante_bairro = $('#assinante_bairro').val();
        var assinante_complemento = $('#assinante_complemento').val();
        var assinante_cidade = $('#assinante_cidade').val();
        var assinante_estado = $('#assinante_estado').val();
        var assinante_pais = $('#assinante_pais').val();
        var assinante_cep = $('#assinante_cep').val();
    }

});
