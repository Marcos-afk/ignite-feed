import { Header } from './components/Header';
import styles from './app.module.scss';
import { SideBar } from './components/SideBar';

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <h1>ReactJS Structure</h1>
          <h1>ReactJS Structure</h1>
          <h1>ReactJS Structure</h1>
          <h1>ReactJS Structure</h1>
        </main>
      </div>
    </div>
  );
};

export default App;
