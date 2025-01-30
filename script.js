const form = document.querySelector('form');
const info = document.getElementById('bt_info');
const btCopy = document.getElementById('bt_copy');
//const btCsv = document.getElementById('bt_csv');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    openAllTabs();
});


info.addEventListener('click',  (e) => {
    e.preventDefault();
    executeFunc();
});

btCopy.addEventListener('click',  (e) => {
    e.preventDefault();
    executeCopy();
});

//recebe todos resultados
var results = [];

// Function to download the CSV file
const download = (data) => {
    
    //Set Default Charset TKS JulianoGTZ
    const BOM = '\uFEFF';
    let csvArray = BOM;
    csvArray += data;

    // Create a Blob with the CSV data and type
    const blob = new Blob([csvArray], { type: 'text/csv; charset=utf-8' });
    
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);
    
    // Create an anchor tag for downloading
    const a = document.createElement('a');
    
    // Set the URL and download attribute of the anchor tag
    a.href = url;
    a.download = 'download.csv';
    
    // Trigger the download by clicking the anchor tag
    a.click();
}


const csvmaker = function (data) {
    // Empty array for storing the values
    csvRows = [];

    // Headers is basically a keys of an object which 
    // is id, name, and profession
    const headers = Object.keys(data[0]);

    // As for making csv format, headers must be
    // separated by comma and pushing it into array
    csvRows.push(headers.join(','));

    // Pushing Object values into the array with
    // comma separation

    // Looping through the data values and make
    // sure to align values with respect to headers
    for (const row of data) {
        const values = headers.map(e => {

            if(e != null){
                return row[e]
            }else{
                return "##"
            }
        })
        csvRows.push(values.join(','))
    }

    // const values = Object.values(data).join(',');
    // csvRows.push(values)

    // returning the array joining with new line 
    return csvRows.join('\n')
}


// Asynchronous function to fetch data and download the CSV file
const get = async () => {
    
    // Create the CSV string from the data
    const csvdata = csvmaker(results);
    
    // Download the CSV file
    download(csvdata);
}

// Add a click event listener to the button with ID 'action'
document.getElementById('action').addEventListener('click', get);


function setText(resultado){
    //console.log(resultado);
    results.push(resultado[0].result);
    

        document.getElementById("story").value += "Processando Venda: " + resultado[0].result.iCodigoVenda + "\n";
    
        // Create the CSV string from the data
        const csvdata = csvmaker(results);
    
        // Download the CSV file
        //download(csvdata);
    console.log(csvmaker(results))
}

function openAllTabs() {

    chrome.tabs.query({
        active: true,
        currentWindow: true
      }, ([currentTab]) => {
        chrome.scripting.executeScript({
            target: {tabId: currentTab.id},
            files : [ "openlinks.js" ],
           }).then(() => console.log("injected script file"));
      });

}


function executeFunc(){

    chrome.tabs.query({currentWindow: true}, function(tabs) {
        tabs.forEach(function(tab) {
            console.log('Tab ID: ', tab.url);
            var re = /https:\/\/www\.mercadolivre\.com\.br\/vendas\/\d+\/detalhe.+/g;
            if(re.test(tab.url)){
                getAllTabs(tab,tab.id);
            }
        });
    
    });
    
    }

    function executeCopy(){

        var textData = document.getElementById('story');
        textData.select();
        document.execCommand('copy');


    }
    
    async function getAllTabs(tabChromeTab,chromeTabId) {

          const price = await chrome.scripting.executeScript({
            target: {tabId: chromeTabId},
            files : [ "getinfo.js" ],
           }).then(setText);


    }
    