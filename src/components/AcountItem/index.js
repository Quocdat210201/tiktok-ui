import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';

const cx = classNames.bind(styles);

function AcountItem({ children }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/51cd1a75bc63df673835580a01727b52~c5_100x100.jpeg?x-expires=1662645600&x-signature=weRP4clHP9Gw71TG%2Bqsq%2Fldq740%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Đào Lê Phương Hoa</span>
                    <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>phuonghoa2102</span>
            </div>
        </div>
    );
}

export default AcountItem;
