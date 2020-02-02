function populateform(llength, lstart, lnumber){
    x = generatepass(llength, lstart, lnumber)
    if(x.length > 0){
        var tmp = ""
        for(i = 0; i < lnumber; i++){
            tmp += x[i] + '\n'
        }
    }
    else{
        tmp = x[0];
    }
    document.passgen.output.value = tmp
    document.getElementById("fileButton").disabled = false
    $("#fileButton").click(function(){
        download("link-force.txt",x);
    });
}



function generatepass(plength, pstart, pnumber){
    var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!-@#$%^&*_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var tmp = ''
    var l = []
    if(Math.pow((keylist.length),(plength - pstart.length))<pnumber){
        console.log("ERROR")
        l=["Total number of passwords which can be generated are less than the provided number of passwords to be generated."]
        return l;
    }
    // Check for "/" at end of string
    if (pstart.charAt(pstart.length-1) !== "/") {
      pstart += "/"
    }
    for(j = 0; j < pnumber; j++){
        tmp = pstart
        for(i = 0; i < plength - pstart.length; i++){
        tmp += keylist.charAt(Math.floor(Math.random() * keylist.length))
        }
        // Check for connections, clones, and fails
        var failed = []
        fetch(tmp, {
          mode: 'no-cors'
        }).then(function err(response) {
          console.log(response)
          failed.push(tmp)
        })
        if ((failed.includes(tmp))||(l.includes(tmp))){
            j-=1
        } else {
            l.push(tmp);
        }
    }
    console.log(failed)
    console.log(l)
    return l
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
