import { NavRegalo } from "@/assets";
import Icons from "./icons";
import Image from 'next/image';

const Navbar = () => {
	return(
		<>
			<div className="flex items-center w-[full] border-2 border-gray-200">
				<div className="w-[70%]">
					<div className="w-[150px] p-3">
						<Image 
							src={NavRegalo} 
							alt="Regalo" 
						/>
					</div>
				</div>
				<div className="flex justify-between w-[30%]">
					<Icons />			
				</div>
			</div>
		</>
	)
};

export default Navbar;