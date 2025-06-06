document.addEventListener('DOMContentLoaded', function() {
    // Variables de navigation
    const slideContainer = document.getElementById('slide-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const slideIndicator = document.getElementById('slide-indicator');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const totalSlides = slides.length;
    
    // Éléments audio
    const soundClick = document.getElementById('sound-click');
    const soundMenu = document.getElementById('sound-menu');
    const soundSelect = document.getElementById('sound-select');
    
    // Variable pour suivre l'état du son
    let soundEnabled = true;
    
    // Contexte audio pour générer des sons
    let audioContext = null;
    
    // Initialisation du contexte audio à la première interaction utilisateur
    function initAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    }
    
    let currentSlideIndex = 0;

    // Fonction pour jouer un son généré
    function playSound(type) {
        if (!soundEnabled || !audioContext) return;
        
        // Créer un effet de réverbération légère pour adoucir le son
        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 3000;
        
        // Fonction pour créer un petit arpège mélodieux
        function createArpeggio(notes, timings, volumes) {
            notes.forEach((note, index) => {
                setTimeout(() => {
                    const osc = audioContext.createOscillator();
                    const gain = audioContext.createGain();
                    
                    osc.connect(gain);
                    gain.connect(filter);
                    filter.connect(audioContext.destination);
                    
                    osc.type = 'sine';
                    osc.frequency.value = note;
                    
                    gain.gain.setValueAtTime(volumes[index], audioContext.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + timings[index]);
                    
                    osc.start();
                    osc.stop(audioContext.currentTime + timings[index]);
                }, index * 100); // Espacement des notes
            });
        }
        
        // Configurer le son selon le type
        switch(type) {
            case 'click':
                // Son de navigation - arpège court ascendant
                createArpeggio(
                    [523.25, 659.25, 783.99], // Do, Mi, Sol
                    [0.2, 0.2, 0.25],          // Durées des notes
                    [0.08, 0.08, 0.08]         // Volumes des notes (plus douces)
                );
                break;
                
            case 'menu':
                // Son de menu - arpège complet avec petit effet
                createArpeggio(
                    [523.25, 659.25, 783.99, 880], // Do, Mi, Sol, La
                    [0.2, 0.25, 0.3, 0.35],        // Durées des notes
                    [0.1, 0.1, 0.1, 0.08]          // Volumes des notes
                );
                break;
                
            case 'select':
                // Son de sélection - arpège descendant
                createArpeggio(
                    [783.99, 659.25, 523.25], // Sol, Mi, Do
                    [0.2, 0.25, 0.3],         // Durées des notes
                    [0.08, 0.07, 0.06]        // Volumes des notes (décroissantes)
                );
                break;
        }
    }

    // Mise à jour de l'indicateur de slide
    function updateSlideIndicator() {
        slideIndicator.textContent = `${currentSlideIndex + 1}/${totalSlides}`;
    }

    // Fonction pour aller à un slide spécifique
    function goToSlide(index) {
        // S'assurer que l'index est valide
        if (index < 0 || index >= totalSlides) {
            return;
        }
        
        // Masquer tous les slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Afficher le slide actuel
        slides[index].classList.add('active');
        
        // Mettre à jour l'indicateur
        currentSlideIndex = index;
        updateSlideIndicator();
    }

    // Navigation avec les boutons
    prevBtn.addEventListener('click', function() {
        initAudioContext(); // Initialise l'audio au premier clic
        if (currentSlideIndex > 0) {
            playSound('click');
            goToSlide(currentSlideIndex - 1);
        }
    });

    nextBtn.addEventListener('click', function() {
        initAudioContext(); // Initialise l'audio au premier clic
        if (currentSlideIndex < totalSlides - 1) {
            playSound('click');
            goToSlide(currentSlideIndex + 1);
        }
    });

    // Fonction pour gérer le plein écran
    function toggleFullScreen() {
        const presentationContainer = document.querySelector('.presentation-container');
        
        if (!document.fullscreenElement && 
            !document.mozFullScreenElement && 
            !document.webkitFullscreenElement && 
            !document.msFullscreenElement) {
            // Passer en plein écran
            if (presentationContainer.requestFullscreen) {
                presentationContainer.requestFullscreen();
            } else if (presentationContainer.msRequestFullscreen) {
                presentationContainer.msRequestFullscreen();
            } else if (presentationContainer.mozRequestFullScreen) {
                presentationContainer.mozRequestFullScreen();
            } else if (presentationContainer.webkitRequestFullscreen) {
                presentationContainer.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            // Quitter le plein écran
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }

    // Ajouter l'écouteur d'événement pour le bouton plein écran
    fullscreenBtn.addEventListener('click', function() {
        initAudioContext(); // Initialise l'audio au premier clic
        playSound('menu');
        toggleFullScreen();
    });
    
    // Ajouter un raccourci clavier "F" pour le mode plein écran
    document.addEventListener('keydown', function(event) {
        initAudioContext(); // Initialise l'audio à la première interaction
        if (event.key === 'ArrowLeft' && currentSlideIndex > 0) {
            playSound('click');
            goToSlide(currentSlideIndex - 1);
        } else if (event.key === 'ArrowRight' && currentSlideIndex < totalSlides - 1) {
            playSound('click');
            goToSlide(currentSlideIndex + 1);
        } else if (event.key === 'M' || event.key === 'm') {
            // Touche M pour activer/désactiver le son
            soundEnabled = !soundEnabled;
            if (soundEnabled) {
                playSound('select');
            }
        } else if (event.key === 'F' || event.key === 'f') {
            // Touche F pour activer/désactiver le plein écran
            playSound('menu');
            toggleFullScreen();
        }
    });

    // Navigation via les éléments du sommaire
    document.querySelectorAll('.toc-item').forEach(item => {
        item.addEventListener('click', function() {
            initAudioContext(); // Initialise l'audio au premier clic
            const targetSlide = parseInt(this.getAttribute('data-target'));
            if (!isNaN(targetSlide) && targetSlide >= 0 && targetSlide < totalSlides) {
                playSound('select');
                goToSlide(targetSlide);
            }
        });
    });
    
    // Navigation via les boutons de retour au sommaire
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            initAudioContext(); // Initialise l'audio au premier clic
            const targetSlide = parseInt(this.getAttribute('data-target'));
            if (!isNaN(targetSlide) && targetSlide >= 0 && targetSlide < totalSlides) {
                playSound('menu');
                goToSlide(targetSlide);
            }
        });
    });

    // Initialisation
    updateSlideIndicator();
    
    // Ajouter une info-bulle pour informer de la touche M pour couper le son
    const tooltip = document.createElement('div');
    tooltip.className = 'sound-tooltip';
    tooltip.textContent = 'Appuyez sur M pour le son, F pour le plein écran';
    document.body.appendChild(tooltip);
    
    // Faire disparaître l'info-bulle après quelques secondes
    setTimeout(() => {
        tooltip.style.opacity = '0';
        setTimeout(() => {
            tooltip.remove();
        }, 1000);
    }, 5000);

    // Slider interne pour user stories
    const userStoryBlocks = document.querySelectorAll('.user-stories-slider .user-story');
    const prevProfileBtn = document.getElementById('profile-prev');
    const nextProfileBtn = document.getElementById('profile-next');
    const profileIndicator = document.getElementById('profile-indicator');
    let currentProfile = 0;

    function showProfile(index) {
        if (index < 0 || index >= userStoryBlocks.length) return;
        userStoryBlocks.forEach((el, i) => {
            el.classList.toggle('active', i === index);
        });
        profileIndicator.textContent = (index + 1) + '/' + userStoryBlocks.length;
        currentProfile = index;
    }

    if (userStoryBlocks.length && prevProfileBtn && nextProfileBtn && profileIndicator) {
        prevProfileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showProfile((currentProfile - 1 + userStoryBlocks.length) % userStoryBlocks.length);
        });
        nextProfileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showProfile((currentProfile + 1) % userStoryBlocks.length);
        });
        showProfile(0);
    }

    // Slider pour cas d'usage principaux
    const useCaseBlocks = document.querySelectorAll('.use-case-slider .use-case');
    const useCasePrevBtn = document.getElementById('usecase-prev');
    const useCaseNextBtn = document.getElementById('usecase-next');
    const useCaseIndicator = document.getElementById('usecase-indicator');
    let currentUseCase = 0;

    function showUseCase(index) {
        if (index < 0 || index >= useCaseBlocks.length) return;
        useCaseBlocks.forEach((el, i) => {
            el.classList.toggle('active', i === index);
        });
        if (useCaseIndicator) useCaseIndicator.textContent = (index + 1) + '/' + useCaseBlocks.length;
        currentUseCase = index;
    }

    if (useCaseBlocks.length && useCasePrevBtn && useCaseNextBtn && useCaseIndicator) {
        useCasePrevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showUseCase((currentUseCase - 1 + useCaseBlocks.length) % useCaseBlocks.length);
        });
        useCaseNextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showUseCase((currentUseCase + 1) % useCaseBlocks.length);
        });
        showUseCase(0);
    }

    // Zoom overlay for diagrams
    const zoomOverlay = document.getElementById("zoom-overlay");
    const zoomImg = zoomOverlay ? zoomOverlay.querySelector("img") : null;
    document.querySelectorAll(".slide-image-sequence, .slide-image-infra").forEach(img => {
        img.addEventListener("click", function(e) {
            if (!zoomOverlay || !zoomImg) return;
            e.stopPropagation();
            zoomImg.src = this.src;
            zoomOverlay.style.display = "flex";
        });
    });
    if (zoomOverlay) {
        zoomOverlay.addEventListener("click", function() {
            zoomOverlay.style.display = "none";
        });
    }

}); 