// Daftar harga
const hargaMenu = {
    "Kebab Sayur Ayam": 13000,
    "Kebab Sayur Sapi": 13000,
    "Kebab Full Ayam": 15000,
    "Kebab Full Sapi": 17000,
    "Roti Bakar Selai Strawberry": 10000,
    "Roti Bakar Nanas": 10000,
    "Roti Bakar Blueberry": 10000,
    "Roti Bakar Coklat": 13000,
    "Roti Bakar Tiramisu": 13000,
    "Iced Frappucino": 18000,
    "Oreo Cookies & Cream": 17000,
    "Caramel Latte": 18000,
    "Choco Nutella": 20000,
    "Greentea Matcha": 15000,
    "Choco Belgian": 18000
};

// Event listener untuk tombol HITUNG HARGA
document.getElementById('calculate-button').addEventListener('click', function() {
    const makanan = document.getElementById('food-input').value;
    const minuman = document.getElementById('drink-input').value;
    let totalHarga = 0;

    // Menambahkan harga makanan
    if (hargaMenu[makanan]) {
        totalHarga += hargaMenu[makanan];
    }

    // Menambahkan harga minuman
    if (hargaMenu[minuman]) {
        totalHarga += hargaMenu[minuman];
    }

    // Menampilkan total harga
    document.getElementById('total-harga').innerText = 'Rp ' + totalHarga;
});

// Script untuk peta
var map = L.map('map').setView([-6.115016, 120.45917], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

fetch('CHATRTEA.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                var marker = L.marker(latlng).addTo(map);
                marker.bindPopup('<b>CHARTEA</b><br>Alamat: JL. KH Hayyung No 99');
                marker.bindTooltip('CHARTEA', {
                    permanent: true,
                    direction: 'top',
                    offset: L.point(0, -10),
                    className: 'custom-tooltip'
                });
                return marker;
            }
        }).addTo(map);
    })
    .catch(error => {
        console.error('Terjadi kesalahan saat memuat CHATRTEA.geojson:', error);
    });
