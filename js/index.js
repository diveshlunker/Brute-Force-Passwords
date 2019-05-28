var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var tmp = ''

function generatepass(plength,pstart,pnumber,pstartlength){
    var l =[]
    for(j=0;j<pnumber;j++){
        tmp=pstart
        for(i=0;i<plength-pstartlength;i++){
        tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
        }
        l.push(tmp)
    }
    tmp=""
    for(i=0;i<pnumber;i++){
        tmp+=l[i]+'\n'
    }
    return tmp
    
}


function populateform(llength,lstart,lnumber){
    startlength = lstart.length
    document.passgen.output.value = generatepass(llength,lstart,lnumber,startlength)
}
