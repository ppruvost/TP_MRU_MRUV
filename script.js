document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("fileMRU").addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            readFile(file, "outputMRU");
        }
    });

    document.getElementById("fileMRUV").addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            readFile(file, "outputMRUV");
        }
    });

});

function readFile(file, outputId) {
    const reader = new FileReader();

    reader.onload = e => {
        document.getElementById(outputId).textContent = e.target.result;
    };

    reader.onerror = () => {
        document.getElementById(outputId).textContent =
            "Erreur lors de la lecture du fichier : " + file.name;
    };

    reader.readAsText(file, "UTF-8");
}
