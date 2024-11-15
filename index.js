const calculate = require('node_1_pack_kefirchick');

const TEST_CASES = {
    '15 9 + 10 - 14 - 7 * 5 14 * 14 - *': 0,
    '8 2 15 * + 8 - 13 * 15 - 6 6 13 + + -': 350,
    '4 9 + 1 - 2 6 13 8 0 6 9 * - - + + - *': -948,
    '6 1 - 14 * 11 + 3 - 2 12 5 - * +': 92,
    '2 11 6 * - 6 * 7 - 7 + 14 + 8 10 * +': -290,
    '13 3 14 * 10 + * 12 4 + + 8 *': 5536,
    '10 3 11 - + 7 + 2 - 10 - 10 -': -13,
    '4 9 - 1 14 - - 12 + 2 1 - - 8 -': 11,
    '2 11 0 * * 13 15 - + 0 - 4 * 1 *': -8,
    '4 8 6 10 * * * 0 11 * -': 1920
};

function test() {
    let isAllClear = true;

    for (const testCase in TEST_CASES) {
        const result = calculate(testCase);

        if (result !== TEST_CASES[testCase]) {
            isAllClear = false;
            console.log(`Got:${testCase} = ${result};\tShould be: ${TEST_CASES[testCase]}`);
        }
    }

    if (isAllClear) {
        console.log(`All the test have been successful`);
    }
}

test();