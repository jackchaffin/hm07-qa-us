// eslint-disable-next-line no-undef
const config = require("../config");

test("should return status 200 on successful POST request to calculate endpoint", async () => {
  let actualStatus;
  try {
    const response = await fetch(
      `${config.API_URL}everything-you-need/v1/calculate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deliveryTime: 9,
          products: [
            { id: 1, quantity: 1 },
            { id: 4, quantity: 3 },
          ],
        }),
      }
    );
    actualStatus = response.status;
  } catch (error) {
    console.error("Error fetching the response:", error);
  }
  expect(actualStatus).toBe(
    200,
    `Expected status 200, but received ${actualStatus}`
  );
});

test("should return expected response body on successful POST request to calculate endpoint", async () => {
  let actualResponseBody;
  //expectedResponseBody is outside of try block so that it is exposed to expect block. Using const instead of let because it doesn't change.
  const expectedResponseBody = {
    name: "Everything You Need",
    workingHours: {
      start: 7,
      end: 23,
    },
    price: 9,
    isWarehouseWorking: true,
    isItemsAvailable: false,
    percentOfAvailableItems: 50,
    availableProducts: [
      {
        id: 4,
        quantity: 9,
      },
    ],
  };

  try {
    const response = await fetch(
      `${config.API_URL}everything-you-need/v1/calculate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deliveryTime: 9,
          products: [
            { id: 1, quantity: 1 },
            { id: 4, quantity: 3 },
          ],
        }),
      }
    );
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
