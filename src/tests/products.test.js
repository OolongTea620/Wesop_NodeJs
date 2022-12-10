/**
 *  Product Service 기능 유닛 테스트
 * @unitTest
 */
const productService = require("../services/productService");
const configSetting = require("../../configs");
const mongoConnect = require("../connections/mongodb");

beforeAll(() => {
  configSetting();
  mongoConnect();
});

describe("Test Product Service", () => {
  test("create", async () => {
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

    const result = await productService.productInsert(req);
    expect(result.id).toBeTruthy();
    expect(result.name).toEqual(req.body.name);
  });
});

afterAll(() => {});
