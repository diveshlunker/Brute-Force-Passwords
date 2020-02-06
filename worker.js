var w
var butt = document.getElementById("butt").value
function startWorker(llength, lstart) {
  if (butt === "Generate") {
    butt = "Stop"
    document.getElementById("fileButton").disabled = false
  } else {
    butt = "Generate"
    stopWorker()
    return
  }
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("link-force.js")
      w.postMessage(llength, lstart)
    }
    w.onmessage = function(event) {
      var tmp2 = ""
      for(i = 0; i < event.data.length; i++){
        tmp2 += event.data[i] + '\n'
      }
      document.passgen.output.value = tmp2
    }
  } else {
    document.passgen.output.value = "Sorry, your browser does not support Web Workers..."
  }
}

function stopWorker() { 
  w.terminate()
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
