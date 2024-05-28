import './TrickCard.css'

export default function TrickCard({stance, name, obstacle, tutorial, id}) {
    return (
        <div className="trick-card">
            <p>{name}</p>
            <p>{stance}</p>
            <p>{obstacle}</p>
            <p>{tutorial}</p>
        </div>
    )
}