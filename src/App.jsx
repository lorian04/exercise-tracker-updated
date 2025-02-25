import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import CyclingExercise from "./components/CyclingExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push-ups", type: "repetition" },
    { name: "Squats", type: "repetition" },
    { name: "Running", type: "duration" },
    { name: "Jump Rope", type: "duration" },
    { name: "Cycling", type: "cycling" } // New exercise added
  ];

  const renderExerciseComponent = () => {
    if (selectedExercise.type === "repetition") {
      return <RepetitionExercise name={selectedExercise.name} />;
    } else if (selectedExercise.type === "duration") {
      return <DurationExercise name={selectedExercise.name} />;
    } else if (selectedExercise.type === "cycling") {
      return <CyclingExercise name={selectedExercise.name} />;
    } else {
      return <div>Unknown exercise type</div>;
    }
  };

  return (
    <div>
      {!selectedExercise ? (
        <div>
          <h1>Exercise Menu</h1>
          {exercises.map((exercise) => (
            <button
              key={exercise.name}
              onClick={() => setSelectedExercise(exercise)}
            >
              {exercise.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedExercise(null)}>Back</button>
          {renderExerciseComponent()}
        </div>
      )}
    </div>
  );
}

export default App;
