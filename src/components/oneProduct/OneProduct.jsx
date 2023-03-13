import styles from './OneProduct.module.css';

const OneProduct = (props) => {
    console.log(props.items);
    return (
        <div className={styles.list}>
            {
                props.items.map(item => {
                    return(
                        <div key={item.id} className={styles.oneProduct}>
                            <h2>{item.title}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OneProduct
