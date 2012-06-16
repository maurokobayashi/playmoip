$(document).ready(function() {

    $('#tabsMoipHeader a:first').tab('show');

    $('#btnPlay').click(function() {
        var json = capturarDados();
        alert(JSON.stringify(json));
        
        var url = 'https://192.168.0.39/recorrente/services/orders/cd';
		var req = $.ajax({
			url: url,
			type: 'GET',
			dataType: 'jsonp',
            headers:{
				//"Accept": "application/json",
				//"Content-Type": "application/json"
                //"Authorization": "Basic N1hKTzFXVUE3Qk1JVlpUT1ZCOTBZTkpISk5QQ05YSEQ6N0dXSjJBNVNYSDI4UkNXRDVZQ0ozQlVIUldYRzRIT1BPWlBRMEJNSA=="
			},
            
			data: {"json": JSON.stringify(json)},
			//timeout: 30000,
			success: function(data, textStatus, jqXHR) {
                
                console.log(data);
                var mensagem = '';
                if(data.id_moip != undefined) {
                    mensagem += '<div class="alert alert-success"><strong>Sucesso!</strong> O pagamento foi criado com sucesso com o ID <strong>"';
                    mensagem += data.id_moip;
                    mensagem += '"</strong></div>';
                }
                else {
                    mensagem += '<div class="alert alert-error"><strong>Falha!</strong> Veja os erros:<br>';
                    mensagem += JSON.stringify(data);
                    mensagem += '</div>';
                }
                $('#mensagens').html(mensagem);
			},
		});
        
	});

    $('#dados_cofre').hide();
    $('#dados_risco').show();

    $('#ckbUsarCofre').change(function() {
        if($('#ckbUsarCofre').is(':checked')) {
            $('#dados_cartao').hide();
            $('#dados_cofre').show();
        }
        else {
	        $('#dados_cartao').show();
            $('#dados_cofre').hide();
        }
	});
	
    $('#ckbAnalisarRisco').change(function() {
        if($('#ckbAnalisarRisco').is(':checked')) {
            $('#dados_risco').show();
            $('#dados_portador').show();
            $('#dados_endereco').show();
        }
        else {
            $('#dados_risco').hide();
            $('#dados_portador').hide();
            $('#dados_endereco').hide();
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

        //dados do pagamento
        $('#token_cofre').val('07e3b5df-652d-48d7-8f37-be355f3824b3');
        $('#bandeira option').each(function() {
           if($(this).val() == 'VISA'){
               $(this).attr('selected',true);
           }
        });
        $('#numero_cartao').val('4073020000000002');
       $('#expiracao_mes option').each(function() {
           if($(this).val() == '3'){
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
        $('#portador_telefone_ddd').val('11');
        $('#portador_telefone').val('8045-6449');

        //dados do assinante
        $('#assinante_nome').val('Mauro Kobayashi');
        $('#assinante_email').val('mauro.kobayashi@gmail.com');
        $('#assinante_telefone_ddd').val('11');
        $('#assinante_telefone').val('8045-6449');
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

        //dados do pagamento
        $('#token_cofre').val('');
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
        $('#portador_telefone_ddd').val('');
        $('#portador_telefone').val('');

        //dados do assinante
        $('#assinante_nome').val('');
        $('#assinante_email').val('');
        $('#assinante_telefone_ddd').val('');
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
        var login_vendedor = $('#login_vendedor').val();
        var transacao_id_proprio = $('#transacao_id_proprio').val();
        var assinatura_id_proprio = $('#assinatura_id_proprio').val();
        var descricao = $('#descricao').val();
        var analisar_risco = $('#ckbAnalisarRisco').is(':checked');
        var ocorrencia = $('#ocorrencia').val();
        var periodicidade_quantidade = $('#periodicidade_quantidade').val();
        var periodicidade_unidade = $('#periodicidade_unidade').val();

        //dados cartão
        var usar_cofre = $('#ckbUsarCofre').is(':checked');
        var token_cofre = $('#token_cofre').val();
        var bandeira = $('#bandeira').val();
        var numero_cartao = $('#numero_cartao').val();
        var expiracao_mes = $('#expiracao_mes').val();
        var expiracao_ano = $('#expiracao_ano').val();
        var portador_nome = $('#portador_nome').val();
        var portador_cpf = $('#portador_cpf').val();
        var portador_nascimento = $('#portador_nascimento').val();
        var portador_telefone = '(' + $('#portador_telefone_ddd').val() + ') ' + $('#portador_telefone').val();

        //dados do assinante
        var assinante_id_proprio = $('#assinante_id_proprio').val();
        var assinante_nome = $('#assinante_nome').val();
        var assinante_email = $('#assinante_email').val();
        var assinante_telefone = '(' + $('#assinante_telefone_ddd').val() + ') ' + $('#assinante_telefone').val();
        var assinante_logradouro = $('#assinante_logradouro').val();
        var assinante_numero = $('#assinante_numero').val();
        var assinante_bairro = $('#assinante_bairro').val();
        var assinante_complemento = $('#assinante_complemento').val();
        var assinante_cidade = $('#assinante_cidade').val();
        var assinante_estado = $('#assinante_estado').val();
        var assinante_pais = $('#assinante_pais').val();
        var assinante_cep = $('#assinante_cep').val();

        var recurringCharge = {
        
            //billing : { //renomear!
                //charge: {
                    payment_form : 'CREDIT_CARD',
                    amount : valor,
                    //x1 : login_vendedor,
                    id : transacao_id_proprio,
                    subscription_id : assinatura_id_proprio,
                    description : descricao,
                    //x2 : analisar_risco,
                    occurrence : ocorrencia,
                    interval : periodicidade_quantidade,
                    //x3 : periodicidade_unidade,
                //},
                vault : token_cofre,
                credit_card: {
                    brand : bandeira,
                    number : numero_cartao,
                    expiration_month : expiracao_mes,
                    expiration_year : expiracao_ano,
                    holder : {
                        fullname : portador_nome,
                        cpf : portador_cpf,
                        phone : portador_telefone, //tem que separar!
                        //email : 
                        birthdate : portador_nascimento
                    }
                },
                subscriber : {
                    fullname : assinante_nome,
                    email : assinante_email,
                    cpf : portador_cpf, //replicado
                    phone : assinante_telefone, //tem que tirar!
                    subscriber_id : assinante_id_proprio,
                    //date : 
                    address : { //deveria estar no node do holder
                        street : assinante_logradouro,
                        number : assinante_numero,
                        complement : assinante_complemento,
                        district : assinante_bairro,
                        city : assinante_cidade,
                        state : assinante_estado,
                        country : assinante_pais,
                        zipcode : assinante_cep
                    }
                }
            //}
        };

        return recurringCharge;
    }

});
