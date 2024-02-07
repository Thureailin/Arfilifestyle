import Arfi from "../components/Home/Arfi"
import Define from "../components/Home/Define"
import Group from "../components/Home/Group"
import Heroslide from "../components/Home/Heroslide"
import Shopslide from "../components/Home/Shopslide"



const HomePage = () => {
  return (
    <div>
        <Heroslide/>
        <Arfi/>
        <Define/>
        <Shopslide/>
        <Group/>
    </div>
  )
}

export default HomePage