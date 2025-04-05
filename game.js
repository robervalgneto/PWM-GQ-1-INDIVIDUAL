let secret = generateSecret();
let history = [];

function generateSecret() {
  const digits = [];
  while (digits.length < 4) {
    const rand = Math.floor(Math.random() * 10);
    if (!digits.includes(rand)) digits.push(rand);
  }
  return digits;
}

function submitGuess() {
  const input = document.getElementById('guessInput');
  const guess = input.value.split('').map(Number);

  if (guess.length !== 4 || new Set(guess).size !== 4 || guess.some(n => isNaN(n))) {
    alert('Digite 4 dígitos únicos!');
    return;
  }

  const { bulls, cows } = evaluateGuess(guess);
  history.unshift(`${guess.join('')} - ${bulls} Bulls, ${cows} Cows`);
  renderHistory();
  input.value = '';
}

function evaluateGuess(guess) {
  let bulls = 0, cows = 0;

  guess.forEach((num, idx) => {
    if (num === secret[idx]) {
      bulls++;
    } else if (secret.includes(num)) {
      cows++;
    }
  });

  return { bulls, cows };
}

function renderHistory() {
  const list = document.getElementById('history');
  list.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

function revealCode() {
  alert(`A senha é: ${secret.join('')}`);
}
