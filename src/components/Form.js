import { useState } from "react"

export default function Form({setTricks}) {
    const [formData, setFormData] = useState({
        stance: '',
        trickName: '',
        obstacle: '',
        link: ''
    })

    function submitTrick(e) {
        e.preventDefault()
        setTricks(prevTricks => {
            return [...prevTricks, formData]
        })
    }

    console.log(formData, 'form')
    function handleChange(e) {
        setFormData(prevData => {
            return {...prevData,
            [e.target.name]: e.target.value}
        })
    }

    return (
        <form>          
          <select
            name="stance"
            value={formData.stance}
            onChange={handleChange}
          >
            <option value="">Choose Your Stance</option>
            <option value="regular">Regular</option>
            <option value="switch">Switch</option>
          </select>
          <input 
          type='text'
          placeholder="Name of Trick"
          name='trickName'
          value={formData.trickName}
          onChange={handleChange}
          />
          <select
            name="obstacle"
            value={formData.obstacle}
            onChange={handleChange}
          >
            <option value="">Choose Your Obstacle</option>
            <option value="Flat Ground">Flat Ground</option>
            <option value="Ledge">Ledge</option>
            <option value="Rail">Rail</option>
            <option value="Stairs">Stairs</option>
            <option value="Pool">Pool</option>
          </select>
          <input 
          type='text'
          placeholder="Link to Tutorial"
          name='link'
          value={formData.link}
          onChange={handleChange}
          />
          <button onClick={submitTrick}>Send It!</button>
        </form>
    )
}