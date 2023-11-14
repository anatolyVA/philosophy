import React from 'react'
import styles from './page.module.css'
import Button from './components/Button'
import InputBox from './components/InputBox'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
          <h1>Войти</h1>
          <div className={styles.container__inputs}>
            <InputBox className='input-box' placeholder='Введите логин' type='text'></InputBox>
            <InputBox className='input-box' placeholder='Введите пароль' type='password'></InputBox>
          </div>
          <Button className='button button_filled button_medium'>Войти</Button>
      </div>
    </main>
  )
}
