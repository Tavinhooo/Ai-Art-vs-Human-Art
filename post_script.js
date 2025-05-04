function previewImage(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);

  input.addEventListener('change', function () {
    const file = input.files[0];
    if (file) {
      preview.src = URL.createObjectURL(file);
      preview.style.display = "block";
    }
  });
}

previewImage("realArtUpload", "realPreview");
previewImage("aiArtUpload", "aiPreview");

document.getElementById('artForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Real Art Validation
  const realArtUpload = document.getElementById('realArtUpload').files.length;
  const realArtName = document.getElementById('realArtName').value.trim();

  if (!realArtUpload || !realArtName) {
    alert('Please upload an image and provide a name for the Real artwork.');
    return;
  }

  // AI Art Validation
  const sameAsReal = document.getElementById('sameAsReal').checked;
  const aiArtUpload = document.getElementById('aiArtUpload').files.length;
  const aiArtName = document.getElementById('aiArtName').value.trim();

  if (!sameAsReal) {
    if (!aiArtUpload || !aiArtName) {
      alert('Please upload an image and provide a name for the AI artwork.');
      return;
    }
  }

  alert('Artwork submitted successfully!');
});

document.getElementById('sameAsReal').addEventListener('change', function () {
  const isChecked = this.checked;
  const aiArtUpload = document.getElementById('aiArtUpload');
  const aiArtName = document.getElementById('aiArtName');
  const aiAuthorName = document.getElementById('aiAuthorName');
  const realArtName = document.getElementById('realArtName').value.trim();
  const realAuthorName = document.getElementById('realAuthorName').value.trim();

  if (isChecked) {
    aiArtUpload.required = false;
    aiArtName.required = false;
    aiArtUpload.disabled = true;
    aiArtName.disabled = true;
    aiAuthorName.disabled = true;

    // Copy values from Real Artwork
    aiArtName.value = realArtName;
    aiAuthorName.value = realAuthorName;
  } else {
    aiArtUpload.required = true;
    aiArtName.required = true;
    aiArtUpload.disabled = false;
    aiArtName.disabled = false;
    aiAuthorName.disabled = false;

    // Clear AI Artwork fields
    aiArtName.value = "";
    aiAuthorName.value = "";
  }
});