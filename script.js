function startLoading() {
  const button = document.getElementById('myButton');
  const loadingIcon = document.getElementById('loadingIcon');
  const timerDisplay = document.getElementById('timer');
const resultMessage = document.getElementById('resultMessage');
  button.classList.add('clicked');
  loadingIcon.style.display = 'inline-block';
  button.innerHTML = '<span class="loading-icon">⌛</span> fazendo';

  const randomTime = Math.floor(Math.random() * (180000 - 1000 + 1) + 1000);

  let startTime = Date.now();
  let elapsedTime = 0;

  const updateTimer = () => {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const seconds = Math.floor(elapsedTime / 1000);
    timerDisplay.innerText = `Tempo: ${seconds}s`;
  };

  const timerInterval = setInterval(updateTimer, 1000);

  setTimeout(() => {
    clearInterval(timerInterval);
    button.classList.remove('clicked');
    button.innerHTML = 'Gozou.';
    button.classList.add('success');
    
const endTime = Date.now();
const totalTime = Math.floor((endTime - startTime) / 1000);
resultMessage.innerText = `Você demorou ${totalTime} segundos até gozar.`;
    
    setTimeout(() => {
      button.classList.remove('success');
      button.innerHTML = '<span id="loadingIcon" class="loading-icon">😏</span> Fazer';
      loadingIcon.style.display = 'none';
      timerDisplay.innerText = ''; // Limpar o texto do cronômetro
    }, 5000);
  }, randomTime);
}
