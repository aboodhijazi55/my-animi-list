import React, { useEffect, useState } from "react"
import Header from "./Header"
import Search from "./Search"
import Cards from "./Card"
import Footer from "./Footer"
import "./App.css"
import axios from 'axios';


function App() {
    const [animeList, setAnimeList] = useState([]);


    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const response = await axios.get("https://api.jikan.moe/v4/anime");
                setAnimeList(response.data.data.slice(0, 50)); // Limit to first 50 anime

            } catch (err) {
                console.error(err);

            }
        };
        fetchAnime();
    }, []);

    return <div>
        <Header />
        <Search />
        <div className="cards" >
            {animeList.map((anime) => (
                <Cards
                    key={anime.mal_id}
                    src={anime.images.jpg.image_url}
                    title={anime.title_english || anime.title}
                    episodes={anime.episodes}
                    year={anime.year}
                    summary={anime.synopsis}
                    score={anime.score}
                />
            ))}
        </div>

        <Footer />

    </div>

}

export default App

{/* <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
{animeList.map((anime) => (
  <div
    key={anime.mal_id}
  
    }}
  >
    <img
      src={anime.images.jpg.image_url}
      alt={anime.title}
     
    />
    <h3 >{anime.title}</h3>
  </div>
))}
</div>
); */}