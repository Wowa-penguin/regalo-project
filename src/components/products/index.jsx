import { HamburgerIcon } from "@/assets";
import Image from "next/image";

const Products = () => {
	return(
		<>
			<div className="flex justify-center border-1 border-gray-200 border-t-0 shadow-md border-r-0 border-l-0 p-2 gap-2">
				<Image className="w-[25px]" src={HamburgerIcon} alt="Hamburger Icon" />
				<p>Vöruflokkar</p>
			</div>
		</>
	)
};

export default Products;