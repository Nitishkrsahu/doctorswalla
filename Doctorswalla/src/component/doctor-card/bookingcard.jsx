import { Button } from "@mui/material"
export function BookingCard(props){
    return (
        <>
        <div className="card w-25">
            <div className="card-header">
                <h2>{props.title}</h2>
            </div>
            <div className="card-body">
                <img src={props.photo_src} alt="photo" height="350"/>
            </div>
            <div className="card-footer">
                <p>{props.bio}</p>
                <Button variant="contained">Book Now</Button>
            </div>
        </div>
        </>
    )
}