// Certificato
function generateCertificate() {
    const name = document.getElementById('name').value.trim();
    
    if (!name) {
        alert('Per favore inserisci il tuo nome!');
        return;
    }
    
    // Mostra certificato
    document.getElementById('certificate').classList.remove('hidden');
    document.getElementById('certName').textContent = name;
    
    // Data corrente
    const today = new Date();
    const dateStr = today.toLocaleDateString('it-IT', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
    document.getElementById('certDate').textContent = dateStr;
    
    // Scroll al certificato
    document.getElementById('certificate').scrollIntoView({ behavior: 'smooth' });
}

function downloadCertificate() {
    // Opzione 1: html2canvas o jsPDF (da aggiungere)
    // Opzione 2: Screenshot manuale
    alert('Fai uno screenshot del certificato per salvarlo! 📸\n\n(Su Android: Volume giù + Power)\n(Su iPhone: Volume su + Power)');
}

// Versi animali
const sounds = {};

// Precarica i suoni
const animals = ['leone', 'scimmia', 'elefante', 'tigre', 'bradipo', 
                'camaleonte', 'serpente', 'pappagallo', 'tucano', 'coccodrillo'];

animals.forEach(animal => {
    sounds[animal] = new Audio(`assets/sounds/${animal}.mp3`);
});

function playSound(animal) {
    // Ferma tutti gli altri suoni
    Object.values(sounds).forEach(sound => sound.pause());
    
    // Riavvolgi e riproduci
    sounds[animal].currentTime = 0;
    sounds[animal].play();
    
    // Animazione visiva
    const card = event.currentTarget;
    card.style.background = 'linear-gradient(135deg, #56ab2f 0%, #3d7a1f 100%)';
    card.style.color = 'white';
    
    setTimeout(() => {
        card.style.background = '';
        card.style.color = '';
    }, 1000);
}

// Sondaggio
let selectedRating = 0;

function rate(stars) {
    selectedRating = stars;
    
    // Aggiorna visualizzazione stelle
    const starElements = document.querySelectorAll('.star');
    starElements.forEach((star, index) => {
        if (index < stars) {
            star.textContent = '★';
            star.classList.add('active');
        } else {
            star.textContent = '☆';
            star.classList.remove('active');
        }
    });
}

function submitFeedback() {
    if (selectedRating === 0) {
        alert('Per favore seleziona una valutazione con le stelle!');
        return;
    }
    
    const feedback = document.getElementById('feedback').value;
    
    // Invia dati (da implementare con backend o service)
    console.log('Rating:', selectedRating);
    console.log('Feedback:', feedback);
    
    // Per ora: salva in localStorage o invia a servizio esterno
    // Opzione A: Google Forms
    // Opzione B: Formspree/Form submit
    // Opzione C: Firebase/Supabase
    
    // Mostra ringraziamento
    document.getElementById('thankYou').classList.remove('hidden');
    document.querySelector('.survey-section').scrollIntoView({ behavior: 'smooth' });
    
    // Nascondi form dopo 3 secondi
    setTimeout(() => {
        document.querySelector('.stars').style.display = 'none';
        document.getElementById('feedback').style.display = 'none';
        document.querySelector('.survey-section button').style.display = 'none';
    }, 2000);
}