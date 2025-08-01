export const AUDIOPICKER = (audioElement, callback) => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";
    input.accept = "audio/*";
    document.body.appendChild(input);
    input.addEventListener("change", function () {
        var file = this.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function (event) {
            var base64Data = event.target.result;
            var compressedBase64Data = resizeBase64Data(base64Data, 49800);
            if (compressedBase64Data) {
                audioElement.src = compressedBase64Data;
                audioElement.play();
                callback(compressedBase64Data);
            } else {
                TOAST("Unable to resize the audio data within the character limit.");
            }
        };
        reader.readAsDataURL(file);
    });
    input.click();
    input.remove();
    function resizeBase64Data(base64Data, targetSize) {
        if (base64Data.length <= targetSize) {
            return base64Data;
        }
        return base64Data.substring(0, targetSize);
    }
};