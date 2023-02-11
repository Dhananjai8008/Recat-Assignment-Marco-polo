import React from "react";
const ToggleButton = () => {
    const [Toggle, setToggle] = useState("Polo")
    const [Heading, setHeading] = useState("Marco")
    const handleButton = () => {
        if (Heading == "Marco") {
            setHeading("Polo")
            setToggle("Marco")
        }
        else {
            setHeading("Marco")
            setToggle("Polo")
        }
    }
    return (
        <>
        <div>
            <h1 id="marco-polo">{Heading}</h1>
            <button id="marco-polo-toggler" onClick={handleButton}>{Toggle}</button>
        </div>
        </>
    )
}
export default ToggleButton;