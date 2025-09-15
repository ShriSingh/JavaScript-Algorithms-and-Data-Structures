function getAverage(scores) {
  let scoreSum = 0;

  for (let i = 0; i < scores.length; i++) {
    scoreSum = scoreSum + scores[i];
  }

  let average = scoreSum / scores.length;

  return(average);
}

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(56));

function hasPassingGrade(score) {
  let studentScore =  getGrade(score);

  if (studentScore === "F") {
    return false;
  }

  return true;
}


// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(53));
// console.log(hasPassingGrade(87));

function studentMsg(totalScores, studentScore) {
  const averageScore = getAverage(totalScores);
  const studentGrade = getGrade(studentScore);
  const passIndicator = hasPassingGrade(studentScore);

  if (passIndicator == true) {
    return "Class average: " + averageScore + ". Your grade: " + studentGrade + ". You passed the course.";
  }
  
  return "Class average: " + averageScore + ". Your grade: " + studentGrade + ". You failed the course.";
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));