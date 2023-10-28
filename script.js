// Get canvas and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set font and fill color
ctx.font = "bold 20px Arial";
ctx.fillStyle = "#FF0000";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

// Calculate center coordinates
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Draw your character in the center
ctx.fillText("X", centerX, centerY);

// Function to convert canvas data to hex format
function canvasToHexData() {
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let hexData = "";

    for (let i = 0; i < data.length; i += 4) {
        const hexColor = `0x${(
            (data[i] << 16) |
            (data[i + 1] << 8) |
            data[i + 2]
        )
            .toString(16)
            .padStart(6, "0")}`;
        hexData += hexColor + ", ";
    }

    return hexData;
}

const downloadLink = document.getElementById("downloadLink");

const hexData = canvasToHexData();
const blob = new Blob([hexData], { type: "text/plain" });
const url = URL.createObjectURL(blob);
downloadLink.href = url;
