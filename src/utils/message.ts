export const generateNotFoundMessage = <K, V>(
  data: string,
  key: K,
  value: V
) => {
  return `${value} ${key}을(를) 가진 ${data}을(를) 찾을 수 없습니다.`;
};
