window.onload = () => {
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
};

function readFile(file, outputId) {
    const reader = new FileReader();
    reader.onload = function (event) {
        document.getElementById(outputId).textContent = event.target.result;
    };
    reader.readAsText(file);
}
("loadBtn").addEventListener("click", () => {
    const fileMRU = document.getElementById("fileMRU").files[0];
    const fileMRUV = document.getElementById("fileMRUV").files[0];

    if (!fileMRU || !fileMRUV) {
        alert("Veuillez sélectionner les deux fichiers TXT.");
        return;
    }

    readFile(fileMRU, "outputMRU");
    readFile(fileMRUV, "outputMRUV");
});

function readFile(file, outputId) {
    const reader = new FileReader();
    reader.onload = function (event) {
        document.getElementById(outputId).textContent = event.target.result;
    };
    reader.readAsText(file);
}
