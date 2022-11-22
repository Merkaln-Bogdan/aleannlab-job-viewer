import moment, { now } from "moment";

export const calculationDate = (updatedAt: string) => {
  const now = moment();
  const updatedDate = moment(updatedAt);

  const diff = now.diff(updatedDate);
  const diffDuration = moment.duration(diff).years();

  const diffDate =
    diffDuration !== 0
      ? ` ${diffDuration} years `
      : diffDuration === 0 && now.month() !== 1 && ` ${now.month()} months `;

  return {
    postedDate: diffDate,
  };
};
