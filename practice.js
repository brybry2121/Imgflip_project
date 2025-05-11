document.getElementById('memeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const topText = document.getElementById('topText').value;
  const bottomText = document.getElementById('bottomText').value;
  const imageUrl = document.getElementById('imageUrl').value;

  if (imageUrl) {
      const memeContainer = document.getElementById('memeContainer');
      const memeDiv = document.createElement('div');
      memeDiv.classList.add('meme');

      const img = document.createElement('img');
      img.src = imageUrl;

      memeDiv.appendChild(img);

      if (topText) {
          const topTextDiv = document.createElement('div');
          topTextDiv.classList.add('memeText', 'top');
          topTextDiv.innerText = topText;
          memeDiv.appendChild(topTextDiv);
      }

      if (bottomText) {
          const bottomTextDiv = document.createElement('div');
          bottomTextDiv.classList.add('memeText', 'bottom');
          bottomTextDiv.innerText = bottomText;
          memeDiv.appendChild(bottomTextDiv);
      }

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('deleteBtn');
      deleteBtn.innerText = 'X';
      deleteBtn.addEventListener('click', function(e) {
          memeContainer.removeChild(memeDiv);
      });

      memeDiv.appendChild(deleteBtn);
      memeContainer.appendChild(memeDiv);

      document.getElementById('memeForm').reset();
  }
});