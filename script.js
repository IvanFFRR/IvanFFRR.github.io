function UpdateOpalsCount() {
    var form = document.getElementById("Form");
    var opals = form.elements.namedItem("Opals");
    var miners = form.elements.namedItem("Miners");

    opals.max = miners.value;
    if (parseInt(miners.value) < parseInt(opals.value)) {
        opals.value = miners.value;
    }
};

var networth = 0;
function MineOpals() {
    var table = document.getElementById("Table");
    var row = table.insertRow(1)

    var form = document.getElementById("Form");
    var opals = form.elements.namedItem("Opals");
    var jeweller = form.elements.namedItem("Jeweller");
    var miners = form.elements.namedItem("Miners");

    opals.max = miners.value;

    row.insertCell(0).innerHTML = opals.value;
    row.insertCell(1).innerHTML = jeweller.checked ? "Sí" : "No";
    row.insertCell(2).innerHTML = miners.value;
    
    var gross = opals.value * (jeweller.checked ? 1000 : 200);
    var jewellerFee = jeweller.checked ? 2 : 0;
    var minersFee = miners.value * 0.2;
    var net = gross - jewellerFee - minersFee;

    var grossFormatted = `${gross} de oro`

    var jewellersFeeFormatted = "";
    if (jeweller.checked) jewellersFeeFormatted += `${jewellerFee} de oro`;

    var minersFeeFormatted = FormatCoins(minersFee);
    var netFormatted = FormatCoins(net);

    row.insertCell(3).innerHTML = grossFormatted;
    row.insertCell(4).innerHTML = jewellersFeeFormatted;
    row.insertCell(5).innerHTML = minersFeeFormatted;
    row.insertCell(6).innerHTML = netFormatted;

    networth += net;
    var span = document.getElementById("NetWorthNumber");
    span.innerText = FormatCoins(networth);
}

function FormatCoins(number) {
    var gold = Math.floor(number);
    var silver = Math.round((number - gold) * 10);
    var total = gold > 0 ? `${gold} de oro` : "";
    if(gold > 0 && silver > 0) total += " y ";
    if (silver > 0) total += `${silver} de plata`;

    return total;
}