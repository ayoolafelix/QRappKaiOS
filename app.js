document.getElementById("generateBtn").addEventListener("click", function() {
    let text = document.getElementById("textInput").value;
    let qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = ""; // Clear previous QR code

    if (text.trim() !== "") {
        new QRCode(qrContainer, {
            text: text,
            width: 150,
            height: 150
        });
    }
});
