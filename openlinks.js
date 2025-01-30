document.querySelectorAll(".andes-card__content.row-card-container").forEach(function (e){ 
    if ((e.querySelector("div.primary-action > a > span > span") != null && typeof e.querySelector("div.primary-action > a > span > span") !== "undefined") && 
        (e.querySelector("div.primary-action > a > span > span").innerText == "Acompanhar o envio" ||
    e.querySelector("div.primary-action > a > span > span").innerText == "Adicionar dados fiscais" ||
    e.querySelector("div.primary-action > a > span > span").innerText == "Ver detalhe")
){

     var idVendaElem = e.querySelector("div.andes-card__content.row-card-container > div.identification-row >div.left-column > div.left-column__pack-id").innerText;
     //console.log(idVendaElem);
     var idVenda = idVendaElem.replace("#","");

     var linkVenda = "https:\/\/www.mercadolivre.com.br\/vendas\/" + idVenda +"/detalhe?callbackUrl=https%3A%2F%2Fwww.mercadolivre.com.br%2Fvendas%2Fomni%2Flista%3Fplatform.id%3DML%26channel%3Dmarketplace%26filters%3D%26sort%3DDATE_CLOSED_DESC%26page%3D1%26search%3D%26startPeriod%3DWITH_DATE_CLOSED_6M_OLD%26toCurrent%3D%26fromCurrent%3D"

     window.open(linkVenda); 

     //chrome.tabs.create( {url: linkVenda});
    }

    });