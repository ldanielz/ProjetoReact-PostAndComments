import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import Post from "./components/Post"

const posts = [
  {
    id: 1,
    author: {
      name: "Daniel Zentel",
      role: "Role teste",
      avatarUrl: "https://github.com/ldanielz.png",
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: 'Loren ipasdjas post 1 dfjol' },
      { type: 'link', content: 'constroitelecom.com/' },
    ],
    publishAt: new Date('2022-11-15 16:00:00'),
  },
  {
    id: 2,
    author: {
      name: "Felipe Zenteno",
      role: "Role Felipe",
      avatarUrl: "https://github.com/ldanielz.png",
    },
    content: [
      { type: 'paragraph', content: 'Hohoho Galera' },
      { type: 'paragraph', content: 'Loren ipasdjas post 2 dfjol' },
      { type: 'link', content: 'constroitelecom.com/' },
    ],
    publishAt: new Date('2022-11-14 10:00:00'),
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  publishedAt={post.publishAt}
                  content={post.content}
                />
              )
            })
          }

        </main>
      </div>
    </div>
  )
}

export default App
