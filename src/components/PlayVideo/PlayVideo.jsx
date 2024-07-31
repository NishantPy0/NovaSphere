import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../data'

const PlayVideo = ({ videoId }) => {

    const [apiData, setApiData] = useState(null);


    const fetchVideoData = async () => {
        //Fetching the data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]))
    }

    useEffect(() => {
        fetchVideoData();
    }, [])


    return (
        <div className='play-video'>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1 `}
                // src="https://www.youtube.com/embed/9xn0OHEZZ8Q?autoplay=1" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
            > </iframe>

            <h3> {apiData ? apiData.snippet.title : "Title here"} </h3>
            <div className="play-video-info">
                <p>{apiData ? apiData.statistics.viewCount : "1"} Views &bull; 2 days ago</p>
                <div>
                    <span> <img src={like} alt="" /> 500 </span>
                    <span> <img src={dislike} alt="" /> 500 </span>
                    <span> <img src={share} alt="" /> Share </span>
                    <span> <img src={save} alt="" /> 125 </span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img src={jack} />
                <div>
                    <p>
                        Channel Name
                    </p>
                    <span> 1M subscribers</span>
                </div>
                <button> Subscribe ! </button>
            </div>

            <div className="vid-description">
                <p>
                    channels that maks learning easy
                </p>
                <p> Subs for more</p>

                <hr />
                <h4>130 comments </h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack And Rose <span>1 day ago</span></h3>
                        <p>
                            Yo bro your video is Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Mollitia nemo, sed nisi tenetur aperiam provident consequuntur fuga, officia
                            ratione distinctio dolorem cumque sit molestiae aut similique optio adipisci
                            magnam reprehenderit?

                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} />



                            </div>

                        </p>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack And Rose <span>1 day ago</span></h3>
                        <p>
                            Yo bro your video is Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Mollitia nemo, sed nisi tenetur aperiam provident consequuntur fuga, officia
                            ratione distinctio dolorem cumque sit molestiae aut similique optio adipisci
                            magnam reprehenderit?

                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} />
                            </div>
                        </p>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack And Rose <span>1 day ago</span></h3>
                        <p>
                            Yo bro your video is Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Mollitia nemo, sed nisi tenetur aperiam provident consequuntur fuga, officia
                            ratione distinctio dolorem cumque sit molestiae aut similique optio adipisci
                            magnam reprehenderit?

                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} />



                            </div>


                        </p>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack And Rose <span>1 day ago</span></h3>
                        <p>
                            Yo bro your video is Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Mollitia nemo, sed nisi tenetur aperiam provident consequuntur fuga, officia
                            ratione distinctio dolorem cumque sit molestiae aut similique optio adipisci
                            magnam reprehenderit?

                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} />



                            </div>

                        </p>
                    </div>
                </div>

            </div>
        </div>//
    )
}

export default PlayVideo