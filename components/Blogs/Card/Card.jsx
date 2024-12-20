import styles from '../../../styles/Blogs.module.css'

function Card({key,name,image,link,date}) {
    return (
        <a className={styles.card} href={link} target="_blank" without rel="noreferrer">
            <div className={styles.image_container} style={{backgroundImage:`url(${image})`}}>
                {}
            </div>
            <div className={styles.text_container}>
                <h3>{name}</h3>
                <p>{date.split(' ')[0]}</p>
            </div>
        </a>
    )
}

export default Card
