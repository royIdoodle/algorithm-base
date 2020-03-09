const app = { middlewares: [] };
app.use = (fn) => {
  app.middlewares.push(fn);
};
app.compose = function () {
//  Your Code Here
  return dispatch(0)
  function dispatch(i) {
    let fn = app.middlewares[i]
    if (i === app.middlewares.length) {
      fn = () => {}
    }
    return fn(dispatch.bind(null, i + 1))
  }

}
app.use(next => {
  console.log(1);
  next();
  console.log(2);
});
app.use(next => {
  console.log(3);
  next();
  console.log(4);
});
app.use(next => {
  console.log(5);
  next();
  console.log(6);
});
app.compose();


/*
app.compose = function () {
//  Your Code Here
  let index = -1
  return dispatch(0)
  
  function dispatch (i) {
    if (i <= index) return Promise.reject(new Error('next() called multiple times'))
    index = i
    let fn = app.middlewares[i]
    if (i === app.middlewares.length) fn = () => {
    }
    if (!fn) return Promise.resolve()
    try {
      return Promise.resolve(fn(dispatch.bind(null, i + 1)));
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
* */
