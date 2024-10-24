// RAYMOND NJAGALA


function calculateTax(earnings) {
    if (earnings < 12000) {
        return 0;
    } else if (earnings <= 36000) {
        return (earnings - 12000) * 0.2;
    } else {
        return (36000 - 12000) * 0.2 + (earnings - 36000) * 0.4;
    }
}

module.exports = calculateTax;
