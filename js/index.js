
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

    if((plength-pstartlength)*(keylist.length)<pnumber){
        console.log("Error")
        l=["Total number of passwords which can be generated are less than the provided number of passwords to be generated. Please Try Again. Thank You:)"]
        return l;
    }
    
    var l =[]
    for(j=0;j<pnumber;j++){
        tmp=pstart
        for(i=0;i<plength-pstartlength;i++){
        tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
        }
        if(l.includes(tmp)){
            console.log(j);
            j-=1
            console.log(j);
        }
        else{
            l.push(tmp);
        }
        
    }
    return l
    
    
}


function populateform(llength,lstart,lnumber){
    
    startlength = lstart.length
    x = generatepass(llength,lstart,lnumber,startlength)
    if(x.length>1){
        var tmp=""
        for(i=0;i<lnumber;i++){
            tmp+=x[i]+'\n'
        }
    }
    else{
        tmp = x[0];
    }
    
    document.passgen.output.value = tmp
    
    
    document.getElementById("fileButton").disabled = false
    $("#fileButton").click(function(){
        download("bruteForceList.txt",x);
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

