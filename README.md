# Vec2D Class

The `Vec2D` class is a versatile 2D vector implementation in JavaScript, providing essential vector operations and additional functionalities.
## Installation
Try to include the imports by 

```
import Vec2D from '/path/to/Vec2D.js';
```
## Usage

```javascript
// Example usage
const vectorA = new Vec2D(2, 3);
const vectorB = new Vec2D(-1, 5);

const sum = vectorA.add(vectorB);
console.log(sum.toString()); // Output: (1, 8)
```

## Methods

### Basic Vector Operations
- `add(v)`: Returns the sum of two vectors.
- `subtract(v)`: Returns the difference between two vectors.
- `multiply(scalar)`: Returns a new vector scaled by a scalar.
- `mag()`: Returns the magnitude (length) of the vector.
- `norm()`: Returns the normalized vector.
- `dot(v)`: Returns the dot product of two vectors.
- `cross(v)`: Returns the cross product of two vectors.
- `equals(v)`: Checks if two vectors are equal.

### Static Methods
- `zero()`: Returns a zero vector.
- `fromArray(arr)`: Creates a vector from an array.
- `distance(v1, v2)`: Calculates the distance between two vectors.
- `angleBetween(v1, v2)`: Calculates the angle between two vectors (in radians).
- `midpoint(v1, v2)`: Returns the midpoint between two vectors.
- `angleWithXAxis()`: Calculates the angle of the vector with the x-axis (in radians).
- `projectOnto(v)`: Projects the vector onto another vector.
- `reflectAcross(v)`: Reflects the vector across a specified vector.
- `isPerpendicular(v)`: Checks if two vectors are perpendicular.
- `angleBetweenDegrees(v1, v2)`: Calculates the angle between two vectors (in degrees).
- `limit(maxMagnitude)`: Limits the magnitude of the vector.
- `isInsideRect(x1, y1, x2, y2)`: Checks if the vector is inside a rectangular area.
- `isInsideCircle(center, radius)`: Checks if the vector is inside a circular area.

### Additional Methods
- `rotate(angle)`: Rotates the vector by an angle (in radians).
- `isParallel(v)`: Checks if two vectors are parallel.
- `angleBetweenThreePoints(v1, v2, v3)`: Calculates the angle formed by three vectors (in radians).
- `toArray()`: Converts the vector to an array.
- `round()`: Returns a new vector with rounded components.
- `scale(sx, sy)`: Scales the vector by different factors along x and y.
- `direction()`: Returns a unit vector pointing in the direction of the vector.
- `wave(amplitude, frequency, phase)`: Creates a vector representing a 2D wave at a specific phase.
- `translate(dx, dy)`: Translates the vector by a specified offset.
- `perpendicular()`: Returns the perpendicular vector (90-degree rotation).
- `areaOfParallelogram(v1, v2)`: Calculates the area of a parallelogram formed by two vectors.
- `lerp(v1, v2, t)`: Linear interpolation between two vectors.
- `random(minX, maxX, minY, maxY)`: Generates a random vector within a specified range.
- `distanceBetween(v1, v2)`: Calculates the distance between two vectors.
- `rotateAround(pivot, angle)`: Rotates the vector around a specified pivot point.
- `roundDecimals(decimals)`: Rounds vector components to a specified number of decimals.
- `cubicInterpolation(v1, v2, t)`: Cubic easing interpolation between two vectors.
- `reflect(normal)`: Gets the reflection vector given a surface normal.
- `Vec2DtorFromMouse(event, element)`: Creates a vector from mouse coordinates relative to an HTML element.
- `isInsideTriangle(v1, v2, v3)`: Checks if the vector is inside a specified triangular region.
- `perlinNoise(x, y)`: Generates a vector representing 2D Perlin noise.
- `applyMatrix(matrix)`: Applies a 2D transformation matrix to the vector.
- `intersection(v1, v2, v3, v4)`: Finds the intersection point between two vectors (lines).
- `projectionOntoLine(v1, v2)`: Finds the projection of the vector onto a line defined by two points.
- `closestPointOnLineSegment(lineStart, lineEnd)`: Finds the closest point on a line segment to the vector.
- `orientationRelativeToLine(lineStart, lineEnd)`: Determines if the vector is on the left or right side of a directed line.

## License

This `Vec2D` class is provided under the [MIT License](LICENSE). Feel free to use and modify it for your projects. If you encounter any issues or have suggestions, please [create an issue](https://github.com/your-username/your-repository/issues). Contributions are welcome!
