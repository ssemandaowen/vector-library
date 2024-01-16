class Vec2D {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vec2D(this.x + v.x, this.y + v.y);
  }

  subtract(v) {
    return new Vec2D(this.x - v.x, this.y - v.y);
  }

  multiply(scalar) {
    return new Vec2D(this.x * scalar, this.y * scalar);
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  norm() {
    const mag = this.mag();
    return mag !== 0 ? this.multiply(1 / mag) : new Vec2D();
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v) {
    return this.x * v.y - this.y * v.x;
  }

  equals(v) {
    return this.x === v.x && this.y === v.y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  static zero() {
    return new Vec2D();
  }

  static fromArray(arr) {
    return new Vec2D(arr[0], arr[1]);
  }


  static distance(v1, v2) {
    const diff = v1.subtract(v2);
    return diff.mag();
  }
  
  
  static fromArray(arr) {
    return new Vec2D(arr[0], arr[1]);
  }

  static distance(v1, v2) {
    const diff = v1.subtract(v2);
    return diff.mag();
  }

  static angleBetween(v1, v2) {
    const dotProduct = v1.dot(v2);
    const magProduct = v1.mag() * v2.mag();
    return Math.acos(dotProduct / magProduct);
  }

  // Instance method to rotate the Vec2Dtor by an angle (in radians)
  rotate(angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return new Vec2D(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
  }
  // Check if two Vec2Dtors are parallel
  isParallel(v) {
    return this.cross(v) === 0;
  }

  // Find the midpoint between two Vec2Dtors
  static midpoint(v1, v2) {
    return v1.add(v2).multiply(0.5);
  }

  // Calculate the angle of the Vec2Dtor (in radians) with the x-axis
  angleWithXAxis() {
    return Math.atan2(this.y, this.x);
  }

  // Project this Vec2Dtor onto another Vec2Dtor
  projectOnto(v) {
    const scalar = this.dot(v) / v.magnitudeSquared();
    return v.multiply(scalar);
  }

  // Reflect this Vec2Dtor across a specified Vec2Dtor
  reflectAcross(v) {
    const projection = this.projectOnto(v).multiply(2);
    return this.subtract(projection);
  }

  // Check if two Vec2Dtors are perpendicular
  isPerpendicular(v) {
    return this.dot(v) === 0;
  }

  // Find the angle between two Vec2Dtors (in radians)
  static angleBetween(v1, v2) {
    const dotProduct = v1.dot(v2);
    const magProduct = v1.mag() * v2.mag();
    return Math.acos(dotProduct / magProduct);
  }

  toArray() {
    return [this.x, this.y];
  }

  // Get a new Vec2Dtor with rounded components
  round() {
    return new Vec2D(Math.round(this.x), Math.round(this.y));
  }

  // Scale the Vec2Dtor by different factors along x and y
  scale(sx, sy) {
    return new Vec2D(this.x * sx, this.y * sy);
  }

  // Get a unit Vec2Dtor pointing in the direction of the Vec2Dtor
  direction() {
    return this.mag() !== 0 ? this.norm() : new Vec2D();
  }

  // Create a Vec2Dtor representing a 2D wave at a specific phase
  static wave(amplitude, frequency, phase) {
    const x = amplitude * Math.cos(frequency + phase);
    const y = amplitude * Math.sin(frequency + phase);
    return new Vec2D(x, y);
  }
  // Translate the Vec2Dtor by a specified offset
  translate(dx, dy) {
    return new Vec2D(this.x + dx, this.y + dy);
  }

  // Get the perpendicular Vec2Dtor (90-degree rotation)
  perpendicular() {
    return new Vec2D(-this.y, this.x);
  }

  // Calculate the area of a parallelogram formed by two Vec2Dtors
  static areaOfParallelogram(v1, v2) {
    return v1.cross(v2).mag();
  }
  // Linear interpolation between two Vec2Dtors
  static lerp(v1, v2, t) {
    t = Math.max(0, Math.min(1, t)); // Clamp t between 0 and 1
    const x = v1.x + (v2.x - v1.x) * t;
    const y = v1.y + (v2.y - v1.y) * t;
    return new Vec2D(x, y);
  }

  // Create a random Vec2Dtor within a specified range
  static random(minX, maxX, minY, maxY) {
    const x = Math.random() * (maxX - minX) + minX;
    const y = Math.random() * (maxY - minY) + minY;
    return new Vec2D(x, y);
  }


  // Calculate the angle between two Vec2Dtors in degrees
  static angleBetweenDegrees(v1, v2) {
    const angleRadians = Vec2D.angleBetween(v1, v2);
    return (angleRadians * 180) / Math.PI;
  }

  // Limit the magnitude of the Vec2Dtor to a specified value
  limit(maxMagnitude) {
    const currentMagnitude = this.mag();
    return currentMagnitude > maxMagnitude ? this.norm().multiply(maxMagnitude) : this;
  }

  // Check if a point (Vec2Dtor) is inside a specified rectangular area
  isInsideRect(x1, y1, x2, y2) {
    return this.x >= x1 && this.x <= x2 && this.y >= y1 && this.y <= y2;
  }

  // Find the angle formed by three points (Vec2Dtors)
  static angleBetweenThreePoints(v1, v2, v3) {
    const a = v1.subtract(v2);
    const b = v3.subtract(v2);
    return Math.atan2(a.cross(b), a.dot(b));
  }

  // Create a copy of the Vec2Dtor
  clone() {
    return new Vec2D(this.x, this.y);
  }

  // Get the distance between two Vec2Dtors
  static distanceBetween(v1, v2) {
    return v1.subtract(v2).mag();
  }

  // Check if a Vec2Dtor is within a circular area
  isInsideCircle(center, radius) {
    return Vec2D.distanceBetween(this, center) <= radius;
  }

  // Rotate the Vec2Dtor around a specified pivot point
  rotateAround(pivot, angle) {
    const translated = this.subtract(pivot);
    const rotated = translated.rotate(angle);
    return rotated.add(pivot);
  }

  // Create a Vec2Dtor with components rounded to a specified number of decimals
  roundDecimals(decimals) {
    const multiplier = Math.pow(10, decimals);
    const roundedX = Math.round(this.x * multiplier) / multiplier;
    const roundedY = Math.round(this.y * multiplier) / multiplier;
    return new Vec2D(roundedX, roundedY);
  }

  // Interpolate smoothly between two Vec2Dtors using cubic easing
  static cubicInterpolation(v1, v2, t) {
    t = Math.max(0, Math.min(1, t)); // Clamp t between 0 and 1
    const cubicT = t * t * (3 - 2 * t); // Cubic easing function
    return v1.multiply(1 - cubicT).add(v2.multiply(cubicT));
  }

  // Get the reflection Vec2Dtor given a surface normal
  reflect(normal) {
    const dotProduct = this.dot(normal);
    const reflection = normal.multiply(2 * dotProduct).subtract(this);
    return reflection;
  }


  // Create a Vec2Dtor that points to the mouse coordinates relative to a given HTML element
  static Vec2DtorFromMouse(event, element) {
    const rect = element.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    return new Vec2D(mouseX, mouseY);
  }

  // Check if a Vec2Dtor is within a specified triangular region
  isInsideTriangle(v1, v2, v3) {
    const b1 = ((v2.y - v3.y) * (this.x - v3.x) + (v3.x - v2.x) * (this.y - v3.y)) /
      ((v2.y - v3.y) * (v1.x - v3.x) + (v3.x - v2.x) * (v1.y - v3.y));
    const b2 = ((v3.y - v1.y) * (this.x - v3.x) + (v1.x - v3.x) * (this.y - v3.y)) /
      ((v2.y - v3.y) * (v1.x - v3.x) + (v3.x - v2.x) * (v1.y - v3.y));
    const b3 = 1 - b1 - b2;
    return (b1 >= 0 && b1 <= 1 && b2 >= 0 && b2 <= 1 && b3 >= 0 && b3 <= 1);
  }


  // Generate a Vec2Dtor representing a 2D Perlin noise field
  static perlinNoise(x, y) {
    // Placeholder: Implement a basic 2D Perlin noise function
    const randomGradient = new Vec2D(Math.cos(x), Math.sin(y));
    const dotProduct = randomGradient.dot(new Vec2D(x % 1, y % 1));
    return randomGradient.multiply(dotProduct);
  }

  // Apply a 2D transformation matrix to the Vec2Dtor
  applyMatrix(matrix) {
    const x = this.x * matrix[0] + this.y * matrix[2];
    const y = this.x * matrix[1] + this.y * matrix[3];
    return new Vec2D(x, y);
  }


  // Find the intersection point between two Vec2Dtors (lines)
  static intersection(v1, v2, v3, v4) {
    const determinant = (v1.x - v2.x) * (v3.y - v4.y) - (v1.y - v2.y) * (v3.x - v4.x);
    if (determinant === 0) {
      return null; // The lines are parallel
    }

    const px = ((v1.x * v2.y - v1.y * v2.x) * (v3.x - v4.x) - (v1.x - v2.x) * (v3.x * v4.y - v3.y * v4.x)) / determinant;
    const py = ((v1.x * v2.y - v1.y * v2.x) * (v3.y - v4.y) - (v1.y - v2.y) * (v3.x * v4.y - v3.y * v4.x)) / determinant;

    return new Vec2D(px, py);
  }

  // Find the projection of a Vec2Dtor onto a line defined by two points
  projectionOntoLine(v1, v2) {
    const lineDirection = v2.subtract(v1).norm();
    const projectionLength = this.subtract(v1).dot(lineDirection);
    return v1.add(lineDirection.multiply(projectionLength));
  }

  // Find the closest point on a line segment to a given point
  closestPointOnLineSegment(lineStart, lineEnd) {
    const lineDirection = lineEnd.subtract(lineStart).norm();
    const pointDirection = this.subtract(lineStart);
    const projectionLength = pointDirection.dot(lineDirection);

    if (projectionLength <= 0) {
      return lineStart; // Closest point is the start of the segment
    } else if (projectionLength >= lineEnd.subtract(lineStart).mag()) {
      return lineEnd; // Closest point is the end of the segment
    } else {
      return lineStart.add(lineDirection.multiply(projectionLength));
    }
  }

  // Determine if a Vec2Dtor is on the left or right side of a directed line
  // Returns > 0 if on the right, < 0 if on the left, 0 if on the line
  orientationRelativeToLine(lineStart, lineEnd) {
    return (lineEnd.x - lineStart.x) * (this.y - lineStart.y) - (lineEnd.y - lineStart.y) * (this.x - lineStart.x);
  }
}
