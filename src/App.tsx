import { Header } from './components/Header';
import styles from './app.module.scss';
import { SideBar } from './components/SideBar';
import { Post } from './components/Post';
import { PostsMock } from './mocks';

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {PostsMock.map((post) => (
            <Post key={post.id} author={post.author} publishedAt={post.publishedAt} contents={post.content} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;
