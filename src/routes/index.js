import HeaderOnly from "~/components/Layouts/HeaderOnly/HeaderOnly"
import Home from "~/pages/Home/Home"
import Following from "~/pages/Following/Following"
import Upload from "~/pages/Upload/Upload"
import Search from "~/pages/Search/Search"

// Public Routes
const publicRoutes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/following',
    component: Following
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
]

// Private Routes
const privateRoutes = []

export{publicRoutes, privateRoutes}
