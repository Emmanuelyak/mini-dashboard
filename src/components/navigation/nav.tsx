import { Search, Bell, SettingsIcon } from "lucide-react";
import { Input } from "../ui/input";

export default function Nav() {
  return (
    <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200 bg-white">
      <div className="text-3xl font-extrabold ">Logo</div>
      <div className="w-3/12 relative md:block hidden">
        <Search color="gray" className="absolute top-2 left-1" />
        <Input
          type="text"
          placeholder="Search"
          className="pl-8 w-full h-10 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            style={{ border: "1px solid #ccc" }}
        />
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        <Bell color="gray" className="w-6 h-6 cursor-pointer md:block " />
        <SettingsIcon color="gray" className="w-6 h-6 ml-4 cursor-pointer md:block " />
        <div>
            <div className="w-8 h-8 rounded-full ml-4 bg-gray-500 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
}
