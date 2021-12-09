# yellow.ai assignment

This project was created to fulfill the competency requirement in recruitment on yellow.ai.

## Installation

install all packages by running the following command

```bash
npm install
```
The command will install the following packages:
- [axios](https://www.npmjs.com/package/axios)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [fastest-validator](https://www.npmjs.com/package/fastest-validator)

Create an `.env` file containing:
```
WEATHERAPI_KEY=<your-https://www.weatherapi.com-api-key> 
RAPIDAPI_KEY=<your-https://rapidapi.com/hub-api-key>

SERVICE_PORT=<server-running-on-port>
```

## Usage

to run the server, enter the following command
```bash
npm run start
```

### Weather API
use the following endpoint to `GET` weather data or weather forecast
> http://localhost:<SERVICE_PORT>/weather/status?command=

query parameter `command` contains a request or command.

### Covid API
use the following endpoint to `GET` covid statistics data in Indonesia
> http://localhost:<SERVICE_PORT>/covid/status?date=

query parameter `date` is a date.
