const faker = require("faker");
const _ = require("lodash");

const userRoles = require("../../utils/user_roles");

const fs = require("fs");
const serviceList = JSON.parse(
  fs.readFileSync("assets/json/service_list.json")
);

const filePath = "test/db/db.json";
const userIdList = getUserIdList();
const data = getData(userIdList);

fs.writeFile(filePath, JSON.stringify(data), error => {
  if (error) {
    console.log(error);
    return;
  }
});

function getData(userIdList) {
  const users = getUsers(userIdList);

  return {
    currentUser: randomElementFromArray(users),
    users
  };
}

function getUserIdList() {
  const n = randomInteger(30);
  const list = [];

  for (let i = 0; i < n; i++) {
    list.push(faker.random.uuid());
  }

  return list;
}

//--------------------------

function getUsers(userIdList) {
  const users = [];

  for (let i = 0; i < userIdList.length; i++) {
    const userId = userIdList[i];
    const user = getUser(userId);
    users.push(user);
    console.log(user);
  }

  return users;
}

function getUser(userId) {
  const fullName = faker.name.firstName() + " " + faker.name.lastName();

  return {
    _id: userId,
    email: faker.internet.email(),
    role: randomElementFromArray([
      userRoles.CLIENT,
      userRoles.AGENCY,
      userRoles.FREELANCER,
      userRoles.JOURNALIST
    ]),
    avatar: faker.image.avatar(),
    rating: randomInteger(6),
    full_name: fullName,
    country: faker.address.country(),
    city: faker.address.city(),
    job_title: faker.name.jobTitle(),
    company: faker.company.companyName(),
    website: faker.internet.url(),
    mobile: {
      country_code: "+84",
      number: randomInteger(1000000000)
    },
    contact_list: generateList(5, getContactList),
    project_list: generateList(5, getProject),
    job_list: generateList(5, getJob)
  };
}

function getContactList() {
  return {
    _id: faker.random.uuid(),
    name: faker.lorem.words(),
    users: randomElementsFromArray(userIdList),
    created_at: faker.date
      .past()
      .toISOString()
      .substr(0, 10)
  };
}

function getProject() {
  return {
    _id: faker.random.uuid(),
    closing_date: faker.date
      .future()
      .toISOString()
      .substr(0, 10),
    country: faker.address.country(),
    city: faker.address.city(),
    project_name: faker.commerce.productName(),
    project_description: faker.lorem.paragraph(),
    services: getServices(),
    required_skills: faker.hacker.noun(),
    service_level: randomElementFromArray([
      "service_level.basic",
      "service_level.intermediate",
      "service_level.expert"
    ]),
    project_type: randomElementFromArray([
      "project_type.one_time",
      "project_type.ongoing",
      faker.lorem.words()
    ]),
    payment: {
      type: randomElementFromArray([
        "project_payment.fixed",
        "project_payment.hour"
      ]),
      amount: faker.finance.amount()
    },
    duration: randomElementFromArray([
      "project_duration.less_than_a_week",
      "project_duration.less_than_a_month",
      "project_duration.one_to_three_months",
      "project_duration.three_to_six_months",
      "project_duration.six_to_twelve_months",
      "project_duration.more_than_a_year"
    ]),
    time_requirement: randomElementFromArray([
      "project_time_requirement.less_than_ten_hours_week",
      "project_time_requirement.ten_to_twenty_hours_week",
      "project_time_requirement.twenty_to_thirty_hours_week",
      "project_time_requirement.thirty_to_forty_hours_week",
      "project_time_requirement.more_than_forty_hours_week",
      "project_time_requirement.flexible"
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

  return [...new Set(array)];
}

function getService() {
  const keys = Object.keys(serviceList);
  const randomKeyIndex = randomInteger(keys.length);
  const selectedKey = keys[randomKeyIndex];

  const servicesByKey = serviceList[selectedKey];
  const serviceIndex = randomInteger(servicesByKey.length);
  const service = servicesByKey[serviceIndex];
  return `services.${selectedKey}.child.${service}`; // Key for locale file output
}

function getJob() {
  return {
    _id: faker.random.uuid(),
    job_title: faker.name.jobTitle(),
    job_id: faker.random.uuid(),
    post_date: new Date().toISOString().substr(0, 10),
    closing_date: faker.date
      .future()
      .toISOString()
      .substr(0, 10),
    country: faker.address.country(),
    city: faker.address.city(),
    job_type: randomElementFromArray([
      "job_type.all",
      "job_type.full_time",
      "job_type.part_time",
      "job_type.freelance",
      "job_type.internship",
      "job_type.short_term"
    ]),
    department: faker.commerce.department(),
    reports_to: faker.name.jobTitle(),
    job_purpose: faker.hacker.phrase(),
    company_overview: faker.lorem.paragraph(),
    key_responsibilities: faker.lorem.paragraph(),
    competencies: faker.lorem.paragraph(),
    qualifications_and_experiences: faker.lorem.paragraph(),
    challenges_and_opportunities: faker.lorem.paragraph(),
    attachment: {
      job_description: null,
      application_form: null
    },
    who_can_see: null
  };
}

// HELPERS
// Random 0 to n-1
function randomInteger(n) {
  return Math.floor(Math.random() * n);
}

function randomElementFromArray(array) {
  const randomKeyIndex = randomInteger(array.length);
  return array[randomKeyIndex];
}

function randomElementsFromArray(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const random = randomInteger(2);
    if (random === 1) result.push(array[i]);
  }

  result = _.shuffle(result);

  return result;
}

function generateList(maxListLength, method) {
  const arrayLength = randomInteger(maxListLength) + 1;
  const array = Array(arrayLength).fill(1);

  for (let i = 0; i < arrayLength; i++) {
    array[i] = method();
  }

  return array;
}
