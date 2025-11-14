document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("continueBtn");

    document.getElementById("fileMRU").addEventListener("change", (e) => {
        console.log("MRU détecté :", e.target.files.length);
    });

    document.getElementById("fileMRUV").addEventListener("change", (e) => {
        console.log("MRUV détecté :", e.target.files.length);
    });
});
