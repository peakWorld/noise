// 重写错误逻辑

const defaultHandler =
  ErrorUtils.getGlobalHandler && ErrorUtils.getGlobalHandler();

ErrorUtils.setGlobalHandler((error, isFatal) => {
  console.log(
    `Global Error Handled: ${JSON.stringify(
      {
        isFatal,
        errorName: error.name,
        errorMessage: error.message,
        componentStack: error.componentStack,
        errorStack: error.stack,
      },
      null,
      2,
    )}`,
  );
  defaultHandler(error, isFatal);
});

export default {};
