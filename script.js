// Data menu makanan
const menuItems = [
    { id: 1, name: "Mie Ayam", price: 15000 },
    { id: 2, name: "Mie Pangsit", price: 15000 },
    { id: 3, name: "Mie Goreng", price: 18000 },
    { id: 4, name: "Mie Bakso", price: 15000 },
    { id: 1, name: "Ayam Lalapan", price: 25000 },
    { id: 1, name: "Nasi Goreng", price: 18000 },
    { id: 1, name: "Le Mineral", price: 5000 },
    { id: 1, name: "Jeruk Peras", price: 7000 },
    { id: 1, name: "Es Teh", price: 5000 },
    { id: 1, name: "Teh Kotak", price: 5000 },
  ];
  
  // Element HTML
  const menuContainer = document.getElementById("menu-container");
  const orderList = document.getElementById("order-list");
  const totalPriceElem = document.getElementById("total-price");
  
  // State pesanan
  let orders = [];
  let totalPrice = 0;
  
  // Fungsi untuk menampilkan menu makanan
  function displayMenu() {
    menuItems.forEach((item) => {
      const menuItemElem = document.createElement("div");
      menuItemElem.classList.add("menu-item");
      menuItemElem.innerHTML = `
        <h3>${item.name}</h3>
        <p>Harga: Rp ${item.price}</p>
        <button onclick="addToOrder(${item.id})">Tambah</button>
      `;
      menuContainer.appendChild(menuItemElem);
    });
  }
  
  // Fungsi untuk menambahkan item ke pesanan
  function addToOrder(itemId) {
    const item = menuItems.find((menuItem) => menuItem.id === itemId);
    orders.push(item);
    totalPrice += item.price;
    updateOrderList();
  }
  
  // Fungsi untuk memperbarui daftar pesanan
  function updateOrderList() {
    orderList.innerHTML = "";
    orders.forEach((item, index) => {
      const orderItemElem = document.createElement("li");
      orderItemElem.textContent = `${item.name} - Rp ${item.price}`;
      orderList.appendChild(orderItemElem);
    });
    totalPriceElem.textContent = totalPrice;
  }
  
  // Fungsi untuk mengirim pesanan
  function submitOrder() {
    if (orders.length === 0) {
      alert("Pesanan Anda kosong!");
      return;
    }
    alert(`Pesanan Anda telah diterima. Total: Rp ${totalPrice}`);
    orders = [];
    totalPrice = 0;
    updateOrderList();
  }
  
  // Event listener untuk tombol "Pesan Sekarang"
  document.getElementById("submit-order").addEventListener("click", submitOrder);
  
  // Menampilkan menu saat halaman dimuat
  displayMenu();
  