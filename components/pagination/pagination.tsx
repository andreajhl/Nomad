import React, { useState, useEffect } from 'react';
import { Pagination } from '../../interfaces';
import { Progress } from '@chakra-ui/react';
import styles from './styles.module.scss';

const Pagination = ({ listHero, indexSlide}: Pagination) => {
  const [count, setCount] = useState<number>(0);
  const [time, setTime] = useState<number>(190);

  useEffect(() => {
    setCount(0);
    const interval = setInterval(() => {
      setCount(count => {
        const newCount: number = count + 2;

        newCount === 100 && clearInterval(interval);
        return newCount;
      });
    }, time);
    time !== 230 && setTime(230)
  }, [indexSlide]);

  return (
    <div className={styles.pagination}>
      {
        listHero?.map((e, i) => (
          <div className={styles.progress} key={e.title}>
            <p>{i + 1}</p>
            <h4>{e.title}</h4>
            {i === indexSlide && (
              <Progress
                size='xs'
                value={count}
                height={'2px'}
                color={'white'}
                bgColor='#718096'
              />
            )}
          </div>
        ))
      }
    </div>
  );
};

export default Pagination;
