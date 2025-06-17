import { useState } from "react"

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
    const [medicineModule, setmedicineModule] = useState(defaultModule);
    const [medicineModuleText, setmedicineModuleText] = useState(false);
    return (
        <>
            <div className="position-fixed end-0 bottom-50 d-flex gap-1 flex-column me-2 bg-dark">
                <div className="d-flex justify-content-center align-items-center"
                    style={doctorModule} onMouseOver={() => {
                        setDoctorModule(hoverModule);
                        setDoctorModuleText(true);
                    }} onMouseLeave={() => {
                        setDoctorModule(defaultModule);
                        setDoctorModuleText(false)
                    }}>
                    <span className="bi bi-hospital-fill fs-3"></span>
                    {
                        doctorModuleText && <span className="fs-6 ps-1">Doctor</span>
                    }
                </div>
                <div className="d-flex justify-content-center align-items-center"
                    style={labModule}
                    onMouseOver={() => {
                        setLabModule(hoverModule);
                        setLabModuleText(true);
                    }}onMouseLeave={()=>{
                        setLabModule(defaultModule);
                        setLabModuleText(false)
                    }}
                >
                    <span className="bi bi-flask-fill">
                        {
                            labModuleText && <span>Test</span>
                        }
                    </span>
                </div>
                <div className="d-flex justify-content-center align-items-center"
                    style={defaultModule}>
                    <span className="bi bi-bandaid-fill"></span>
                </div>
            </div>
        </>
    )
}