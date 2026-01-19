
const container = document.createElement('div');
const btn = document.createElement('button');
const display = document.createElement('p');

container.style.position = 'fixed';
container.style.bottom = '10px';
container.style.right = '10px';
container.style.zIndex = '99999';
container.style.background = 'white';

btn.textContent = 'Get Word';
display.textContent = 'Waiting...';

container.appendChild(btn);
container.appendChild(display);
document.body.appendChild(container);

window.usedWords = [];
window.words = [];

fetch('https://raw.githack.com/Coding4Hours/bomb-party-hack/main/words.txt')
	.then(res => res.text())
	.then(text => {
		window.words = text.split('\n').filter(w => w.length > 0);
		display.textContent = 'Loaded: ' + window.words.length + ' words';
	});

btn.onclick = function() {
	const syllableEl = document.querySelector(".syllable");

	const syllable = syllableEl.textContent.trim().toLowerCase();
	const word = window.words.find(w => w.includes(syllable) && !window.usedWords.includes(w));

	if (word) {
		window.usedWords.push(word);
		display.textContent = word;
	}
};

