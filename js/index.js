
function generatepass(plength,pstart,pnumber,pstartlength){
    
    if((document.getElementById('specialcheck').checked) && (document.getElementById('sensitivecheck').checked) && (document.getElementById('numbercheck').checked)){
        var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    
    else if((document.getElementById('specialcheck').checked) && (document.getElementById('sensitivecheck').checked)){
        var keylist = "abcdefghijklmnopqrstuvwxyz!@#$%^&*_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    else if((document.getElementById('sensitivecheck').checked) && (document.getElementById('numbercheck').checked)){
        var keylist = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    else if(document.getElementById('numbercheck').checked){
        var keylist = "abcdefghijklmnopqrstuvwxyz1234567890"
    }
    else if((document.getElementById('specialcheck').checked) && (document.getElementById('numbercheck').checked)){
        var keylist = "abcdefghijklmnopqrstuvwxyz!@#$%^&*_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    else if(document.getElementById('specialcheck').checked){
        var keylist = "abcdefghijklmnopqrstuvwxyz!@#$%^&*_"
    }
    else if(document.getElementById('sensitivecheck').checked){
        var keylist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    else{
        var keylist = "abcdefghijklmnopqrstuvwxyz"
    }
    
//    return keylist
    
    
    var tmp = ''

    
    var l =[]
    for(j=0;j<pnumber;j++){
        tmp=pstart
        for(i=0;i<plength-pstartlength;i++){
        tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
        }
        l.push(tmp)
    }
    return l
    
    
}


function populateform(llength,lstart,lnumber){
    
    startlength = lstart.length
    x = generatepass(llength,lstart,lnumber,startlength)
    var tmp=""
    for(i=0;i<lnumber;i++){
        tmp+=x[i]+'\n'
    }
    document.passgen.output.value = tmp
    
    
    document.getElementById("fileButton").disabled = false
    $("#fileButton").click(function(){
        download("hello.txt",x);
    });
    
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

