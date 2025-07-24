import Nav from "@/components/navigation/nav";
import {ChartBarMixed, ChartOne, ChartTwo} from "@/components/graphs/graphs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableComponent } from "@/components/Table/table-component";

export function SelectOptions() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}



export default function Home() {
  return (
    <div className="bg-gray-50">
      <Nav />
      <div className="p-5">
        <div className=" mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="px-2 py-4  rounded-lg shadow-md bg-white">
              <p>Daily visits</p>
              <h3 className="font-bold">10</h3>
            </div>
            <div className="px-2 py-4  rounded-lg shadow-md bg-white">
              <p>Daily visits</p>
              <h3 className="font-bold">10</h3>
            </div>
            <div className="px-2 py-4  rounded-lg shadow-md bg-white">
              <p>Daily visits</p>
              <h3 className="font-bold">10</h3>
            </div>
            <div className="px-2 py-4  rounded-lg shadow-md bg-white">
              <p>Daily visits</p>
              <h3 className="font-bold">10</h3>
            </div>
            <div className="px-2 py-4  rounded-lg shadow-md bg-white">
              <p>Daily visits</p>
              <h3 className="font-bold">10</h3>
            </div>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <ChartOne />
          </div>
          <div>
            <ChartBarMixed />
          </div>
          <div>
            <ChartTwo />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:flex md:justify-between items-center mb-5">
          <div className="flex md:flex-row flex-col gap-2">
            <button className="bg-blue-600 text-white rounded-sm px-4 py-2">
              Export CSV
            </button>
            <button className="bg-red-600 text-white rounded-sm px-4 py-2">
              Export PDF
            </button>
          </div>
          <div className="flex gap-3 items-center justify-end">
              <p className="text-md font-semibold">Select Options</p>
            
            <SelectOptions />
          </div>
        </div>
        <TableComponent />
      </div>
    </div>
  );
}
