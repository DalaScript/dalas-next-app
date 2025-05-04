'use client'

import Button2 from "./components/Button2/Button2";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.center}>
          {/* { !!userIsRegistered && <Button title='რეგისტრაცია' />} */}
          <Button2 
            title='რეგისტრაცია' 
            onClick={() => {
              alert('თქვენ წარმატებით გაიარეთ რეგისტრაცია');
            }}
            />
        </div>
      </main>
    </div>
  );
}
