require('mysql2/node_modules/iconv-lite').encodingExists('foo');
const {
  isCategoryExistService
} = require("../../modules/category/category.service");
const Category = require("../../modules/category/category.model");

jest.mock("../../modules/category/category.model");
describe("category's service correct work", () => {
  it("should return false", async () => {
    Category.findOne.mockImplementation(() => null);
    const result = await isCategoryExistService("milk");
    expect(result).toBeNull();
  });
  it("should return false", async () => {
    const categoryTest = {id: 1, name: "milk"};
    Category.findOne.mockImplementation(() => categoryTest);
    const result = await isCategoryExistService("milk");
    expect(result).toEqual(categoryTest);
  });
});