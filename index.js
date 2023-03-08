function controllaParolakk08765hh1() {
    var parola = document.getElementById("kk08765hh1").value;
    if (parola.toLowerCase() == "ciao") {
        window.location.href = "pass-2.html";
    } else {
        alert("Riprova");
    }
}

function controllaParolakk08765hh2() {
    var parola = document.getElementById("kk08765hh2").value;
    if (parola.toLowerCase() == "ciao") {
        window.location.href = "pass-3.html";
    } else {
        alert("Riprova dall' inizio!");
        window.location.href = "index.html";
    }
}


