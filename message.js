
const exerciseArr = [
    [
        "Squat",
        "Leg Press",
        "Hack Squat",
        "Bench Press",
        "Shoulder Press",
        "Deadlift",
        "Bent Over Row",
    ],
    [
        "1-4, max heavy",
        "4-6, heavy",
        "6-10, moderate",
        "10-15, light",
        "15+ very light",
    ],
    ["one set", "two sets", "three sets", "four sets", "five sets"],
];
//generate a random number
const randomNumberGenerator = (num) => {
    const randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
};
//generate a exercise using the randomnumber
const generateExercise = () => {
    const num = randomNumberGenerator(exerciseArr[0].length);
    const exercise = exerciseArr[0][num];
    return exercise;
};
//generate reps using randomnumber
const generateReps = () => {
    const num = randomNumberGenerator(exerciseArr[1].length);
    const reps = exerciseArr[1][num];
    return reps;
};
//generate sets using randomnumber
const generateSets = () => {
    const num = randomNumberGenerator(exerciseArr[2].length);
    const sets = exerciseArr[2][num];
    return sets;
};
//create message based on previous function outcomes
const createMessage = (exercise, reps, sets) => {
    const message = `"Perform a ${exercise} with a rep range of ${reps} weight, ${sets}!"`;
    return message;
};

const displayMessage = (message) => {
    console.log(message);
};

const init = () => {
    const exercise = generateExercise();
    const reps = generateReps();
    const Sets = generateSets();
    const message = createMessage(exercise, reps, sets);
    displayMessage(message);
};

init();