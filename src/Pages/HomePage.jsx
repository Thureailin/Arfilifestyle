import Arfi from "../components/Home/Arfi"
import Define from "../components/Home/Define"
import Group from "../components/Home/Group"
import Heroslide from "../components/Home/Heroslide"
import Shopslide from "../components/Home/Shopslide"
import VideoList from "../components/Home/VideoList"



const HomePage = () => {
  return (
    <div>
        <Heroslide/>
        <VideoList/>
        <Arfi/>
        <Define/>
        <Shopslide/>
        <Group/>
    </div>
  )
}

export default HomePage