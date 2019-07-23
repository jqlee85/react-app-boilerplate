import Home from "./components/Home/Home"
import PageOne from "./components/PageOne/PageOne"
import Post from "./components/Post/Post"
import Posts from "./components/Posts/Posts"

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/page-one",
    props: {},
    component: PageOne
  },
  {
    path: '/posts',
    props: {},
    component: Posts
  },
  {
    path: '/post/:postID',
    component: Post,
  }
]

export default routes
