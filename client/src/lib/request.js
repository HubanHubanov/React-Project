const buildOptions = (data) => {
    const options = {};

    if(data) {
        options.headers = {
            "content-type": "application/json"
        }
        options.body = JSON.stringify(data)
    }

    return options
}

 const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method
    });

    const result = await response.json();

    return result;
}

export const get =  request.bind(null, "GET");  
export const post =  request.bind(null, "POST");  
export const put =  request.bind(null, "PUT");  
export const remove =  request.bind(null, "DELETE");  
