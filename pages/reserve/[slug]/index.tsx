import ReservationForm from './components/ReservationForm';
import ReservationPageHeader from './components/ReservationPageHeader';

function Reservation() {
    return (
        <div className="border-t h-screen">
            <div className="py-9 w-3/5 m-auto">
                <ReservationPageHeader />
                <ReservationForm />
            </div>
        </div>
    )
}

export default Reservation;