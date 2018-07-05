$(document).ready(function(){
    get_login_data("https://autosector.com/get_coin_data.php?type=login_data");
    function get_login_data(url) {
        var cookie=document.cookie.split("=");
        if(cookie[0]=="seed_key" && cookie[1]!="") {
            var key = cookie[1].split(";");
            if (key[0] != "") {
                $("#my_content").fadeOut();
                $.ajax({
                    method: "GET",
                    url: url+"&key=" + key[0],
                    success: function (data) {
                        var wrapped = $("<div>" + data + "</div>");
                        wrapped.find(".navbar.navbar-inverse").remove();
                        wrapped.find("footer").remove();
                        html = wrapped.find(".container").html();
                        $("#my_content").html(html);
                        //$("#my_content a").attr("href","");
                        $("#my_content #banner, #my_content img,#my_content #seednr, #masternodes_table_length, #masternodes_table_filter, #masternodes_table_info, #masternodes_table_paginate").remove();
                        $(".form-horizontal button").attr("type", "button");
                        $("#my_content #masternodes_table").DataTable();
                        if($("#my_content form").length<1){
                            //document.cookie = "seed_key=";
                            //$("#my_content a").attr("href","");
                            $("#my_content a").attr("id","back_login");
                        }
                        $("#my_content").fadeIn();
                    }
                });
            }

        }
    }
    $(document).on("change","#change-currency",(function(e){
        e.preventDefault();
        var c=$(this).val().split("(");
        var currency=c[1].split(")");
        get_login_data("https://autosector.com/get_coin_data.php?type=login_data&currency="+currency[0]);
    }));

    $(document).on("click","#masternodes_table tr td:last-child a",(function(e){
        e.preventDefault();
        var add=$(this).attr("href").split("=");
        var coin=$(this).closest("tr").find("td:nth-child(3)").text();
        get_login_data("https://autosector.com/get_coin_data.php?type=login_data&add="+add[1]+"&coin="+coin);
        location.reload();
    }));

    $(document).on("click","#my_content form button",(function(e){
        e.preventDefault();
        get_login_data("https://autosector.com/get_coin_data.php?type=login_data&address="+$("#my_content form #input").val());
    }));

    $(document).on("click","#my_content div:first-child div:last-child>strong, #back_login",(function(e){
        e.preventDefault();
        document.cookie = "seed_key=";
        location.reload();
    }));
    $(document).on("click","#generate_key",(function(){
         /*$.getJSON("https://autosector.com/get_coin_data.php?type=get_key", function(data) {
            var markets = data.data;
         });*/
        $.ajax({
            method: "GET",
            url: "https://autosector.com/get_coin_data.php?type=get_key",
            success: function(data) {
                $("#inputSeed").val(data);
            }
        });
    }));

    $(document).on("click","#sign_in",(function(){
        /*$.ajax({
            method: "GET",
            url: "https://autosector.com/get_coin_data.php?type=get_key",
            success: function(data) {*/
                document.cookie = "seed_key="+$("#inputSeed").val();
                location.reload();
            /*}
        });*/
    }));

});