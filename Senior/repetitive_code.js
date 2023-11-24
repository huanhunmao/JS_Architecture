// 重复代码 4) Repetitive code

// Bad code 


// Good code

const TRAINING_SCHEDULES = [
    {
      name: "Training 03 Schedule",
      milestone: "Milestone3Schedule",
      startDaysInterval: 10,
      endDaysInterval: 16
    },
    {
      name: "Training 04 Schedule",
      milestone: "Milestone4Schedule",
      startDaysInterval: 24,
      endDaysInterval: 30
    },
    {
      name: "Training 05 Schedule",
      milestone: "Milestone5Schedule",
      startDaysInterval: 52,
      endDaysInterval: 58
    },
    {
      name: "Training 06 Schedule",
      milestone: "Milestone6Schedule",
      startDaysInterval: 80,
      endDaysInterval: 86
    },
    {
      name: "Training 07 Schedule",
      milestone: "Milestone7Schedule",
      startDaysInterval: 108,
      endDaysInterval: 114
    },
    {
      name: "Training 08 Schedule",
      milestone: "Milestone8Schedule",
      startDaysInterval: 136,
      endDaysInterval: 142
    },
    {
      name: "Training 09 Schedule",
      milestone: "Milestone9Schedule",
      startDaysInterval: 164,
      endDaysInterval: 170
    },
    {
      name: "Training 10 Schedule",
      milestone: "Milestone10Schedule",
      startDaysInterval: 216,
      endDaysInterval: 230
    }
  ];
  
  const targetedTrainingSchedule = TRAINING_SCHEDULES.find(
    (trainingSchedule) => trainingSchedule.name === fitnessTrainingSchedule.name
  );
  
  if (!targetedTrainingSchedule) {
    return;
  }
  
// this is not OK
checkWindowForTrainingSchedule(
    targetedTrainingSchedule.startDaysInterval,
    targetedTrainingSchedule.endDaysInterval,
    targetedTrainingSchedule.milestone,
    targetedTrainingSchedule.name
  );
  
  // this is OK
  checkWindowForTrainingSchedule(targetedTrainingSchedule);