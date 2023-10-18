const promiseOne = new Promise((resolve, reject) => setTimeout(resolve('hahhah'), 3000))
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000))

// 当你需要确保所有的 Promise 都成功完成时使用。
// 例如，如果你正在上传多个文件，并且只有当所有文件都成功上传时才继续执行后续操作。
// 如果参数中的任何一个 Promise 实例失败（rejected），返回的 Promise 实例会立即失败，并返回那个失败的 Promise 实例的错误
// Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))

// 当你需要知道所有 Promise 的最终状态（无论成功还是失败）时使用。
// 例如，如果你正在请求多个 API，并且希望知道哪些请求成功，哪些请求失败，而不是因为一个请求失败就中断所有操作
// Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))

Promise.any([promiseOne, promiseTwo]).then(data => console.log(data)) //  可以拿到成功的 hahhah