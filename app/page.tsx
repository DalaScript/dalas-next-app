'use client'

import CheckBox from "./components/CheckBox/CheckBox";
import Counter from "./components/Counter/Counter";
import Test from "./components/Test";
import TextInput from "./components/TextInput/TextInput";
import Todo from "./components/Todo/Todo";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.center}>
          {/* { !!userIsRegistered && <Button title='რეგისტრაცია' />} */}
          <Todo />
        </div>
      </main>
    </div>
  );
}
