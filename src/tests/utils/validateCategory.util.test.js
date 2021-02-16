const {validateAddProductCategory} = require("../../utils/validateCategory");

describe("Validate add product's category", () => {
  let bodyTest;
  it("should return error", () => {
    bodyTest = {name: "milk", type: "product"}
    const validationResult = validateAddProductCategory(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {};
    const validationResult = validateAddProductCategory(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {nam: "milk"};
    const validationResult = validateAddProductCategory(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {name: 55};
    const validationResult = validateAddProductCategory(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return undefined", () => {
    bodyTest = {name: "milk"};
    const validationResult = validateAddProductCategory(bodyTest);
    expect(validationResult).toBeUndefined();
  });
});