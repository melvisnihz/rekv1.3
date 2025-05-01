const backgrounds = [
  "https://res.cloudinary.com/dyj3vbsw9/image/upload/v1746115560/pixel_GIF_t6rj2e.gif",
  "https://res.cloudinary.com/dyj3vbsw9/image/upload/v1746115682/art_design_GIF_by_bigblueboo_uwpy0q.gif",
  "https://res.cloudinary.com/dyj3vbsw9/image/upload/v1746115765/download_1_ddmue6.gif"
];

function gantiBackground(index) {
  const bgContainer = document.getElementById('bg-container');
  bgContainer.style.backgroundImage = `url('${backgrounds[index]}')`;
}
