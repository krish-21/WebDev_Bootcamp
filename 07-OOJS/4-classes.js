class Color {
    constructor(r, g, b, name = "newColor") {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        // will automatically be called & properties will be added
        this.calcHSL();
    }
    innerRBG() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRBG()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRBG()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    fullySaturated() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }
    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }
    calcHSL() {
        let { r, g, b } = this;
        
        // Make r, g, & b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        if (delta === 0) h = 0;
        else if (cmax === r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax === g)
            // Green is max
            h = ((b - r) / delta) + 2;
        else
            // Blue is max
            h = ((r - g) / delta) + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360 degrees
        if (h < 0) h += 360;

        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply s & l by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        // Add them as properties
        this.h = h;
        this.s = s;
        this.l = l;
    }
}


// new keyword used to instantiate
const color1 = new Color(255, 67, 89, "Tomato");
const color2 = new Color(255, 255, 255, "White");
const color3 = new Color(230, 126, 34, "Carrot");

console.log(color1);
console.log(color2);
console.log(color3);
