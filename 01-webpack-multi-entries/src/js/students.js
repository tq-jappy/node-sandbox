import { getAvg } from './averageService';

document.body.style.backgroundColor = 'lightSkyBlue';

const scores = [90, 75, 60, 99, 94, 30, 83, 47];
const averageScore = getAvg(scores);

const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);
