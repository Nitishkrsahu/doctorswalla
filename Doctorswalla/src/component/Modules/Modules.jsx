export function Modules(){
    return (
        <>
        <div style={{
            background: '#111827',
            height: '250px',
            width: '80px',
            position: "fixed",
            top: "200px",
            right: '0%',
            zIndex: 999,
            display: 'flex',
            flexDirection: "column",
            gap: '10px',
            justifyContent: 'center',
            borderStartStartRadius: '10px',
            borderBottomLeftRadius: '10px',
            paddingLeft: '10px',
            paddingRight: '10px'
        }}>
            <div style={{
                height: '60px',
                width: '60px',
                padding: '5px',
                border: '1px solid gray',
                borderRadius: '5px'
                }}
            >
                <img src="./Modules/doctor.png" alt="doctor" height="100%" width="100%"/>
            </div>
            <div style={{
                height: '60px',
                width: '60px',
                padding: '5px',
                border: '1px solid gray',
                borderRadius: '5px',
                }}
            >
                <img src="./Modules/lab.png" alt="doctor" height="100%" width="100%"/>
            </div>
            <div style={{
                height: '60px',
                width: '60px',
                padding: '5px',
                border: '1px solid gray',
                borderRadius: '5px'
                }}
            >
                <img src="./Modules/medicine.png" alt="doctor" height="100%" width="100%"/>
            </div>
        </div>
        </>
    )
}