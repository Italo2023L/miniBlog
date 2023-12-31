//CSS
import styles from './Home.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

//components
import PostDetail from '../../components/PostDetail';

const Home = () => {
  const [query, setQuery] = useState("")
  const { documents: posts, loading } = useFetchDocuments("posts")

  const handleSubmit = (e) => {
    e.preventeDefault()
  }
  return (
    <div className={styles.home}>
        <h1>Veja nossos post mais recentes</h1>
        <form className={styles.serach_form } onSubmit={handleSubmit} >
          <input
          type="text"
          placeholder="ou busque por tags"
          onChange={(e) => setQuery(e.target.value) }
          />
          <button className="btn btn-dark"> Pesquisar</button>
        </form>
        <br />
        <div>
          {loading && <p>Carregando...</p>}
          { posts && posts.map((post) => <PostDetail key={post.id} post={post}/>)}
          {posts && posts.length === 0 &&(
            <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
            Criar primeiro post
            </Link>
            </div>
          )}
        </div>
    </div>
  )
}

export default Home;