/**
 *  @test productService test
 */
const productService = require("../services/productService");
const configSetting = require("../../configs");
const mongoConnect = require("../connections/mongodb");

beforeAll(() => {
  configSetting();
  mongoConnect();
});

describe("Test Product Service", () => {
  // input data
  const req = {
    body: {
      name: "testprod1",
      ingredients: {
        all: ["ingr1", "ingr2", "ingr3"],
        main: ["ingr1"],
      },
      texture: ["하얀 미백색의 제형"],
      skintype: ["건성", "중성"],
      recommend_for: ["수분이 필요한 타입"],
      summary: "중건성을 위한 끈적임 없는 자연 토너",
      description: "여기는 html text 입력하면 된다.",
    },
  };

  const updateReq = {
    body: {
      name: "changeprod1",
      ingredients: {
        all: ["ingr1", "ingr2", "ingr4"],
      },
      texture: ["하얀 미백색의 제형"],
      skintype: ["건성"],
      recommend_for: ["추가적인 수분이 필요한 타입"],
      description: "여기는 html text 입력하면 된다.",
    },
  };
  let productId = undefined;

  test("create", async () => {
    const result = await productService.productInsert(req);
    expect(result.id).toBeTruthy();
    expect(result.name).toEqual(req.body.name);
    productId = result.id;
  });

  test("readById", async () => {
    const result = await productService.productReadById(productId);
    expect(result.name).toEqual(req.body.name);
    expect(result.ingredients.all).toMatchObject(req.body.ingredients.all);
  });

  test("update", async () => {
    updateReq.body.id = productId;

    const result = await productService.productUpdate(updateReq);
    const checkResult = await productService.productReadById(productId);
    expect(checkResult.id).toEqual(productId);
    expect(checkResult.name).toEqual(updateReq.body.name);
  });

  test("delete", async () => {
    const result = await productService.productSoftDelete(productId);
    const checkResult = await productService.productReadById(productId);
    expect(checkResult.id).toEqual(productId);
    expect(checkResult.available).toBeFalsy();
  });
});

afterAll(() => {});
