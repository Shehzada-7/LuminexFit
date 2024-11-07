let profile = {};
let workouts = [];

function showLogin() {
    alert("Login functionality will go here.");
}

function showSignup() {
    alert("Signup functionality will go here.");
}

function saveProfile() {
    const weight = document.getElementById('weight').value;
    const goal = document.getElementById('goal').value;
    if (weight && goal) {
        profile = { weight, goal };
        alert("Profile saved successfully!");
        document.getElementById('profile').classList.add('hidden');
        document.getElementById('workouts').classList.remove('hidden');
    } else {
        alert("Please fill out all fields.");
    }
}

function logWorkout(event) {
    event.preventDefault();
    const exercise = document.getElementById('exercise').value;
    const duration = document.getElementById('duration').value;
    const calories = document.getElementById('calories').value;

    if (exercise && duration && calories) {
        const workout = { exercise, duration, calories };
        workouts.push(workout);
        displayWorkoutHistory();
        document.getElementById('workoutForm').reset();
    } else {
        alert("Please fill out all fields.");
    }
}

function displayWorkoutHistory() {
    const tbody = document.querySelector('#workoutHistory tbody');
    tbody.innerHTML = '';

    workouts.forEach(workout => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${workout.exercise}</td>
            <td>${workout.duration} mins</td>
            <td>${workout.calories} kcal</td>
        `;
        tbody.appendChild(row);
    });
}

document.getElementById('workoutForm').addEventListener('submit', logWorkout);
