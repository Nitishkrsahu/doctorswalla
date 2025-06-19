import { useEffect, useState } from "react"
import { Header } from "../component/Header/Header"
import { Modules } from "../component/Modules/Modules"
import axios from "axios"
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
        <Header />
        <Modules />
        <section className="container-fluid mt-3">   
            <div className="d-flex justify-content-center">
                <div className="input-group w-50">
                    <span className="bi bi-geo-alt-fill input-group-text bg-dark text-white"></span>
                    <input type="text" className="form-control" placeholder="eg:- Doctor, Hospital" />
                    <span className="bi bi-search bg-success input-group-text text-white"></span>
                </div>
            </div>
            <div className="row g-2 justify-content-center mt-4">
                {
                doctor.doctors?.map((item) => {
                    return (
                        <div key={item.doctor_id} className="card w-25 col-lg-4 col-md-2 col-sm-1 m-lg-2" >
                            <div className="card-header position-relative">
                                <img src={item.photo_url} alt="doctors" width="100%" height="350"/>
                                <button className="btn btn-warning bi bi-cart4" style={{
                                    position: "absolute",
                                    left: '45%',
                                    top: '80%',
                                    zIndex: '1'
                                }}></button>
                                <button className="btn btn-warning bi bi-cart4" style={{
                                    position: "absolute",
                                    left: '60%',
                                    top: '80%',
                                    zIndex: '1'
                                }}></button>
                            </div>
                            <div className="card-body">
                                <h4>{item.name}</h4>
                                <p>{item.bio}</p>
                            </div>
                        </div>
                    )

                }
                )
            }
            </div>
        </section>
        </>
    )
}