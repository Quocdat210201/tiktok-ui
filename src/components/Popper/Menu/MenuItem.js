import Button from '~/components/Button';
import styles from './Menu.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
