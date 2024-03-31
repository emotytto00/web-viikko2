async function postData() {
  const userData = {
    name: 'Jorma Kovanen',
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
    console.log(data);
  } catch (error) {
    console.error('Error posting data:', error);
  }
}

postData();
