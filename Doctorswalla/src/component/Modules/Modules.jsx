import { useState } from "react"

import { Link } from "react-router-dom";
import { Medicine } from "../../pages/Medicine";
import { Lab } from "../../pages/Lab";
import { Home } from "../../pages/Home";
export function Modules() {
    const defaultModule = {
        width: '50px',
        height: '50px',
        borderRadius: '50px',
        backgroundColor: 'green',
        color: '#fff'
    }
    const hoverModule = {
        ...defaultModule,
        width: '120px'
    }
    const [doctorModule, setDoctorModule] = useState(defaultModule);
    const [doctorModuleText, setDoctorModuleText] = useState(false);
    const [labModule, setLabModule] = useState(defaultModule);
    const [labModuleText, setLabModuleText] = useState(false);
    const [medicineModule, setMedicineModule] = useState(defaultModule);
    const [medicineModuleText, setMedicineModuleText] = useState(false);
    return (
        <>

            <div className="position-fixed end-0 bottom-50 d-flex gap-1 flex-column me-2 bg-dark">
                <Link to="/"
                className="d-flex justify-content-center align-items-center text-decoration-none"
                    style={doctorModule} onMouseOver={() => {
                        setDoctorModule(hoverModule);
                        setDoctorModuleText(true);
                    }} onMouseLeave={() => {
                        setDoctorModule(defaultModule);
                        setDoctorModuleText(false)
                    }}

                >
                    <span className="bi bi-hospital-fill fs-3"></span>
                    {
                        doctorModuleText && <span className="fs-6 ps-1">Doctor</span>
                    }
                </Link>
                <Link to="/lab"className="d-flex justify-content-center align-items-center text-decoration-none"
                    style={labModule}
                    onMouseOver={() => {
                        setLabModule(hoverModule);
                        setLabModuleText(true);
                    }} onMouseLeave={() => {
                        setLabModule(defaultModule);
                        setLabModuleText(false)
                    }}

                >
                    <span className="bi bi-flask-fill fs-3">
                        {
                            labModuleText && <span className="fs-6 ps-1">Test</span>
                        }
                    </span>
                </Link>
                <Link to="/medicine"
                className="d-flex justify-content-center align-items-center text-decoration-none"
                    style={medicineModule}
                    onMouseOver={() => {
                        setMedicineModule(hoverModule);
                        setMedicineModuleText(true);
                    }} onMouseLeave={() => {
                        setMedicineModule(defaultModule);
                        setMedicineModuleText(false)
                    }}
                >
                    <span className="bi bi-bandaid-fill fs-3"></span>
                    {
                        medicineModuleText && <span className="fs-6 ps-1">Test</span>
                    }

                </Link>
            </div>
        </>
    )
}