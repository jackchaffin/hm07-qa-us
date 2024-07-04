// eslint-disable-next-line no-undef
const config = require("../config");

test("should return status 200 on successful retrieval of warehouses", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}api/v1/warehouses/`, {
      method: "GET",
    });
    actualStatus = response.status;
  } catch (error) {
    console.error("Error fetching the response:", error);
  }
  expect(actualStatus).toBe(
    200,
    `Expected status 200, but received ${actualStatus}`
  );
});

test("should return expected warehouse data on successful retrieval", async () => {
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
    const response = await fetch(`${config.API_URL}api/v1/warehouses/`, {
      method: "GET",
    });
    actualResponseBody = await response.json();
  } catch (error) {
    console.error("Error fetching the response:", error);
  }

  expect(actualResponseBody).toEqual(
    expectedResponseBody,
    `Expected response body to be ${JSON.stringify(
      expectedResponseBody
    )}, but received ${JSON.stringify(actualResponseBody)}`
  );
});
