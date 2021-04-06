function hex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

hex(255, 100, 25);
rgb(155, 100, 25);


// A Factory Function
    // Creates an empty object
    // add some properties & methods
    // return it
function makeColor(r, g, b) {
    const color = {};
    
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function() {
        // console.log(this);
        // return `rgb(${this.r}, ${this.g}, ${this.b})`;
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    color.hex = function() {
        // return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    return color;
}
// Defined a recipe

const firstColor = makeColor(35, 255, 255)
firstColor.rgb();
firstColor.hex();