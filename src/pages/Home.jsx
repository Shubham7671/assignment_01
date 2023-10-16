import React, { useEffect, useState } from 'react'
import { getTheDatafromApi } from '../services/api';




export default function Home() {
    const [apiData, setApiData] = useState();




    async function getTheData() {
        try {
            const data = await getTheDatafromApi();
            console.log(data.result)
            setApiData(data.result);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getTheData()
    }, [])
    return (
        <div className='movie-container'>
            <h2 style={{ textAlign: "center" }}>Movie List</h2>
            {apiData?.map((el) => {
                const { poster, totalVoted, title, director, stars, genre, runTime, language, releasedDate, pageViews } = el;

                return <div key={el._id} className='movie-card-container' >
                    
                    <div className='movie-card'>
                        <div>
                            <i className="fa-solid fa-caret-up"></i>
                            <h2>{totalVoted}</h2>
                            <i className="fa-solid fa-sort-down"></i>
                            <p>Votes</p>
                        </div>
                        <div>
                            <img src={poster} alt="" />
                        </div>
                        <div>
                            <h3>{title}</h3>
                            <p>Genre: {genre}</p>
                            <p>Director: {director?.join(', ')}</p>
                            <p>Starring: {stars.join(', ')}</p>
                            <p><span> {runTime} min | </span> <span>{language} </span><span> | {releasedDate}</span></p>
                            <p><span>{pageViews} Views</span> | Voted by {totalVoted} people</p>
                            
                        </div>

                    </div>
                    <button>Watch Trailer</button>
                </div>
            })}

        </div>
    )
}
