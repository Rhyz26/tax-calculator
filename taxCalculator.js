function calculateTax(earnings) {
    let tax = 0;

    if (earnings <= 12000) {
        return tax;  // No tax for earnings <= 12000
    }

    if (earnings > 12000 && earnings <= 36000) {
        tax = (earnings - 12000) * 0.20;  // 20% tax on the amount over 12000
    } else if (earnings > 36000) {
        tax = (36000 - 12000) * 0.20;  // 20% tax on the amount between 12000 and 36000
        tax += (earnings - 36000) * 0.40;  // 40% tax on the amount over 36000
    }

    return tax;
}

module.exports = calculateTax;
