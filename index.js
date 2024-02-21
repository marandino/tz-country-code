import countries from "./countries";
import timezones from "./timezones";

export function getCountryCode() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timezone === "" || !timezone) {
    return null;
  }
  const countryCode = timezones[timezone]?.c?.[0];
  return countryCode;
}

export function getCountryName(type) {
  const countryCode = getCountryCode();
  const countryName = countries[countryCode];
  return countryName;
}
