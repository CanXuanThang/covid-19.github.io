import { CardContent, Typography, Card } from '@mui/material';
// import { makeStyles } from '@emotion/styled';
import * as React from 'react';
import styles from './Hightlight.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HighlightCard({ title, count, type }) {
    return (
        <>
            <Card className={cx(`${type}`)}>
                <CardContent>
                    <Typography component="p" variant="body2" className={cx('title')}>
                        {title}
                    </Typography>
                    <Typography component="span" variant="body2" className={cx('count')}>
                        {count}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default HighlightCard;
