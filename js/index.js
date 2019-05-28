var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var tmp = ''

function generatepass(plength,pstart,pnumber,pstartlength){
    tmp=pstart
    for(i=0;i<plength-pstartlength;i++){
        tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return tmp
}


function populateform(llength,lstart,lnumber){
    startlength = lstart.length
    document.passgen.output.value = generatepass(llength,lstart,lnumber,startlength)
}
