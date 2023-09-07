# @marandino/tz-country-code

Automatically detect a user's country based on their timezone, providing an easy and efficient way to get location information without relying on IP addresses.

## Installation

```bash
npm install @marandino/tz-country-code
```

or

```bash
yarn add @marandino/tz-country-code
```

## Usage

```javascript
import { getCountryCode } from "@marandino/tz-country-code";

// Get the country code (e.g., 'US')
const countryCode = getCountryCode("code");
console.log(countryCode);

// Get the country name (e.g., 'United States')
const countryName = getCountryCode("name");
console.log(countryName);
```

## License

MIT
