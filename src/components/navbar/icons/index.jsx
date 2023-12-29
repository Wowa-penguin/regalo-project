import { SearchIcon, HeartIcon, HamburgerIcon } from "@/assets";
import Image from 'next/image';

const Icons = () => {
  const icons = [
    {
      id: 2,
      icon: SearchIcon,
      alt: "SearchIcon"
    },
    {
      id: 3,
      icon: HeartIcon,
      alt: "HeartIcon",
      conter: 0
    },
    {
      id: 4,
      icon: HamburgerIcon,
      alt: "HamburgerIcon"
    }
  ]
 
  return(
    <>
      {icons.map((icon) => {
        return(
          <>  
            <div className="w-[50px] p-3 flex">         
              <Image 
                key={icon.id}
                src={icon.icon} 
                alt={icon.alt} 
             />
             <p>{icon.conter}</p>
            </div>
          </>
        )
      })}
    </>
  )
};

export default Icons;