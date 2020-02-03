function populateform(plength, pstart){
    var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!-@#$%^&*_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var tmp = ''
    var l = []
    // Check for "/" at end of string
    if (pstart.charAt(pstart.length-1) !== "/") {
      pstart += "/"
    }
    while (document.getElementById('stop').value === false){
        tmp = pstart
        for(var i = 0; i < plength; i++){
          tmp += keylist.charAt(Math.floor(Math.random() * keylist.length))
          var failed = []
          fetch(tmp, {
            method: 'POST',
            mode: 'no-cors',
            credentials: 'include',
            referrerPolicy: 'no-referrer'
          }).then((response) => {
            if (!response.ok) {
              failed[i] = tmp
            }
          })
          .catch((error) => {
            failed[i] = tmp
          })
        }
        // Check for connections, clones, and fails
        if ((failed.includes(tmp))||(l.includes(tmp))){
            j-=1
        } else {
            l.push(tmp);
        }
        if(l.length > 0){
            var tmp2 = ""
            for(i = 0; i < l.length; i++){
                tmp2 += l[i] + '\n'
            }   
        } else {
            tmp2 = l[0];
        }
        document.passgen.output.value = tmp2
        document.getElementById("fileButton").disabled = false
        $("#fileButton").click(function(){
        download("link-force.txt", tmp2)
        })
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
