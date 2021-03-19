https://www.codewars.com/kata/564d0490e96393fc5c000029/train/javascript

    var coinCombo = function(cents) {
        let pennies = 0;
        let nickels = 0;
        let dimes = 0;
        let quarters = 0;
        while(cents >= 25) {cents -= 25; quarters++}
        while(cents >= 10) {cents -= 10; dimes++}
        while(cents >= 5) {cents -= 5; nickels++}
        while(cents >= 1) {cents -= 1; pennies++}

        return [pennies, nickels, dimes, quarters]
    }