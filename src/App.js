import { Route, Routes } from 'react-router-dom';
//https://www.youtube.com/watch?v=Dorf8i6lCuk
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';
import EventModule from "./pages/EventModule";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<AllMeetupsPage />} />
        <Route path="/new-meetup" caseSensitive={false} element={<NewMeetupPage />} />
        <Route path="/favorites" caseSensitive={false} element={<FavoritesPage />} />
        <Route path="/eventmodule" caseSensitive={false} element={<EventModule />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
