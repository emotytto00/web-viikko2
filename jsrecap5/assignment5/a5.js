document.addEventListener('DOMContentLoaded', function () {
  const restaurantList = document.getElementById('restaurant-list');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');

  function fetchRestaurants() {
    fetch('https://10.120.32.94/restaurant/api/v1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch restaurants.');
        }
        return response.json();
      })
      .then((data) => {
        displayRestaurants(data);
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error.message);
      });
  }

  function displayRestaurants(restaurants) {
    restaurantList.innerHTML = '';
    restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('div');
      restaurantItem.classList.add('restaurant');
      restaurantItem.textContent = restaurant.name;
      restaurantItem.addEventListener('click', () => {
        fetchMenu(restaurant.id);
      });
      restaurantList.appendChild(restaurantItem);
    });
  }

  function fetchMenu(restaurantId) {
    fetch(`https://10.120.32.94/restaurant/api/v1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch menu.');
        }
        return response.json();
      })
      .then((menu) => {
        displayModal(menu);
      })
      .catch((error) => {
        console.error('Error fetching menu:', error.message);
      });
  }

  function displayModal(menu) {
    modalContent.innerHTML = '';
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    modalContent.appendChild(closeBtn);

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Menu';
    modalContent.appendChild(menuTitle);

    menu.forEach((item) => {
      const menuItem = document.createElement('div');
      menuItem.textContent = item.name + ' - $' + item.price;
      modalContent.appendChild(menuItem);
    });

    modal.style.display = 'block';
  }

  fetchRestaurants();
});
