// 函数 参数 混乱 5) Function arguments mess

// Bad code 
function createUser(
    username,
    email,
    password,
    firstName,
    lastName,
    birthday,
    gender,
    phoneNumber,
    profilePicture,
    registerPurpose,
    isActive,
    isAdmin,
    isVerified,
    registrationDate,
    status,
    timezone,
    theme,
    accountType,
    subscriptionPlan,
    preferredLanguage,
    expiryDate,
    lastPasswordUpdate,
    lastLogin,
    notificationSettings,
    customFields
  ){}

// Good code  使用 userData 来管理 参数
function createUser(userData){} 

// this is not OK
checkWindowForTrainingSchedule(
    targetedTrainingSchedule.startDaysInterval,
    targetedTrainingSchedule.endDaysInterval,
    targetedTrainingSchedule.milestone,
    targetedTrainingSchedule.name
  );
  
  // this is OK
  checkWindowForTrainingSchedule(targetedTrainingSchedule);