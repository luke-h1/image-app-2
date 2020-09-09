const outputDiv = document.getElementById('results');
const form = document.getElementById('form-control');
const query = document.getElementById('form-control--input');

async function getImageData(e) {
  e.preventDefault();
  const userQuery = query.value;
  const API_URL = `https://pixabay.com/api/?key={KEY_HERE}&q=${userQuery}&image_type=photo`;
  const res = await fetch(`${API_URL}`);
  const data = await res.json();
  addImagesToDOM(data);
}

function addImagesToDOM(data) {
  let output = '';
  data.hits.forEach((item) => {
    output += `
    <div class="card">
    <img src="${item.webformatURL}" class="img-card" alt="" />
    <div class="wrapper">
      <p class="badge">views</p>
      <p class="badge badge-success">downloads</p>
      <p class="badge badge-light">${item.tags}</p>
      <p class="badge badge-success">${item.comments}</p>
      <p class="badge badge-success">tags</p>
      <div class="badge badge-light">tags</div>
    </div>
  </div>    
  
  
    `;
  });

  outputDiv.innerHTML = output;
}

form.addEventListener('submit', getImageData);
