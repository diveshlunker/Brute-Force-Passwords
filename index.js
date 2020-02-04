async function populateform(plength, pstart){
    document.getElementById('stop').value = 'Stop'
    var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!-@#$%^&*_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var l = []
    // Check for "/" at end of string
    if (pstart.charAt(pstart.length-1) !== "/") {
      pstart += "/"
    }
    while (document.getElementById('stop').value === 'Stop'){
        var tmp = ''
        for(var i = 0; i < plength; i++){
          tmp += keylist.charAt(Math.floor(Math.random() * keylist.length))
        }
        var failed = []
        fetch((pstart + tmp), {
          method: 'POST',
          mode: 'no-cors',
          credentials: 'include',
          referrerPolicy: 'no-referrer'
        }).then((response) => {
          if (!response.ok) {
            failed[i] = tmp
            console.log("Couldn't fetch.");
          }
        })
        .catch((error) => {
          failed[i] = tmp
        })
        // Check for connections, clones, and fails
        if ((failed.includes(tmp))||(l.includes(tmp))){
            i -= 1
        } else {
            l.push(tmp);
        }
        if(l.length > 0){
            var tmp2 = ""
            for(var j = 0; j < l.length; j++){
                tmp2 += pstart + l[j] + '\n'
            }
        } else {
            tmp2 = l[0];
        }
        document.passgen.output.value = tmp2
        document.getElementById("fileButton").disabled = false
    }
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
