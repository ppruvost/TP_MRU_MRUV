document.addEventListener("DOMContentLoaded", () => {
    const loadBtn = document.getElementById("loadBtn");

    loadBtn.addEventListener("click", () => {
        const fileMRU = document.getElementById("fileMRU").files[0];
        const fileMRUV = document.getElementById("fileMRUV").files[0];

        if (!fileMRU || !fileMRUV) {
            alert("Veuillez sélectionner les deux fichiers TXT.");
            return;
        }

        readFile(fileMRU, "outputMRU");
        readFile(fileMRUV, "outputMRUV");
    });
});

function readFile(file, outputId) {
    const reader = new FileReader();

    reader.onload = (event) => {
        document.getElementById(outputId).textContent = event.target.result;
    };

    reader.onerror = () => {
        document.getElementById(outputId).textContent = "Erreur lors de la lecture du fichier.";
    };

    reader.readAsText(file);
}
