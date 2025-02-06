
var dadosNfe = "";
var price = 0;
var productName = "";
var divLoja = "";
var cliente = "";

data_venda = "#";
nome_produto = "#";
imei_produto = "#";
valor_venda = "0";
taxa_venda = "0";
valor_enf = "0";
taxa_envio = "0";
valor_liquido = "0";
codigo_venda = "#";
nome_comprador = "#";
id_ml = "#";
cpf_cnpj_comprador = "#";
uf_comprador = "#";
loja_ml = "#";

function enviarDados(){
    var dadosNfeHtml = document.getElementsByClassName("sc-title-subtitle-action__label")[0];
    var teste = document.getElementsByClassName("sc-title-subtitle-action__container sc-title-subtitle-action__account-")[0];
    var divCliente = document.getElementsByClassName("sc-title-subtitle-action__container sc-title-subtitle-action__account-")[0];
    var divProduto = document.getElementsByClassName("sc-title-subtitle-action__label")[1];
    var divLojaHtml = document.getElementsByClassName("user-menu-evolution__user-badge-title")[0];



   data_venda_get = document.querySelector("div.sc-account-module > div.sc-account-title > div > div.sc-account-title__subtext");
   nome_produto_get = document.querySelector("div.sc-title > a > div > div > div.sc-title-subtitle-action__label");
   imei_produto_get = document.getElementsByClassName("user-teste-undefined")[0];
   valor_venda_get = document.getElementsByClassName("sc-account-rows__row__subTotal")[0];
   taxa_venda_get = document.getElementsByClassName("sc-account-rows__row__subTotal")[1];
   valor_enf_get = document.getElementsByClassName("user-teste-undefined")[0];
   taxa_envio_get = document.getElementsByClassName("sc-account-rows__row__subTotal")[2];
   valor_liquido_get = document.getElementsByClassName("sc-account-rows__row__price--container")[0];
   codigo_venda_get = document.querySelector("#root-app > div.sc-view-detail > div.sc-detail-section > div > div.sc-detail-title > div > p");
   nome_comprador_get = document.getElementsByClassName("sc-title-subtitle-action__label")[0];
   id_ml_get = document.getElementsByClassName("sc-title-subtitle-action__container sc-title-subtitle-action__account-")[0];
   cpf_cnpj_comprador_get = document.getElementsByClassName("sc-title-subtitle-action__container sc-title-subtitle-action__account-")[0];
   uf_comprador_get = document.getElementsByClassName("user-teste-undefined")[0];
   loja_ml_get = document.getElementsByClassName("user-menu-evolution__user-badge-title")[0];



   //Esse if usa o campo do codigo da venda que tambem tem datacao como uma opcao melhor
   if(typeof codigo_venda_get !== "undefined" && codigo_venda_get != null) {
      data_venda_aux = codigo_venda_get.innerText;

      const regex = /(\d{1,2}) (\w{3})/;

      const match = data_venda_aux.match(regex);
      data_venda = match[0].replace(/,/g, '.');
   } //caso nao encontre ai vai pra outro campo como uma segunda opcao
   else if(typeof data_venda_get !== "undefined" && data_venda_get != null) {
      console.log("data_venda_get ---- " + data_venda_get)
      data_venda = data_venda_get.innerText;

      data_venda_aux =  data_venda.split("|");
      data_venda_aux =  data_venda_aux[1];
      data_venda_aux =  data_venda_aux.trim();
      data_venda =  data_venda_aux.replace(/,/g, '.');
   }
   
   if (typeof nome_produto_get !== "undefined" && nome_produto_get != null) {
      nome_produto = nome_produto_get.innerText;
      //nome_produto = nome_produto_get.replace(/,/g, '.');
   }

   if (typeof imei_produto_get !== "undefined" && imei_produto_get != null) {
      imei_produto = imei_produto_get.innerText;
     // imei_produto = imei_produto.replace(/,/g, '.');
   }

   if (typeof valor_venda_get !== "undefined" && valor_venda_get != null) {
      valor_venda = valor_venda_get.innerText;
      valor_venda = valor_venda.replace(/,/g, '.').replaceAll('R$ ', '');
   }

   if (typeof taxa_venda_get !== "undefined" && taxa_venda_get != null) {
      taxa_venda = taxa_venda_get.innerText;
      taxa_venda = taxa_venda.replace(/,/g, '.').replace(/-/g, '').replaceAll('R$ ', '');
   }

   if (typeof valor_enf_get !== "undefined" && valor_enf_get != null) {
      valor_enf = valor_enf_get.innerText;
      //valor_enf = valor_enf.replace(/,/g, '.');
   }

   if (typeof taxa_envio_get !== "undefined" && taxa_envio_get != null) {
      taxa_envio = taxa_envio_get.innerText;
      taxa_envio = taxa_envio.replace(/,/g, '.').replace(/-/g, '').replaceAll('R$ ', '');
   }

   if (typeof valor_liquido_get !== "undefined" && valor_liquido_get != null) {
      valor_liquido = valor_liquido_get.innerText;
      valor_liquido = valor_liquido.replace(/,/g, '.').replaceAll('R$ ', '');
   }

   if (typeof codigo_venda_get !== "undefined" && codigo_venda_get != null) {
      codigo_venda = codigo_venda_get.innerText;

      const regex = /#(\d+)/;


      const match = codigo_venda.match(regex);
      //console.log("CodVenda: " + match[0]);
      codigo_venda = match[0].replace(/,/g, '.');


      //codigo_venda = codigo_venda.replace(/,/g, '.');
   }

   if (typeof nome_comprador_get !== "undefined" && nome_comprador_get != null) {
      nome_comprador = nome_comprador_get.innerText;
      //nome_comprador = nome_comprador.replace(/,/g, '.');
   }

   if (typeof id_ml_get !== "undefined" && id_ml_get != null) {
      id_ml = id_ml_get.innerText;

      id_ml_aux = id_ml.split("|");
      id_ml_aux = id_ml_aux[0];
      id_ml_aux = id_ml_aux.replaceAll(' ', '');
      id_ml = id_ml_aux.replace(/,/g, '.');
      //id_ml = id_ml.replace(/,/g, '.');
   }

   if (typeof cpf_cnpj_comprador_get !== "undefined" && cpf_cnpj_comprador_get != null) {
      cpf_cnpj_comprador = cpf_cnpj_comprador_get.innerText;

      const regex = /(\d{11,14})/;

      cpfCnpj = cpf_cnpj_comprador.split("|");
      cpfCnpj = cpfCnpj[1];
      cpfCnpj = cpfCnpj.replaceAll(' ', '');

      const match = cpfCnpj.match(regex);
      //console.log("CNPJ: " + match[0]);
      cpf_cnpj_comprador = match[0].replace(/,/g, '.');
      cpf_cnpj_comprador = "=\"" + cpf_cnpj_comprador + "\"";
      //cpf_cnpj_comprador = cpf_cnpj_comprador.replace(",", " ");
   }

   if (typeof uf_comprador_get !== "undefined" && uf_comprador_get != null) {
      uf_comprador = uf_comprador_get.innerText;
      //uf_comprador = uf_comprador.replace(/,/g, '.');
   }

   if (typeof loja_ml_get !== "undefined" && loja_ml_get != null) {
      loja_ml = loja_ml_get.innerText;
      loja_ml = loja_ml.replace(/,/g, '.');
   }



    if (typeof teste !== "undefined" && typeof dadosNfe !== "undefined") {
       // productName = divProduto.innerText
        price = "Cliente: "+ teste.innerText;
        dadosNfe = dadosNfeHtml.innerText;
        productName = divProduto.innerText;
        divLoja = divLojaHtml.innerText;
    }

   // console.log(price)
    //console.log("exec")

    //return price;

    return new Promise((resolve, reject) => {
           const successObject = {
               aDataVenda: data_venda,
               bNomeProduto: nome_produto,
               cImei: imei_produto,
               dValor_venda: valor_venda,
               eTaxa_venda: taxa_venda,
               fValorNf: valor_enf,
               gValorEnvio: taxa_envio,
               hValorLiquido: valor_liquido,
               iCodigoVenda: codigo_venda,
               jNomeComprador: nome_comprador,
               kIdMl: id_ml,
               lCpfCnpj: cpf_cnpj_comprador,
               mUF: uf_comprador,
               nLoja: loja_ml
           }
           resolve(successObject); 

     });
}
enviarDados();