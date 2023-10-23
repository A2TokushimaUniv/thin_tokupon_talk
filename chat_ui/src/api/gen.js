const genAPI = (sendPrompt, callback) => {
    fetch(`https://${API_HOME}/gen?text=${sendPrompt}`, {
        headers: {
            'ngrok-skip-browser-warning': 'true'
        },
        method: 'GET',
    }).then((response) => response.text())
    .then(callback)
}