function onClickAddToCart() {
    fetch('products.json')
        .then(response => response.json())
        .then(jsonData => {
            return fetch('session.json')
                .then(sessionResponse => sessionResponse.json())
                .then(sessionData => {
                    const updatedSessionData = sessionData.concat(jsonData);
                    const blob = new Blob([JSON.stringify(updatedSessionData, null, 2)], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'session.json';
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}