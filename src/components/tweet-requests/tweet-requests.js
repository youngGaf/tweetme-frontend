export const getCsrfToken = async () => {
    try {
        const response = await fetch('/api/tweets/csrf');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        alert('An error occured!');
    }
}

export const apiRequest = async (fetchUrl, method, postData, csrfToken) => {
    try {
        const response = await fetch(`/api/tweets/${fetchUrl}`, {
            method: method,
            headers:(
                method === 'POST' ? {
                'X-CSRFToken': csrfToken,
                'Content-Type': 'application/json'
            }: {}
            ),
            credentials: 'include',
            body: JSON.stringify(postData)
        });
        
        // Throw error on errror status
        if(response.status !== 200 && response.status !== 201) {
            console.log(response)
            throw response.statusText
        }

        const data = await response.json();
        return data
    } catch (error) {
        alert('An error occured!');
        window.location.reload(false);
    }
}