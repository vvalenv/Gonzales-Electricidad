function App() {}
    window.onload = function(event) {
        let app = new App();
        this.window.App = app;
    }
    App.prototype.processingButton = function(event) {
        const btn = event.currentTarget;
        const carrouselList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const carrusel = track.querySelectorAll('.carrousel_element');

        const trackWidth = track.offsetWidth;
        const carruselWidth = carrusel[0].offsetWidth;
        const listWidth = carrouselList.offsetWidth;
        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) *-1);
        btn.dataset.button == "left" ? prevAction(leftPosition,carruselWidth,track) : nextAction(leftPosition,trackWidth,carruselWidth,listWidth,track);
    }

    let prevAction = (leftPosition,carruselWidth,track) => {
        if (leftPosition>-carruselWidth) {
            track.style.left = `${-1*(leftPosition - carruselWidth)}px`;
        }
    }

    let nextAction = (leftPosition,trackWidth,carruselWidth,listWidth,track) => {
        if (leftPosition < (trackWidth-listWidth)) {
            if (leftPosition==-carruselWidth) {
                track.style.left = `${0}px`;
            } else {
                track.style.left = `${(leftPosition - carruselWidth)}px`;
            }
        }
    }