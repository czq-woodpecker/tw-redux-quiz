export function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => resolve(response))
      .catch(error => reject(error));
  })
}

export function deleteData(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {method: 'DELETE'})
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

export function postData(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

