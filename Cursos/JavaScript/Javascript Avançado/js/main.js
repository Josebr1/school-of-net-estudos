var list = [
    {
        "desc": "rice",
        "amount": "1",
        "value": "5.40"
    },
    {
        "desc": "beer",
        "amount": "12",
        "value": "1.99"
    },
    {
        "desc": "meat",
        "amount": "1",
        "value": "15.00"
    }
];

function getTotal(list) {
    let total = 0;
    for (let key in list) {
        total += list[key].value * list[key].amount;
    }

    document.getElementById('totalValue').innerHTML = formatValue(total);
}

function setList(list) {
    var table = '<thead>' +
        '            <tr>' +
        '                <td>Description</td>' +
        '                <td>Amount</td>' +
        '                <td>Value</td>' +
        '                <td>Action</td>' +
        '            </tr>' +
        '        </thead>' +
        '        <tbody>';
    for (let key in list) {
        table += '<tr>' +
            '                <td>' + formatDesc(list[key].desc) + '</td>' +
            '                <td>' + formatAmount(list[key].amount) + '</td>' +
            '                <td>' + formatValue(list[key].value) + '</td>' +
            '                <td><button onclick="setUpdate('+ key +');" class="btn btn-default btn-sm">Edit</button>  <button onclick="deleteData(' + key + ');" class="btn btn-default btn-sm">Delete</button></td>' +
            '            </tr>';
    }
    table += '</tboby>';

    document.getElementById('listTable').innerHTML = table;

    getTotal(list);
    saveListStorage(list);
}

function formatDesc(desc) {
    let str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatAmount(amount) {
    return parseInt(amount);
}

function formatValue(value) {
    let str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".", ",");
    str = "$ " + str;
    return str;
}

function addData() {
    if(!validation()){
        return;
    }

    let desc = document.getElementById('desc').value;
    let amount = document.getElementById('amount').value;
    let value = document.getElementById('value').value;

    list.unshift({"desc": desc, "amount": amount, "value": value});

    resetForm();
    setList(list);
}

function setUpdate(key) {
    let obj = list[key];
    document.getElementById('desc').value = obj.desc;
    document.getElementById('amount').value = obj.amount;
    document.getElementById('value').value = obj.value;

    document.getElementById('btnUpdate').style.display = "inline-block";
    document.getElementById('btnAdd').style.display = "none";

    document.getElementById('inputIDUpdate').innerHTML = '<input type="hidden" id="idUpdate" value="' + key + '">';
}

function resetForm() {
    document.getElementById('desc').value = "";
    document.getElementById('amount').value = "";
    document.getElementById('value').value = "";

    document.getElementById('btnUpdate').style.display = "none";
    document.getElementById('btnAdd').style.display = "inline-block";

    document.getElementById('inputIDUpdate').innerHTML = "";
}

function updateData() {
    if(!validation()){
        return;
    }

    let id = document.getElementById('idUpdate').value;

    let desc = document.getElementById('desc').value;
    let amount = document.getElementById('amount').value;
    let value = document.getElementById('value').value;

    list[id] = {
        "desc": desc,
        "amount": amount,
        "value": value
    };

    resetForm();
    setList(list);
}

function deleteData(key) {
    if (confirm('Delete this item?')) {
        if(key === list.length - 1){
            list.pop();
        }else if(key === 0){
            list.shift();
        }else{
            let arrAuxStart = list.slice(0, key);
            let arrAuxEnd = list.slice(key + 1);

            list = arrAuxStart.concat(arrAuxEnd);
        }
        setList(list);
    }
}

function validation(){
    let desc = document.getElementById('desc').value;
    let amount = document.getElementById('amount').value;
    let value = document.getElementById('value').value;

    var errors = "";

    if(desc === ""){
        errors += "<p>Fill out description</p>";
    }

    if(amount === ""){
        errors += "<p>Fill out a quantity</p>";
    }

    if(value === ""){
        errors += "<p>Fill out a value</p>";
    }

    if(errors !== ""){
        document.getElementById('errors').style.display = "block";
        document.getElementById('errors').innerHTML = "<h3>Error:</h3>" + errors;
        return 0;
    }else{
        document.getElementById('errors').style.display = "none";
        return 1;
    }
}

function clearList(){
    if(confirm("Delete this list?")){
        list = [];
        setList(list);
    }
}

function saveListStorage(list){
    var jsonStr = JSON.stringify(list);
    localStorage.setItem("list", jsonStr);
}

function initListStorage(){
    var testList = localStorage.getItem("list");
    if(testList){
        list = JSON.parse(testList);
    }
    setList(list);
}

initListStorage();
