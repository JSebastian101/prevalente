import React from 'react';
import s from './Card.module.css';
function Card() {
  return (
    <main className={s.container}>
        <div className={s.card}></div>
        <div className={s.card}></div>
        <div className={s.card}></div>
        <div className={s.card}></div>
    </main>
  );
}

export default Card;
