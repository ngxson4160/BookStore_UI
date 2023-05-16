import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './BreadCrumb.module.scss'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function BreadCrumb() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.breadBrumb}>
                <a href="http://localhost:3000/"><span>Trang chủ</span></a>
                <FontAwesomeIcon className = {styles.icon} icon= {faAngleRight}></FontAwesomeIcon>
                <a href="http://localhost:3000/"><span>Danh sách sách</span></a>
            </div>
        </div>
    );
}

export default BreadCrumb;
