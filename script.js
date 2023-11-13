function startLoading() {
  const button = document.getElementById('myButton');
  const loadingIcon = document.getElementById('loadingIcon');

  button.classList.add('clicked');
  loadingIcon.style.display = 'inline-block';
  button.innerHTML = '<span class="loading-icon">⌛</span> fazendo sexo';

  // Gera um número aleatório entre 3 e 15 segundos
  const randomTime = Math.floor(Math.random() * (60000 - 1000 + 1) + 1000);

  setTimeout(() => {
    button.classList.remove('clicked');
    button.innerHTML = 'Gozou.';
    button.classList.add('success');

    setTimeout(() => {
      button.classList.remove('success');
      button.innerHTML = '<span id="loadingIcon" class="loading-icon">😏</span> Fazer sexo';
      loadingIcon.style.display = 'none';
    }, 5000);
  }, randomTime);
}
