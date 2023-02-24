export const detector = () => {
    // check compatibility
    if (!("BarcodeDetector" in window)) {
        console.log("Barcode Detector is not supported by this browser.");
    } else {
        console.log("Barcode Detector supported!");

        // create new detector
        const barcodeDetector = new BarcodeDetector({
            formats: ["code_39", "codabar", "ean_13"],
        });
        barcodeDetector.getSupportedFormats().then((supportedFormats) => {
            supportedFormats.forEach((format) => console.log(format));
        });
        barcodeDetector
            .detect(document.getElementById("detector"))
            .then((barcodes) => {
                barcodes.forEach((barcode) => console.log(barcode.rawValue));
            })
            .catch((err) => {
                console.log(err);
            });
    }
}