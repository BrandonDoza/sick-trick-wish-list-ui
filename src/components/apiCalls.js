export function getTricks() {
    return fetch('http://localhost:3001/api/v1/tricks')
    .then(res => res.json())
    .catch(err => console.log(err))
}
