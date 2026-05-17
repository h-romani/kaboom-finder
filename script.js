function showVideo(item) {
  const modal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('videoPlayer');

  videoPlayer.src = item.video;
  videoPlayer.play();

  document.getElementById("infoTitle").innerText = item.title;

  const list = document.getElementById("infoList");

  if (item.info && item.info.length) {
    list.innerHTML = item.info.map(i => `<li>${i}</li>`).join("");
    list.style.display = "block";
  } else {
    list.innerHTML = "";
    list.style.display = "none";
  }
  modal.style.display = 'flex';
}

function closeVideo() {
    var modal = document.getElementById('videoModal');
    var videoPlayer = document.getElementById('videoPlayer');
    modal.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.src = '';
}

function showInfo(points) {
  const modal = document.getElementById("infoModal");
  const list = document.getElementById("infoList");

  list.innerHTML = points
    .map(point => `<li>${point}</li>`)
    .join("");

  modal.style.display = "flex";
}

function closeInfo() {
  document.getElementById("infoModal").style.display = "none";
}

function getComboTotal(productIds) {
  return productIds
    .map(id => {
      const p = products.find(x => x.id === id);
      return p ? parseFloat(p.price.replace("$", "")) : 0;
    })
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
}

function renderComboProducts(combo) {
  const gallery = document.getElementById("gallery");
  const title = document.getElementById("categoryTitle");

  gallery.innerHTML = "";

  const total = getComboTotal(combo.products);

  title.innerText = `${combo.title} — Total: $${total}`;

  const comboProducts = products.filter(p =>
    combo.products.includes(p.id)
  );

  comboProducts.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.onclick = () => showVideo(item);

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title} loading="lazy"">
      <p class="card-title">${item.title}</p>
      <p class="card-price">${item.price}</p>
    `;

    gallery.appendChild(card);
  });
}

let activeCategory = "All";
let searchQuery = "";
let activeCombo = null;

document
  .getElementById("searchInput")
  .addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderGallery(products);
  });

function renderFilters(data) {
    
    const filterBar = document.getElementById("filterBar");
  
    const categories = ["All", "Combo", ...new Set(data.map(item => item.category))];
  
    filterBar.innerHTML = "";
  
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.innerText = cat;
  
      if (cat === activeCategory) btn.classList.add("active");
  
      btn.onclick = () => {
        activeCategory = cat;
        renderFilters(data);
        renderGallery(data);
      };
  
      filterBar.appendChild(btn);
    });
  }

  function renderProducts(data) {
    const gallery = document.getElementById("gallery");
    const comboGallery = document.getElementById("combo-gallery");
    const title = document.getElementById("categoryTitle");
  
    gallery.style.display = "grid";
    comboGallery.style.display = "none";
  
    gallery.innerHTML = "";
  
    let filtered =
      activeCategory === "All"
        ? data
        : data.filter(item => item.category === activeCategory);
  
    filtered = filtered.filter(item => {
      const q = searchQuery.toLowerCase();
  
      return (
        item.title.toLowerCase().includes(q) ||
        item.price.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  
    title.innerText =
      activeCategory === "All"
        ? "All Products"
        : activeCategory;
  
    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.onclick = () => showVideo(item);
  
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title} loading="lazy"">
        <p>${item.price}</p>
      `;
  
      gallery.appendChild(card);
    });
  }

  function renderCombos() {
    const gallery = document.getElementById("gallery");
    const comboGallery = document.getElementById("combo-gallery");
    const title = document.getElementById("categoryTitle");
  
    gallery.style.display = "none";
    comboGallery.style.display = "flex";
  
    comboGallery.innerHTML = "";
    title.innerText = "Combo Packs";
  
    combos.forEach(combo => {
      const total = getComboTotal(combo.products);
  
      const group = document.createElement("div");
      group.className = "combo-group";
  
      const heading = document.createElement("h2");
      heading.innerText = `${combo.title} — $${total}`;
      group.appendChild(heading);
  
      const row = document.createElement("div");
      row.className = "category-items";
  
      const comboProducts = products.filter(p =>
        combo.products.includes(p.id)
      );
  
      comboProducts.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
  
        card.onclick = () => showVideo(item);
  
        card.innerHTML = `
          <img src="${item.image}" alt="${item.title} loading="lazy"">
          <p class="card-title">${item.title}</p>
          <p class="card-price">${item.price}</p>
        `;
  
        row.appendChild(card);
      });
  
      group.appendChild(row);
      comboGallery.appendChild(group);
    });
  }

  function renderGallery(data) {
    if (activeCategory === "Combo") {
      renderCombos();
      return;
    }
  
    renderProducts(data);
  }
  
  
renderGallery(products);
renderFilters(products);