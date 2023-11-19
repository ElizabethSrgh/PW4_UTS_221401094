function updateColor() {
    const colorInput = document.getElementById("colorInput");
    const rgbValue = document.getElementById("rgbValue");
    const hexValue = document.getElementById("hexValue");
  
    const color = colorInput.value;
    const rgbArray = hexToRgb(color);
  
    rgbValue.textContent = rgbArray.join(", ");
    hexValue.textContent = color.toUpperCase();
  }
  
  function hexToRgb(hex) {
    // Mengonversi nilai hex menjadi array RGB
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }
  
  const textHoverElements = document.querySelectorAll(".text-hover");

textHoverElements.forEach(element => {
    element.style.color = color;
});

  // Pembaruan awal
  updateColor();
  