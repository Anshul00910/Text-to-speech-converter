let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.getElementById("speak").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

document.getElementById("pause").addEventListener("click", () => {
    window.speechSynthesis.pause();
});

document.getElementById("resume").addEventListener("click", () => {
    window.speechSynthesis.resume();
});

document.getElementById("cancel").addEventListener("click", () => {
    window.speechSynthesis.cancel();
});