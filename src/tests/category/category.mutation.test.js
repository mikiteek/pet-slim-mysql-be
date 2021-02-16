const superRequest = require("supertest");

const app = require("../../server");
const {
  validateAddProductCategory,
} = require("../../utils/validateCategory");
const {
  isCategoryExistService,
} = require("../../modules/category/category.service");
const Category = require("../../modules/category/category.model");

jest.mock("../../modules/category/category.service");
jest.mock("../../modules/category/category.model");
jest.mock("../../utils/validateCategory");
Category.create = jest.fn();

describe("POST category", () => {
  it("should return 400", async () => {
    validateAddProductCategory.mockImplementation(() => "returns error");
    await superRequest(app)
      .post("/categories")
      .expect(400)
  });
  it("should return 409", async () => {
    isCategoryExistService.mockImplementation(() => true);
    validateAddProductCategory.mockImplementation(() => undefined);
    await superRequest(app)
      .post("/categories")
      .expect(409)
  });
  it("should return 201", async () => {
    isCategoryExistService.mockImplementation(() => false);
    validateAddProductCategory.mockImplementation(() => undefined);
    await superRequest(app)
      .post("/categories")
      .expect(201)
  });
});