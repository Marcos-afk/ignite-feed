import { Header } from './components/Header';
import styles from './app.module.scss';
import { SideBar } from './components/SideBar';
import { Post } from './components/Post';

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
};

export default App;
