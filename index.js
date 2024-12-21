document.getElementById('fetchVerse').addEventListener('click', async () => {
    const reference = document.getElementById('reference').value.trim();
    const resultElement = document.getElementById('result');
  
    if (!reference) {
      resultElement.textContent = "Please enter a scripture reference.";
      return;
    }
  
    try {
      const response = await fetch(`https://bible-api.com/${encodeURIComponent(reference)}`);
      if (!response.ok) throw new Error('Invalid scripture reference or API issue.');
  
      const data = await response.json();
      resultElement.textContent = data.text || "No text found for this reference.";
    } catch (error) {
      resultElement.textContent = "Error fetching scripture. Please try again.";
    }
  });
  

