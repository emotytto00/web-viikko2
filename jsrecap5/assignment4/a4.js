async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    throw new Error(`An error occurred: ${error.message}`);
  }
}

async function fetchUserData() {
  try {
    const user = {
      name: 'Jorma Kovanen',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    console.log(userData);
    alert('User data fetched successfully. Check the console for details.');
  } catch (error) {
    console.error(error.message);
    alert(
      'An error occurred while fetching user data. Check the console for details.'
    );
  }
}
