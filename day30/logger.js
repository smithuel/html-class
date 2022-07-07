const output = document.getElementById("output");

function logger(v, shouldStringify = true ) {

  output.innerHTML = output.innerHTML + "<br>" + (shouldStringify ? JSON.stringify(v) : v);
}