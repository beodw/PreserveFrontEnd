const AuthUrl = 'https://or3td2xczvmagaipoy736xqn2e0wqcve.lambda-url.eu-west-2.on.aws/';

const PostData = (url, payload) => {
    const requestOptions = {
        method: 'POST',
        mode: 'no-cors', // This specifies that no CORS request is needed
        headers: {
            'Content-Type': 'application/json',
            // Add any other necessary headers here
        },
        body: JSON.stringify(payload)
        };

    fetch(url, requestOptions)
    .then(response => {
        // Handle the response here
        console.log('Response received:', response);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
    });
}

const GetData = (url, payload) => {
    const requestOptions = {
        method: 'POST',
        mode: 'no-cors', // This specifies that no CORS request is needed
        headers: {
            'Content-Type': 'application/json',
            // Add any other necessary headers here
        },
        
        body: JSON.stringify(payload)
        };

    fetch(url, requestOptions)
    .then(response => {
        // Handle the response here
        console.log('Response received:', response);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
    });
}




const url = 'https://example.com/api/post'; // Replace with your API endpoint

const postData = {
  key1: 'value1',
  key2: 'value2'
  // Add more key-value pairs as needed
};



export {PostData, AuthUrl};

