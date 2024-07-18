import { useEffect, useState } from "react";
const baseUrl = "http://localhost:3030/jsonstore";

import * as gameService from "../../services/gameService";
import GameListItem from "./geme-list-item/GameListItem";


export default function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => setGames(result));

            
    }, []);


    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            
            {games.map(game => (
                <GameListItem key={game._id} {...game}/>
            ))}

            {games.length === 0 && (
                    <h3 className="no-articles">No articles yet</h3>
                )}
        </section>

    );
}