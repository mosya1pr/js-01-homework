function quadFunction(a, b, c) {
    var d = b * b - 4 * a * c;
    var x1, x2;

    if (d < 0) {
        return false;
    }
    if (d === 0) {
        x1 = x2 = -b / 2 * a;
        return 'x1 = x2 = ' + x1;
    }
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / 2 * a;
        x2 = (-b - Math.sqrt(d)) / 2 * a;
        return 'x1 = ' + x1 + '; x2 = ' + x2;
    }

}