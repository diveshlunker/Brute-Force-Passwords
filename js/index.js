
function generatepass(plength,pstart,pnumber,pstartlength){

    var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!-@#$%^&*_ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    var tmp = ''

    if(Math.pow((keylist.length),(plength-pstartlength))<pnumber){
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
    console.log(l)
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
        download("link-force.txt",x);
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
