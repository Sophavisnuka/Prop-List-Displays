export default function Card({id, title,description, image}) {
    return (
        <div className="card">
            <img src={image.src} alt={image.alt}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}