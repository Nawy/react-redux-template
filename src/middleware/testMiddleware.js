export const testMiddleware = store => next => action => {
    console.info("testMiddleware");
    next(action);
};