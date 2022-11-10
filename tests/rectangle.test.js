import {
  getRectanglePerimeter,
  getRectangleArea,
  getRectangleInfo,
} from "../js/rectangle.js";

test("should calculate the perimeter of the rectangle", () => {
  const output = getRectanglePerimeter(4, 5);
  expect(output).toBe(18);
});

test("should calculate the area of the rectangle", () => {
  const output = getRectangleArea(4, 5);
  expect(output).toBe(20);
});

test("should properly display rectangle info", () => {
  const output = getRectangleInfo(4, 5);
  expect(output).toBe(
    console.log("The perimeter of a rectangle is 12 and the area is 8")
  );
});
