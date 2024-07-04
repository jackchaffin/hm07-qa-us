// eslint-disable-next-line no-undef
const config = require("../config");

test("should return status 200 on successful PUT request to update product price", async () => {
  let actualStatus;

  try {
    const response = await fetch(`${config.API_URL}api/v1/products/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: 175,
      }),
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

test("should return expected response body with 'ok: true' on successful PUT request to update product price", async () => {
  let actualResponseBody;
  const expectedResponseBody = {
    ok: true,
  };

  try {
    const response = await fetch(`${config.API_URL}api/v1/products/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: 175,
      }),
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
