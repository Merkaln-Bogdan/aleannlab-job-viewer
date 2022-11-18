import moment from "moment";

export const calculationDate = (updatedAt: string) => {
  const now = moment();
  const updatedDate = moment(updatedAt);

  const diff = now.diff(updatedDate);
  const diffDuration = moment.duration(diff);

  return {
    diffYears: diffDuration.years(),
    diffMonth: now.month(),
    diffDays: now.date(),
  };
};
