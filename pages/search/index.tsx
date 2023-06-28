import SearchComponentHeader from "./components/SearchComponentHeader";
import SideBar from "./components/SideBar";
import HotelCard from "./components/HotelCard";

function SearchPage() {
    return (
        <>
            <SearchComponentHeader />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SideBar />
                <div className="w-5/6">
                    <HotelCard />
                </div>
            </div>
        </>
    )
}

export default SearchPage;