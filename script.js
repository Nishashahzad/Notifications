document.addEventListener("DOMContentLoaded", function() {
    const markReadButton = document.getElementById("READ");
   const notReadButton = document.querySelectorAll("#not-read");

    markReadButton.addEventListener("click", function() {
      notReadButton.forEach(function(element) {
      element.id = "read";
      });
    });
    markReadButton.addEventListener('click', () => {
        document.getElementById("numm").style.display = "none";
    })
  });

