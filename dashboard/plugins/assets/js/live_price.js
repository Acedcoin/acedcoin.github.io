
$(document).ready(function(){
    var table;
    var currency="usd";
    //function load_price_table(currency) {
    //if(table)table.fnDestroy();
    table=$('#compact').DataTable({
        "ajax": 'https://autosector.com/get_coin_data.php?type=table&currency='+$("#currency1").val()
    });
    //}
    // load_price_table("usd");
    $("#currency1").change(function(){
        var currency=$(this).val();
        //table.ajax.reload();
        table.ajax.url('https://autosector.com/get_coin_data.php?type=table&currency='+$("#currency1").val()).load();
        // load_price_table(currency);
    });
    setInterval( function () {
        table.ajax.url('https://autosector.com/get_coin_data.php?type=table&currency='+$("#currency1").val()).load();
    }, 20000 );
    /*setInterval(function(){
     $.getJSON("https://autosector.com/get_coin_data.php?type=table", function(data) {
     var markets = data.data;
     for(var i=0;i<markets.length;i++){
     var content=markets[i][0];
     var id="#market"+$(content).text();
     if($(id).closest("tr").find("td:nth-child(3)").length>0){
     data=($(id).closest("tr").find("td:nth-child(3)").text());
     if($(id).closest("tr").find("td:nth-child(3)").text()!=markets[i][2]) {
     $(id).closest("tr").find("td:nth-child(3)").text(markets[i][2]);
     }
     }
     }
     });
     }, 3000);*/
});
