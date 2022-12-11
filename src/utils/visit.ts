const visit = (visited_at: string | null): string => {
  if (visited_at === null) return "";
  const now = new Date().getFullYear();
  console.log(visited_at);
  const visited_date = parseInt(visited_at.slice(0, 4), 10);
  return `${now - visited_date}년 전 방문`;
};

export default visit;
