function resolveAfter(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(time);
            resolve(time);
        }, time);
    });
}

resolveAfter(500)
.then(
    (time) => resolveAfter(time + 500)
)
.then(
    (time) => resolveAfter(time + 500)
);

