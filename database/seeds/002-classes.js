exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("class")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("class").insert([
        {
          name: "Yoga",
          type: "Yoga",
          startTime: "7-25-2020 7AM",
          duration: 60,
          intensity: "Low",
          location: "Columbia",
          numberOfRegisteredAttendees: 5,
          maxClassSize: 10,
        },
        {
          name: "Biking",
          type: "HIIT",
          startTime: "7-30-2020 7AM",
          duration: 60,
          intensity: "Low",
          location: "Florida",
          numberOfRegisteredAttendees: 5,
          maxClassSize: 10,
        },
        {
          name: "Boxing",
          type: "Cardio",
          startTime: "8-1-2020 7AM",
          duration: 60,
          intensity: "Low",
          location: "Ohio",
          numberOfRegisteredAttendees: 5,
          maxClassSize: 10,
        },
      ]);
    });
};
