import Header from "../../../../components/Header";
import RestoNavBar from "../components/RestoNavBar";
import Menu from "../components/Menu";

function RestaurantMenu() {
    return (
        <>
            <Header />
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                <div className="bg-white w-[100%] rounded p-3 shadow">
                    <RestoNavBar />
                    <Menu />
                </div>
            </div>
        </>
    )
}

export default RestaurantMenu;