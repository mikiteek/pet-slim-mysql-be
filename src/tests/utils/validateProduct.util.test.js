const {validateAddProduct} = require("../../utils/validateProduct");

describe("Validate add product", () => {
  let bodyTest;
  it("should return error", () => {
    bodyTest = {};
    const validationResult = validateAddProduct(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {titleRu: "Овсянка", weight: 120};
    const validationResult = validateAddProduct(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {titleRu: "Овсянка", titleUa: "Овсянка", weight: 120, calories: -1};
    const validationResult = validateAddProduct(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {titleRu: "Овсянка", titleUa: "Овсянка", weight: -5, calories: 120};
    const validationResult = validateAddProduct(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {titleRu: "Овсянка", titleUa: "Овсянка", weight: "5k", calories: "120l"};
    const validationResult = validateAddProduct(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {titleRu: "Овсянка", titleUa: "Овсянка", weight: 110, calories: 240};
    const validationResult = validateAddProduct(bodyTest);
    expect(validationResult).toBeUndefined();
  });
});