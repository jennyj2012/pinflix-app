const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

export const urlValidator = (value) => {
  if (URL_REGEX.test(value)) return "";
  return "must be a valid url";
};
