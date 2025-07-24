import Home from "@/pages/home"
import {Routes, Route} from "react-router-dom"
export default function RouteApp() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  )
}