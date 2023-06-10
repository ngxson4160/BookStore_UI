import Header from '../../components/Header/header';
import Menu from '../../components/Menu/menu';
import styles from './Home.module.scss'

function Home() {
    return ( <div>
            <Header></Header>
            <Menu></Menu>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                </div>
            </div>
    </div> );
}

export default Home;