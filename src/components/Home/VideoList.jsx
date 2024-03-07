import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const VideoList = () => {
    const url = useSelector(state => state.cart.url)
    const [currentVideo, setCurrentVideo] = useState(null)
    const [videos, setVideos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // https://ecommerceapp.arfilifestyle.com/api/youtube/link/list
    const getVideos = async () => {
        try {
            const api = await fetch(url + "/api/youtube/link/list")
            const { data } = await api.json()
            console.log(data)
            setVideos(data)
            if (data.length > 0) setCurrentVideo(data[0])
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    const updateCurrentVideo = (video) => {
        setCurrentVideo(video)
    }

    useEffect(() => {
        getVideos()
    }, [])

    // <iframe width="1280" height="720" src="https://www.youtube.com/embed/MoO0TpVNScY" title="12 February 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    let content

    if (isLoading)
        content = <div className="text-center">{isLoading && <p>Loading</p>}</div>
    if (!isLoading && videos.length > 0)
        content = (
            <>
                <h3 className="font-bold text-3xl mb-3">{currentVideo.youtube_title}</h3>
                <div className="w-full mb-6">
                    <iframe
                        src={
                            "https://www.youtube.com/embed/" +
                            currentVideo.youtube_link.split("/")[currentVideo.youtube_link.split("/").length - 1]
                        }
                        //   title={assignList.name}
                        allowFullScreen
                        className="object-cover w-full h-[650px]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    // style={{ width:'1400px',height:'500px' }}
                    ></iframe>
                </div>
                <div className="flex flex-wrap justify-center">
                    {videos.map(video => {
                        return (
                            <div
                                key={video.id + video.youtube_link}
                                onClick={() => updateCurrentVideo(video)}
                                className={`cursor-pointer border-[6px] p-1 ${video.youtube_link === currentVideo.youtube_link ? 'border-cus-primary' : 'border-transparent'}`}>
                                <iframe
                                    className="pointer-events-none"
                                    src={
                                        "https://www.youtube.com/embed/" +
                                        video.youtube_link.split("/")[video.youtube_link.split("/").length - 1]
                                    }
                                    //   title={assignList.name}
                                    allowFullScreen
                                // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                // style={{ width:'1400px',height:'500px' }}
                                ></iframe>
                            </div>
                        )
                    })}
                </div>
            </>
        )

    return <div className="container">{content}</div>
}

export default VideoList
