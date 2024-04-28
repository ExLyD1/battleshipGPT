document.addEventListener('DOMContentLoaded', function() {
  const playGroundEnemy = document.querySelector('.enemyField');
  const playGroundPlayer = document.querySelector('.playerField');
  const gameArrow = document.querySelector('svg');
  const cells = document.querySelectorAll('.cell');
  let shooted = false;





  playGroundEnemy.addEventListener('click', function(event) {
    if (!shooted) {
      const clickedCell = event.target;
      if (!clickedCell.classList.contains('occupied')) {
        if (playGroundEnemy.contains(clickedCell)) {
          const row = clickedCell.getAttribute('data-row');
          const col = clickedCell.getAttribute('data-col');
          console.log(`Игрок кликнул на ряд ${row} и на ячейку ${col}!`);
          shooted = true;
          gameArrow.classList.remove('rotated')
          clickedCell.classList.add('occupied');
        }
      } else {
        console.log('Игрок стрельнул уже по этой клетке');
      }
    }
  });

  playGroundPlayer.addEventListener('click', function(event) {
    if (shooted) {
      const clickedCell = event.target;
      if (!clickedCell.classList.contains('occupied')) {
        if (playGroundPlayer.contains(clickedCell)) {
          const row = clickedCell.getAttribute('data-row');
          const col = clickedCell.getAttribute('data-col');
          console.log(`Противник кликнул на ряд ${row} и на ячейку ${col}!`);
          shooted = false;
          gameArrow.classList.add('rotated');
          clickedCell.classList.add('occupied');
        }
      } else {
        console.log('Противник стрельнул уже по этой клетке');
      }
    }
  });

  

});
