// eslint-disable-next-line no-undef
const config = require("../config");
const requestBody = {
  deliveryTime: 9,
  products: [
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 4,
      quantity: 3,
    },
  ],
};

test("status should be 200", async () => {
  let actualStatus;
  try {
    const response = await fetch(
      `${config.API_URL}everything-you-need/v1/calculate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }

  expect(actualStatus).toBe(200);
});

test("response body should match expected", async () => {
  let actualResponseBody;
  const expectedResponseBody = {
    name: "Everything You Need",
    workingHours: { start: 8, end: 23 },
    price: 10,
    availableProducts: [{ id: 1, quantity: 2 }],
    isWarehouseWorking: true,
    isItemsAvailable: true,
    percentOfAvailableItems: 80,
  };

  try {
    const response = await fetch(
      `${config.API_URL}everything-you-need/v1/calculate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }

  expect(actualResponseBody).toEqual(expectedResponseBody);
});
