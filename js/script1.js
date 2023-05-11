window.onload = function() {
    document.querySelector(".menumobile").addEventListener("click", function() {
        if(document.querySelector (".menu nav .menuprincipal").style.display == 'none') {
            document.querySelector(".menu nav .menuprincipal").style.display = 'flex';
        } else {
            document.querySelector(".menu nav .menuprincipal").style.display ='none';
        }

    });

};