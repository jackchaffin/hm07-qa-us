// eslint-disable-next-line no-undef
const config = require("../config");

test("status should be 200", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}api/v1/kits/7`, {
      method: "DELETE",
    });
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }

  expect(actualStatus).toBe(200);
});

test("response body should match expected", async () => {
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
    console.error(error);
  }

  expect(actualResponseBody).toEqual(expectedResponseBody);
});
