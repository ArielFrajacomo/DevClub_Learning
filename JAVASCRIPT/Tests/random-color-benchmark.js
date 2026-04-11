function colorOneRandom() {
    const color = (Math.random() * 0x1000000) | 0;
    const red = color & 0xFF;
    const green = (color >> 8) & 0xFF;
    const blue = (color >> 16) & 0xFF;

    return red + green + blue;
}

function colorThreeRandoms() {
    const red = (Math.random() * 256) | 0;
    const green = (Math.random() * 256) | 0;
    const blue = (Math.random() * 256) | 0;

    return red + green + blue;
}

function runBenchmark(iterations = 10_000_000) {
    console.log(`Running ${iterations.toLocaleString()} iterations per test...`);

    console.time('one random');
    for (let i = 0; i < iterations; i++) {
        colorOneRandom();
    }
    console.timeEnd('one random');

    console.time('three randoms');
    for (let i = 0; i < iterations; i++) {
        colorThreeRandoms();
    }
    console.timeEnd('three randoms');
}

runBenchmark();