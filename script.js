let contenuMRU = "";
let contenuMRUV = "";

let mruLoaded = false;
let mruvLoaded = false;

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("continueBtn");

    document.getElementById("fileMRU").addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            readFile(file, "outputMRU", "mru");
        }
    });

    document.getElementById("fileMRUV").addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            readFile(file, "outputMRUV", "mruv");
        }
    });

    btn.addEventListener("click", () => lancerProgramme());
});


function readFile(file, outputId, type) {

    const reader = new FileReader();

    reader.onload = (e) => {
        document.getElementById(outputId).textContent = e.target.result;

        if (type === "mru") {
            contenuMRU = e.target.result;
            mruLoaded = true;
        }

        if (type === "mruv") {
            contenuMRUV = e.target.result;
            mruvLoaded = true;
        }

        // 🔥 DEBUG : affichage console
        console.log("MRU chargé :", mruLoaded);
        console.log("MRUV chargé :", mruvLoaded);

        // Activation du bouton quand les deux fichiers sont chargés
        if (mruLoaded && mruvLoaded) {
            document.getElementById("continueBtn").disabled = false;
        }
    };

    reader.readAsText(file, "UTF-8");
}


function lancerProgramme() {
    document.getElementById("resultat").textContent =
        "Programme lancé !\n\n" +
        "MRU : " + contenuMRU.split("\n").length + " lignes\n" +
        "MRUV : " + contenuMRUV.split("\n").length + " lignes\n";
}
