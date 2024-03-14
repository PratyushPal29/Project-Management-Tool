import React from "react";

const ProjDetails = () => {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <div >
                <h1
                    className="text-center my-4 align-items-center"
                    style={{ color: "black", paddingTop: "5vh", textAlign: "center" }}
                >
                    Project Details
                </h1>
            </div>
            <div className="container" style={{marginLeft: "20rem", width:"60%"}}>
                <div
                    style={{
                        marginTop: "30px",
                        backgroundColor: "white",
                        textAlign: "justify",
                        paddingLeft: "20px",
                        paddingTop: "10px",
                        borderRadius: "20px",
                        border: "2px solid teal"
                    }}
                >
                    <p style={{ fontSize: "25px" }}>Name: </p>
                    <p style={{ fontSize: "25px" }}>Description:</p>
                    <p style={{ fontSize: "25px" }}>Leader Name:</p>
                </div>
            </div>
        </div>

    )
}

export default ProjDetails;