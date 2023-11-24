// 硬编码  Hardcoded strings and numbers

// Bad code 
if (fitnessTrainingSchedule.name == "Training 03 Schedule") {
    checkWindowForTrainingSchedule(10, 16, "Milestone3Schedule", "Training 03 Schedule");
  }
  if (fitnessTrainingSchedule.name == "Training 04 Schedule") {
    checkWindowForTrainingSchedule(24, 30, "Milestone4Schedule", "Training 04 Schedule");
  }
  if (fitnessTrainingSchedule.name == "Training 05 Schedule") {
    checkWindowForTrainingSchedule(52, 58, "Milestone5Schedule", "Training 05 Schedule");
  }
  if (fitnessTrainingSchedule.name == "Training 06 Schedule") {
    checkWindowForTrainingSchedule(80, 86, "Milestone6Schedule", "Training 06 Schedule");
  }
  if (fitnessTrainingSchedule.name == "Training 07 Schedule") {
    checkWindowForTrainingSchedule(108, 114, "Milestone7Schedule", "Training 07 Schedule");
  }
  if (fitnessTrainingSchedule.name == "Training 08 Schedule") {
    checkWindowForTrainingSchedule(136, 142, "Milestone8Schedule", "Training 08 Schedule");
  }
  if (fitnessTrainingSchedule.name == "Training 09 Schedule") {
    checkWindowForTrainingSchedule(164, 170, "Milestone9Schedule", "Training 09 Schedule");
  }
  if (fitnessTrainingSchedule.name == "Training 10 Schedule") {
    checkWindowForTrainingSchedule(216, 230, "Milestone10Schedule", "Training 10 Schedule");
  }

// Good code 取代了 这些魔法数字  并且 结构更清晰
// 注意 这个 code 还可以优化  看 repetitive_code.js
// const TRAINING_SCHEDULE_03 = {
//     name: "Training 03 Schedule",
//     milestone: "Milestone3Schedule",
//     startDaysInterval: 10,
//     endDaysInterval: 16
//   };
//   const TRAINING_SCHEDULE_04 = {
//     name: "Training 04 Schedule",
//     milestone: "Milestone4Schedule",
//     startDaysInterval: 24,
//     endDaysInterval: 30
//   };
//   const TRAINING_SCHEDULE_05 = {
//     name: "Training 05 Schedule",
//     milestone: "Milestone5Schedule",
//     startDaysInterval: 52,
//     endDaysInterval: 58
//   };
//   const TRAINING_SCHEDULE_06 = {
//     name: "Training 06 Schedule",
//     milestone: "Milestone6Schedule",
//     startDaysInterval: 80,
//     endDaysInterval: 86
//   };
//   const TRAINING_SCHEDULE_07 = {
//     name: "Training 07 Schedule",
//     milestone: "Milestone7Schedule",
//     startDaysInterval: 108,
//     endDaysInterval: 114
//   };
//   const TRAINING_SCHEDULE_08 = {
//     name: "Training 08 Schedule",
//     milestone: "Milestone8Schedule",
//     startDaysInterval: 136,
//     endDaysInterval: 142
//   };
//   const TRAINING_SCHEDULE_09 = {
//     name: "Training 09 Schedule",
//     milestone: "Milestone9Schedule",
//     startDaysInterval: 164,
//     endDaysInterval: 170
//   };
//   const TRAINING_SCHEDULE_10 = {
//     name: "Training 10 Schedule",
//     milestone: "Milestone10Schedule",
//     startDaysInterval: 216,
//     endDaysInterval: 230
//   };
  
//   if (fitnessTrainingSchedule.name == TRAINING_SCHEDULE_03.name) {
//     checkWindowForTrainingSchedule(
//       TRAINING_SCHEDULE_03.startDaysInterval,
//       TRAINING_SCHEDULE_03.endDaysInterval,
//       TRAINING_SCHEDULE_03.milestone,
//       TRAINING_SCHEDULE_03.name
//     );
//   }
//   if (fitnessTrainingSchedule.name == TRAINING_SCHEDULE_04.name) {
//     checkWindowForTrainingSchedule(
//       TRAINING_SCHEDULE_04.startDaysInterval,
//       TRAINING_SCHEDULE_04.endDaysInterval,
//       TRAINING_SCHEDULE_04.milestone,
//       TRAINING_SCHEDULE_04.name
//     );
//   }
//   if (fitnessTrainingSchedule.name == TRAINING_SCHEDULE_05.name) {
//     checkWindowForTrainingSchedule(
//       TRAINING_SCHEDULE_05.startDaysInterval,
//       TRAINING_SCHEDULE_05.endDaysInterval,
//       TRAINING_SCHEDULE_05.milestone,
//       TRAINING_SCHEDULE_05.name
//     );
//   }
//   if (fitnessTrainingSchedule.name == TRAINING_SCHEDULE_06.name) {
//     checkWindowForTrainingSchedule(
//       TRAINING_SCHEDULE_06.startDaysInterval,
//       TRAINING_SCHEDULE_06.endDaysInterval,
//       TRAINING_SCHEDULE_06.milestone,
//       TRAINING_SCHEDULE_06.name
//     );
//   }
//   if (fitnessTrainingSchedule.name == TRAINING_SCHEDULE_07.name) {
//     checkWindowForTrainingSchedule(
//       TRAINING_SCHEDULE_07.startDaysInterval,
//       TRAINING_SCHEDULE_07.endDaysInterval,
//       TRAINING_SCHEDULE_07.milestone,
//       TRAINING_SCHEDULE_07.name
//     );
//   }
//   if (fitnessTrainingSchedule.name == TRAINING_SCHEDULE_08.name) {
//     checkWindowForTrainingSchedule(
//       TRAINING_SCHEDULE_08.startDaysInterval,
//       TRAINING_SCHEDULE_08.endDaysInterval,
//       TRAINING_SCHEDULE_08.milestone,
//       TRAINING_SCHEDULE_08.name
//     );
//   }
//   if (fitnessTrainingSchedule.name == TRAINING_SCHEDULE_09.name) {
//     checkWindowForTrainingSchedule(
//       TRAINING_SCHEDULE_09.startDaysInterval,
//       TRAINING_SCHEDULE_09.endDaysInterval,
//       TRAINING_SCHEDULE_09.milestone,
//       TRAINING_SCHEDULE_09.name
//     );
//   }
//   if (fitnessTrainingSchedule.name == TRAINING_SCHEDULE_10.name) {
//     checkWindowForTrainingSchedule(
//       TRAINING_SCHEDULE_10.startDaysInterval,
//       TRAINING_SCHEDULE_10.endDaysInterval,
//       TRAINING_SCHEDULE_10.milestone,
//       TRAINING_SCHEDULE_10.name
//     );
//   }


// better code 
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