
//Devuelve una referencia al elemento por su ID en este caso mezclar
document.getElementById("mezclar").addEventListener("click", function() {//addEventListener("click",captura el evento click
    const songs = document.querySelectorAll(".music");//lista de musicas C Y A trae con la clase music
    const icons = ["↑", "↓", "★"];
    
    // Obtener las posiciones actuales de las canciones 
    const currentPositions = Array.from(songs).map(music => parseInt(music.querySelector(".numero").innerText));
    
    // Mezclar las canciones aleatoriamente
    const ranking = Array.from(songs).sort(() => Math.random() - 0.5);
    
    // Actualizar el DOM para mostrar la lsita
    const rankingContainer = document.getElementById("ranking");
    rankingContainer.innerHTML = "";


    
    ranking.forEach((music, index) => {
        const newPosition = index + 1;
        const currentPosition = currentPositions[Array.from(songs).indexOf(music)];
        
        music.querySelector(".numero").innerText = newPosition;
        const iconElement = music.querySelector(".icon");
        
        let newIcon;
        if (newPosition < currentPosition) {
            newIcon = "↑"; // Subió 
        } else if (newPosition > currentPosition) {
            newIcon = "↓"; // Bajó 
        } else {
            newIcon = "★"; // Nuevo ingreso o se mantiene en la misma posicion
        }
        


        //primera posición no tenga la flecha hacia abajo
        if (newPosition === 1 && newIcon === "↓") {
            newIcon = "↑"; // Cambiar a flecha hacia arriba o cualquier otro símbolo
        }
        
        iconElement.innerText = newIcon;
        iconElement.className = "icon";
        if (newIcon === "★") {
            iconElement.classList.add("estrella");
        }
        rankingContainer.appendChild(music);
    });
});


