export function solveQuadraticEquation(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    let root1, root2;

    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    } else if (discriminant == 0)
        root1 = root2 = -b / (2 * a);
    else
        return [1];

    return [root1, root2];
}