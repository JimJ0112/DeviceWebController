// for getting products for pasabuy
function toggle(){ 
    var xmlhttp = new XMLHttpRequest();
    
    var toggle = document.getElementById('check');

    if (toggle.checked === true) {
        
        query = "status=1&deviceCode=1234";
        
    } else {
        query = "status=0&deviceCode=1234";

    }

    //alert(query);


    xmlhttp.open("POST", "onoff.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           


            var dataArray = this.response;
            console.log(dataArray);

     
        }else{
            console.log(err);
        }      
    };
    

    xmlhttp.send(query);
    
}// end of function