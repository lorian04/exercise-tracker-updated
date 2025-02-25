import { useState } from "react";

function CyclingExercise() {
    const [distance, setDistance] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`You cycled ${distance} miles in ${time} minutes!`);
        setDistance("");
        setTime("");
    };

    return (
        <div>
            <h3>Cycling Exercise</h3>
            <form onSubmit={handleSubmit}>
                <label>Distance (miles):</label>
                <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} required />

                <label>Time (minutes):</label>
                <input type="number" value={time} onChange={(e) => setTime(e.target.value)} required />

                <button type="submit">Log Ride</button>
            </form>
        </div>
    );
}

export default CyclingExercise;
