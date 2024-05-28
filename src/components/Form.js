import { useState } from "react"
import { postTrick } from './apiCalls'
import './Form.css'

export default function Form({setTricks}) {
    const [formData, setFormData] = useState({
        stance: '',
        name: '',
        obstacle: '',
        tutorial: ''
    })

    function submitTrick(e) {
        e.preventDefault()
        postTrick(formData)
        .then(data => {
            setTricks(prevTricks => {
                return [...prevTricks, data]
        })
        
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
        <form className="form">          
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
          name='name'
          value={formData.name}
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
          name='tutorial'
          value={formData.tutorial}
          onChange={handleChange}
          />
          <button onClick={submitTrick}>Send It!</button>
        </form>
    )
}