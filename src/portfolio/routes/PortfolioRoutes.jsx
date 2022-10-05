import { Navigate, Route, Routes } from "react-router-dom"
import { PortfolioPage, PortFolioPageDetails } from "../pages"

export const PortfolioRoutes = () => {



  return (
    <Routes>
        <Route path="/" element={ <PortfolioPage />} />
        <Route path="/details" element={ <PortFolioPageDetails />} />
        <Route path="/*" element={ <Navigate to="/" />} />
    </Routes>
  )
}

