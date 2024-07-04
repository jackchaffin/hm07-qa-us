// eslint-disable-next-line no-undef
const config = require("../config");

test("should return status 200 on successful deletion of kit", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}api/v1/kits/7`, {
      method: "DELETE",
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

test("should return response body with 'ok: true' on successful deletion of kit", async () => {
  let actualResponseBody;
  const expectedResponseBody = {
    ok: true,
  };
  try {
    const response = await fetch(`${config.API_URL}api/v1/kits/7`, {
      method: "DELETE",
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
