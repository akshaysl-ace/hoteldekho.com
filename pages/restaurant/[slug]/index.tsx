import RestoDetailsHeader from './components/RestoDetailsHeader';
import RestoNavBar from './components/RestoNavBar';
import RestoTitle from './components/RestoTitle';
import RestoRating from './components/RestoRating';
import RestoDescription from './components/RestoDescription';
import RestoImages from './components/RestoImages';
import RestoReviews from './components/RestoReviews';
import ReservationCard from './components/ReservationCard';

function RestaurantDeatils() {
    return (
        <>
            <RestoDetailsHeader />
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                <div className="bg-white w-[70%] rounded p-3 shadow">
                    <RestoNavBar />
                    <RestoTitle />
                    <RestoRating />
                    <RestoDescription />
                    <RestoImages />
                    <RestoReviews />
                </div>
                <div className="w-[27%] relative text-reg">
                    <ReservationCard />
                </div>
            </div>
        </>
    )
}

export default RestaurantDeatils;