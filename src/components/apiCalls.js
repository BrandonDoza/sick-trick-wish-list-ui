export function getTricks() {
    return fetch('http://localhost:3001/api/v1/tricks')
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function postTrick(formData) {
    return fetch('http://localhost:3001/api/v1/tricks', {
        method: 'POST',
        body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  })
  .then(res => res.json())
}

