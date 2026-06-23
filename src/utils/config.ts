import "server-only";
// 防止泄露，比如server-only标记的数据不能作为数据传递给客户端
// import { experimental_taintUniqueValue } from "react";
export function getUserRequestKey() {
  const data = {
    key: "123_4564",
  };
  // experimental_taintUniqueValue("Do not share this key", data, data.key);
  return data;
}
