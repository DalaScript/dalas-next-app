import Button from "./components/Button/Button";
import styles from "./page.module.css";

export default function Home() {

  const userLoggedIn = false;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.center}>
          {/* { !!userIsRegistered && <Button title='რეგისტრაცია' />} */}
          {userLoggedIn
            ? <Button title='გამოსვლა' />
            : <Button title='ავტორიზაცია' />}
        </div>
      </main>
    </div>
  );
}
