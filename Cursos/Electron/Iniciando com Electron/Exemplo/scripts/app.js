function onGenerate(){
    var inputText = document.getElementById("txt");

    if(!inputText.value){
        alert('Please input something');
        return;
    }

    var base64 = btoa(inputText.value);
   
    var result = document.getElementById('result');
    result.value = base64;
}

function onDecode(){
    var inputText = document.getElementById("txt");

    if(!inputText.value){
        alert('Please input something');
        return;
    }

    var base64 = atob(inputText.value);
   
    var result = document.getElementById('result');
    result.value = base64;
}

function onClear(){

    var inputText = document.getElementById("txt");
    var result = document.getElementById('result');

    inputText.value = "";
    result.value = "";

}