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
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1661958000&x-signature=GRu0LQbFzVBTGpkylsvbVKVFUBM%3D"
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
