// eslint-disable-next-line no-undef
const config = require("../config");

test("status should be 200", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}api/v1/warehouses/`);
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }

  expect(actualStatus).toBe(200);
});

test("response body should match expected", async () => {
  let actualResponseBody;
  const expectedResponseBody = [
    {
      name: "Everything You Need",
      workingHours: {
        start: 7,
        end: 23,
      },
    },
    {
      name: "Fresh Food",
      workingHours: {
        start: 8,
        end: 23,
      },
    },
    {
      name: "Food City",
      workingHours: {
        start: 8,
        end: 21,
      },
    },
    {
      name: "Big World",
      workingHours: {
        start: 5,
        end: 20,
      },
    },
  ];

  try {
    const response = await fetch(`${config.API_URL}api/v1/warehouses/`);
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }

  expect(actualResponseBody).toEqual(expectedResponseBody);
});
