import TrickCard from './TrickCard'
import './Tricks.css'

export default function Tricks({tricks}) {
    const allTricks = tricks.map(trick => {
        return (
            <TrickCard 
            id ={trick.id}
            key={trick.id}
            name={trick.name}
            stance={trick.stance}
            obstacle={trick.obstacle}
            tutorial={trick.tutorial}
            />
        )
    })    
    return (
        <div className='tricks-display'>
            {allTricks}
        </div>
    )
}