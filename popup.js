let currency = "USD";
let coinData = {};

//API Call
var apiCall = function() {
    $.ajax({
    url: 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=NEO,GAS&tsyms=USD,BTC,EUR',
    type: 'GET',
    data: 'json',
    dataType: 'json',
    success: function (data) {
    console.log(data);
        // USD
        coinData.neoPriceUSD = data.DISPLAY.NEO.USD.PRICE;
        coinData.neoChangeUSD = data.DISPLAY.NEO.USD.CHANGEPCTDAY;
        coinData.neoPlaceUSD = data.DISPLAY.NEO.USD.LASTMARKET;
        coinData.neoTimeUSD = data.DISPLAY.NEO.USD.LASTUPDATE;
        coinData.gasPriceUSD = data.DISPLAY.GAS.USD.PRICE;
        coinData.gasChangeUSD = data.DISPLAY.GAS.USD.CHANGEPCTDAY;
        coinData.gasPlaceUSD = data.DISPLAY.GAS.USD.LASTMARKET;
        coinData.gasTimeUSD = data.DISPLAY.GAS.USD.LASTUPDATE;
        // EUR
        coinData.neoPriceEUR = data.DISPLAY.NEO.EUR.PRICE;
        coinData.neoChangeEUR = data.DISPLAY.NEO.EUR.CHANGEPCTDAY;
        coinData.neoPlaceEUR = data.DISPLAY.NEO.EUR.LASTMARKET;
        coinData.neoTimeEUR = data.DISPLAY.NEO.EUR.LASTUPDATE;
        coinData.gasPriceEUR = data.DISPLAY.GAS.EUR.PRICE;
        coinData.gasChangeEUR = data.DISPLAY.GAS.EUR.CHANGEPCTDAY;
        coinData.gasPlaceEUR = data.DISPLAY.GAS.EUR.LASTMARKET;
        coinData.gasTimeEUR = data.DISPLAY.GAS.EUR.LASTUPDATE;
        // BTC
        coinData.neoPriceBTC = data.DISPLAY.NEO.BTC.PRICE;
        coinData.neoChangeBTC = data.DISPLAY.NEO.BTC.CHANGEPCTDAY;
        coinData.neoPlaceBTC = data.DISPLAY.NEO.BTC.LASTMARKET;
        coinData.neoTimeBTC = data.DISPLAY.NEO.BTC.LASTUPDATE;
        coinData.gasPriceBTC = data.DISPLAY.GAS.BTC.PRICE;
        coinData.gasChangeBTC = data.DISPLAY.GAS.BTC.CHANGEPCTDAY;
        coinData.gasPlaceBTC = data.DISPLAY.GAS.BTC.LASTMARKET;
        coinData.gasTimeBTC = data.DISPLAY.GAS.BTC.LASTUPDATE;
        // Display
        changeCurrency();
    },
    error: function (request, error) {
        console.log(error);
    }
});
}

// Make initial call
apiCall();

// Change Currency 
var changeCurrency = function() {
    if (currency == "USD") {
        $(".neo_price").text(coinData.neoPriceUSD);
        $(".neo_change").text(coinData.neoChangeUSD + "% today");
        $(".neo_place").text(coinData.neoPlaceUSD);
        $(".neo_time").text(coinData.neoTimeUSD);
        $(".gas_price").text(coinData.gasPriceUSD);
        $(".gas_change").text(coinData.gasChangeUSD + "% today");
        $(".gas_place").text(coinData.gasPlaceUSD);
        $(".gas_time").text(coinData.gasTimeUSD);
    } else if (currency == "EUR") {
        $(".neo_price").text(coinData.neoPriceEUR);
        $(".neo_change").text(coinData.neoChangeEUR + "% today");
        $(".neo_place").text(coinData.neoPlaceEUR);
        $(".neo_time").text(coinData.neoTimeEUR);
        $(".gas_price").text(coinData.gasPriceEUR);
        $(".gas_change").text(coinData.gasChangeEUR + "% today");
        $(".gas_place").text(coinData.gasPlaceEUR);
        $(".gas_time").text(coinData.gasTimeEUR);
    } else if (currency == "BTC") {
        $(".neo_price").text(coinData.neoPriceBTC);
        $(".neo_change").text(coinData.neoChangeBTC + "% today");
        $(".neo_place").text(coinData.neoPlaceBTC);
        $(".neo_time").text(coinData.neoTimeBTC);
        $(".gas_price").text(coinData.gasPriceBTC);
        $(".gas_change").text(coinData.gasChangeBTC + "% today");
        $(".gas_place").text(coinData.gasPlaceBTC);
        $(".gas_time").text(coinData.gasTimeBTC);
    }
    console.log("Currency values updated")
}

// Click Events 
$('#refresh').click(function(){
    apiCall();
});

$('#usdPill').click(function(){
    currency = "USD";
    $(this).addClass("active");
    $("#eurPill").removeClass("active");
    $("#btcPill").removeClass("active");
    changeCurrency();
});

$('#eurPill').click(function(){
    currency = "EUR";
    $(this).addClass("active");
    $("#usdPill").removeClass("active");
    $("#btcPill").removeClass("active");
    changeCurrency();
});

$('#btcPill').click(function(){
    currency = "BTC";
    $(this).addClass("active");
    $("#usdPill").removeClass("active");
    $("#eurPill").removeClass("active");
    changeCurrency();
});
