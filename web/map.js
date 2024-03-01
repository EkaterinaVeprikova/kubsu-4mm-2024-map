const map = L.map('map', { minZoom: 1, maxZoom: 20 })
  .setView([45.019487, 39.031094], 15)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '' })
  .addTo(map)