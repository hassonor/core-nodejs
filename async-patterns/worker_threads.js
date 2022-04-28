const { Worker, isMainThread } = require("worker_threads");

if (isMainThread) {
  const thirdWorker = new Worker(__filename);
} else {
  // Worker thread code goes here...
}