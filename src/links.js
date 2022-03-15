
import GamingPage from "./pages/GamingPage"
import Home from "./pages/Home"
import LivePage from "./pages/LivePage"
import MusicPage from "./pages/MusicPage"
import NewsPage from "./pages/NewsPage"
import SearchResultPage from "./pages/SearchResultPage"
import SportPage from "./pages/SportPage"
import TrendingPage from "./pages/TrendingPage"
import WatchingPage from "./pages/WatchingPage"

const linksMain = [
    {
        icon: 'bi bi-house-door',
        to: '/',
        name: 'Home'
    },
    {
        icon: 'bi bi-sun',
        to: '/trending',
        name: 'Trending'
    }
]
const linksTheme = [
    {
        icon: 'bi bi-music-note-beamed',
        to: '/music',
        name: 'Music'
    },
    {
        icon: 'bi bi-dribbble',
        to: '/sports',
        name: 'Sports'
    },
    {
        icon: 'bi bi-controller',
        to: '/gaming',
        name: 'Gaming'
    },
    {
        icon: 'bi bi-newspaper',
        to: '/news',
        name: 'News'
    },
    {
        icon: 'bi bi-broadcast',
        to: '/live',
        name: 'Live'
    }
]
// Routes

const routes = [
    {
        path: '/',
        element: () => <Home />
    },
    {
        path: '/trending',
        element: () => <TrendingPage />
    },
    {
        path: '/searchResult',
        element: () => <SearchResultPage />
    },
    {
        path: '/music',
        element: () => <MusicPage />
    },
    {
        path: '/sports',
        element: () => <SportPage />
    },
    {
        path: '/gaming',
        element: () => <GamingPage />
    },
    {
        path: '/news',
        element: () => <NewsPage />
    },
    {
        path: '/live',
        element: () => <LivePage />
    },
    {
        path: '/watch/:id',
        element: () => <WatchingPage />
    }
]

export { linksMain, linksTheme, routes }








