$(document).ready(function(){
     $.getJSON("https://autosector.com/get_coin_data.php?type=get_key", function(data) {
        var markets = data.data;
     });
});