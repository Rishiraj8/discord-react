import { FaPoop } from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { FaDiscord } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { SiRiotgames } from "react-icons/si";
import { SiAmazongames } from "react-icons/si";
import { SiCounterstrike } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className=" bg-slate-600 fixed h-screen top-0 left-0 w-16 m-0 flex flex-col text-white">
      <SidebarIcon icon={<FaPoop size="28"/>} />
      <SidebarIcon icon={<GiNinjaHeroicStance size="28"/>} />
      <SidebarIcon icon={<FaDiscord size="28"/>} /> 
      <SidebarIcon icon={<SiEpicgames size="28"/>} />
      <SidebarIcon icon={<SiRiotgames size="28"/>} />
      <SidebarIcon icon={<SiAmazongames size="28"/>}/>
      <SidebarIcon icon={<SiCounterstrike size="28"/>}/>
    </div>
  );
}   
const SidebarIcon=({icon})=>(
    <div className="sidebar-icon">
        {icon}
    </div>
)
export default Sidebar;