function myFunction() {
    var x = 0;
    var id = x++;
  
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "cb_" + id;

    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    cell1.appendChild(checkBox);
    cell2.innerHTML = document.getElementById("Customer-Name").value;
    cell3.innerHTML = document.getElementById("Customer-No").value;
    cell4.innerHTML = document.getElementById("Invoice-Number").value;
    cell5.innerHTML = document.getElementById("Invoice-Amount").value;
    cell6.innerHTML = document.getElementById("Due-Date").value;
//    cell7.innerHTML = document.getElementById("Predicted-Payment-Date").value;
    cell8.innerHTML = document.getElementById("Notes").value;
  }