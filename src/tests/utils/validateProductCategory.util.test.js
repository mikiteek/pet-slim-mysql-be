const {validateAddProductCategory} = require("../../utils/validateProductCategory");

describe("Validate add productCategory", () => {
  let bodyTest;
  it("should return error", () => {
    bodyTest = {};
    const validationResult = validateAddProductCategory(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {categoryId: "dfdj", productId: "dkla"};
    const validationResult = validateAddProductCategory(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {categoryId: 1,};
    const validationResult = validateAddProductCategory(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {productId: 5};
    const validationResult = validateAddProductCategory(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {categoryId: 1, productId: "dkla"};
    const validationResult = validateAddProductCategory(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {categoryId: "1O", productId: 5};
    const validationResult = validateAddProductCategory(bodyTest);
    expect(validationResult).toHaveProperty("details");
  });
  it("should return error", () => {
    bodyTest = {categoryId: 3, productId: 5};
    const validationResult = validateAddProductCategory(bodyTest);
    expect(validationResult).toBeUndefined();
  });
});