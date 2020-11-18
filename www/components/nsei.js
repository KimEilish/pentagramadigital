// This is a JavaScript file
$(document).on("click","#cadastrar",function()
{
  if($(this).html() == "Atualizar")
  {
    var dados = 
    {
      "cd": $('#cd').val(),
      "nome": $('#nome').val(),
      "email": $('#email').val(),
      "senha": $('#senha').val()
    }
     $.ajax
    ({
        url: 'http://profrodolfo.com.br/webservice/index.php',
        data: dados,
        type: 'post',
        success:function(retorno)
        {
          navigator.notification.alert(retorno);
          
       
        },
        error: function(retorno)
        {
          navigator.notification.alert("Erro de Atualização");
          
          
        }
    })

  }
  else
  {
      var dados = 
    {
      "nome": $('#nome').val(),
      "email": $('#email').val(),
      "senha": $('#senha').val()
    }
    $.ajax
    ({
        url: 'http://profrodolfo.com.br/webservice/index.php',
        data: dados,
        type: 'post',
        success:function(retorno)
        {
          navigator.notification.alert(retorno);
          
          
        },
        error: function(retorno)
        {
          navigator.notification.alert("Erro de Cadastro");
          
         
        },
    })
  }

});

