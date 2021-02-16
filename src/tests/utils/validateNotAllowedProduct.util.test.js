const {validateAddNotAllowedProduct} = require("../../utils/validateNotAllowedProduct");

describe("Validate add productCategory", () => {
  let bodyTest;
  it("should return error", () => {
    bodyTest = {};
    const validationResult = validateAddNotAllowedProduct(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {groupBlood: 1};
    const validationResult = validateAddNotAllowedProduct(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {productId: 1};
    const validationResult = validateAddNotAllowedProduct(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {groupBlood: 1, productId: "1O"};
    const validationResult = validateAddNotAllowedProduct(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {groupBlood: 5, productId: 10};
    const validationResult = validateAddNotAllowedProduct(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {groupBlood: 0, productId: 10};
    const validationResult = validateAddNotAllowedProduct(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {groupBlood: -4, productId: 10};
    const validationResult = validateAddNotAllowedProduct(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {groupBlood: "1a", productId: 10};
    const validationResult = validateAddNotAllowedProduct(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {groupBlood: 3, productId: 10};
    const validationResult = validateAddNotAllowedProduct(bodyTest);
    expect(validationResult).toBeUndefined();
  });
});