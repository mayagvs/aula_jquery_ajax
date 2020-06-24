function consultaCep() {
  $(".barra-progresso").show(); //exibe a barra de progresso
  var cep = document.getElementById("cep").value;
  var url = "https://viacep.com.br/ws/" + cep + "/json/";
  console.log(url);
  $.ajax({
    url: url,
    type: "GET",
    success: function (response) {
      console.log(response);
      $("#logradouro").html(response.logradouro);
      $("#bairro").html(response.bairro);
      $("#localidade").html(response.localidade);
      $("#uf").html(response.uf);
      $("#titulo_cep").html("CEP " + response.cep);
      $(".cep").show();
      $(".barra-progresso").hide(); //exibe a barra de progresso
    },
  });
}
$(function () {
  $(".cep").hide();
  $(".barra-progresso").hide(); //oculta a barra de progresso
});
