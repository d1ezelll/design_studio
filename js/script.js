document.getElementById('contact-form-button').addEventListener('click', function() {
    document.getElementById('contact-form').reset();
  }
);

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
    
})

window.addEventListener('click', (e) => {
    const header = document.querySelector("header");
    const isClickInsideHeader = header.contains(e.target);
    const isClickOnContactButton = e.target === burger;

    if (!isClickInsideHeader && !isClickOnContactButton) {
        header.classList.remove('open');
    }
});
