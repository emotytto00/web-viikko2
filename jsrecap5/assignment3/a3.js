async function fetchData() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23');

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log('GET request data:', data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

async function postData() {
  const userData = {
    name: 'Jooseppi Kivinen',
    job: 'Software Engineer',
  };

  try {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    console.log('POST request data:', data);
  } catch (error) {
    console.error('Error posting data:', error.message);
  }
}

async function putData() {
  const updatedUserData = {
    name: 'Jorma Kovanen',
    job: 'Product Manager',
  };

  try {
    const response = await fetch('https://reqres.in/api/users/2', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData),
    });

    const data = await response.json();
    console.log('PUT request data:', data);
  } catch (error) {
    console.error('Error updating data:', error.message);
  }
}

async function deleteData() {
  try {
    const response = await fetch('https://reqres.in/api/users/2', {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete data');
    }

    console.log('Data deleted successfully');
  } catch (error) {
    console.error('Error deleting data:', error.message);
  }
}

fetchData();
postData();
putData();
deleteData();
