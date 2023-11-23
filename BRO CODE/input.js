let totalResult = document.getElementById('btn');
let result;

totalResult.onclick = function () {
    result = document.getElementById('name').value
    console.log(result);
    document.getElementById('label').innerHTML = result;
    document.getElementById('link').style.display = 'block'
    document.getElementById('link').innerHTML = result

}
