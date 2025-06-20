import { useEffect, useState } from "react"
import { Header } from "../component/Header/Header"
import { Modules } from "../component/Modules/Modules"
import { Button } from "@mui/material"
import axios from "axios"
import { BookingCard } from "../component/doctor-card/bookingcard"
import '../App.css'
export function Home() {
    const [doctor, setDoctor] = useState({})
    useEffect(() => {
        axios.get('./doctors.json')
            .then(function (response) {
                setDoctor(response.data);
                console.log(response.data);
            })
    }, [])
    return (
        <>
            <Header location="Hydrebad" tel="+918651295487" brand="Doctorswalla"/>
            <Modules />
            <section className="container-fluid mt-3">
                <div style={{height: '250px'}}>
                    <img src="./Banner/par.webp" alt="banner" style={{objectFit: 'cover', height: '100%', width: '100%'}}/>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="input-group w-50">
                        <input type="text" className="form-control bg-black text-white" placeholder="eg:- Doctor, Hospital" />
                        <span className="bi bi-search bg-dark input-group-text text-white"></span>
                    </div>
                </div>
                <div className="row g-2 justify-content-center mt-4">
                    {
                        doctor.doctors?.map((item) => {
                            return (
                            <BookingCard 
                                title= {item.name}
                                photo_src = {item.photo_url}
                                bio={item.bio}
                                key={item.doctor_id}
                            />
                            )
                        }
                        )
                    }
                </div>
            </section>
        </>
    )
}