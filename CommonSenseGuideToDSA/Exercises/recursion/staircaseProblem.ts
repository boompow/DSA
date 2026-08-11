export { }

function staircasePaths(steps: number): number {
    if (steps <= 0) return 0;
    else if (steps === 1) return 1;
    else if (steps === 2) return 2;
    else if (steps === 3) return 4;
    return staircasePaths(steps - 1) + staircasePaths(steps - 2) + staircasePaths(steps - 3);
}

function staircasePathsAttempt2(steps: number): number {
    if (steps < 0) return 0;
    else if (steps === 1 || steps === 0) return 1;
    return staircasePathsAttempt2(steps - 1) + staircasePathsAttempt2(steps - 2) + staircasePathsAttempt2(steps - 3);
}

console.log(staircasePathsAttempt2(11))