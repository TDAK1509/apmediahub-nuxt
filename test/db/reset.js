const faker = require("faker");
const fs = require("fs");
const serviceList = JSON.parse(
  fs.readFileSync("assets/json/service_list.json")
);

const filePath = "test/db/db.json";
const data = getData();
fs.writeFile(filePath, JSON.stringify(data), error => {
  if (error) {
    console.log(error);
    return;
  }
});

//--------------------------
function getData() {
  return {
    currentUser: getCurrentUser()
  };
}

function getCurrentUser() {
  return {
    contact_list: getCurrentUserContactList(),
    project_list: getCurrentUserProjectList()
  };
}

function getCurrentUserContactList() {
  return [
    {
      id: 2,
      name: "Contact List 222",
      users: [4]
    },
    {
      id: 1,
      name: "Contact List 1",
      users: [1, 2, 3]
    }
  ];
}

function getCurrentUserProjectList() {
  const arrayLength = randomInteger(5) + 1;
  const array = Array(arrayLength).fill(1);

  for (let i = 0; i < arrayLength; i++) {
    array[i] = getProject();
  }

  return array;
}

function getProject() {
  return {
    id: faker.random.uuid(),
    closing_date: faker.date
      .future()
      .toISOString()
      .substr(0, 10),
    country: faker.address.country(),
    city: faker.address.city(),
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    services: getServices(),
    skills: faker.hacker.noun(),
    service_level: randomValueFromArray(["basic", "intermediate", "expert"]),
    type: randomValueFromArray(["one_time", "ongoing"]),
    payment: {
      type: randomValueFromArray(["fixed", "hour"]),
      amount: faker.finance.amount()
    },
    duration: randomValueFromArray([
      "project_duration",
      "less_than_a_week",
      "less_than_a_month",
      "one_to_three_months",
      "three_to_six_months",
      "six_to_twelve_months",
      "more_than_a_year"
    ]),
    time_requirement: randomValueFromArray([
      "time_requirement",
      "less_than_ten_hours_week",
      "ten_to_twenty_hours_week",
      "twenty_to_thirty_hours_week",
      "thirty_to_forty_hours_week",
      "more_than_forty_hours_week",
      "flexible"
    ]),
    attachment: null,
    who_can_see: null
  };
}

function getServices() {
  const arrayLength = randomInteger(5) + 1;
  const array = Array(arrayLength).fill(1);

  for (let i = 0; i < arrayLength; i++) {
    array[i] = getService();
  }

  return array;
}

function getService() {
  const keys = Object.keys(serviceList);
  const randomKeyIndex = randomInteger(keys.length);
  const selectedKey = keys[randomKeyIndex];

  const servicesByKey = serviceList[selectedKey];
  const serviceIndex = randomInteger(servicesByKey.length);
  const service = servicesByKey[serviceIndex];
  return selectedKey + ".child." + service; // Key for locale file output
}

function randomValueFromArray(array) {
  const randomKeyIndex = randomInteger(array.length);
  return array[randomKeyIndex];
}

// Random 0 to n-1
function randomInteger(n) {
  return Math.floor(Math.random() * n);
}
