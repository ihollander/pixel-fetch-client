# Pixel Fetch

Welcome to [Pixel Fetch](https://ihollander.github.io/pixel-fetch-client/?canvas=Flatiron), a collaborative canvas for drawing things by making `fetch` requests!

## Setup

To run this project locally, fork and clone this project. Then, install the dependencies (so you can run the project on a local server):

```bash
npm install
```

Next, to open the project in the browser, run:

```bash
npm start
```

This will run a server and open the application in the browser on port 5000. It's necessary to run this project on a server on port 5000 to prevent CORS errors.

You should see a URL like this:

```
http://localhost:5000/?canvas=Flatiron
```

Take note of the end of the URL (`canvas=Flatiron`); this identifies which canvas we're working with - in this example, the **name** is `Flatiron`.

We'll use that as the **name** for the canvas for making our `fetch` requests.

## Testing

To place a pixel, make a `fetch` request:

```js
const url = "https://pixel-fetch-api.herokuapp.com/api/v1/canvas/Flatiron"

const pixel = {
  x: 50,
  y: 50,
  color: "blue"
}

fetch(url, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(pixel)
})
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(pixelData => {
    console.log(pixelData)
  })
```

More info about the API endpoints and options can be found below.

**NOTE** API requests are rate limited to 10 requests per minute, so don't just run a giant `while` loop, please...

## Suggestions

Not sure what to do next? This project is pretty open ended! Your main objective is to use fetch and draw something. 

Here are some suggestions with what to do from there:

- Create a new canvas (see API Endpoints for how to create a new canvas)
- Implement functionality to draw a pixel when the canvas is clicked
- Set up a game: make a squares of different colors, and defend your squares from opposing players
- Make a snake game
- Make a battleship game

## API Endpoints

### Add Pixel

Place a pixel on the canvas, using x-y coordinates and a color.

#### Endpoint

```
PATCH https://pixel-fetch-api.herokuapp.com/api/canvas/:name
```

#### Headers

```
{
  "Content-Type": "application/json"
}
```

#### Body

| key   | type    | required? | description | 
|-------|---------|-----------|-------------|
| **x**     | integer | yes       | The **x** coordinate of the pixel |
| **y**     | integer | yes       | The **y** coordinate of the pixel |
| **color** | string  | optional  | Must provide either **color** or **r**, **b**, **g**, **a** values. Can be a hex string (`#ff0000`) or css color (`red`). | 
| **r**     | integer | optional  | If **color** is not provided, must provide **r**, **b**, **g**, **a** values between 0-255 |
| **g**     | integer | optional  | If **color** is not provided, must provide **r**, **b**, **g**, **a** values between 0-255 |
| **b**     | integer | optional  | If **color** is not provided, must provide **r**, **b**, **g**, **a** values between 0-255 |
| **a**     | integer | optional  | If **color** is not provided, must provide **r**, **b**, **g**, **a** values between 0-255 |

#### Example Response
```
Response Status: 200
Response Body: 
{ 
  coords: [x, y],
  color:  [r, g, b, a]
}
Response Headers:
{
  X-Ratelimit-Limit: integer,
  X-Ratelimit-Remaining: integer
}
```

#### Rate Limit

Requests to this endpoint are rate limited to 10 requests per minute. You can view your remaining limit in the `X-Ratelimit-Remaining` header. A `429` status code will be returned if the rate limit is exceeded.

### Get Canvas

Read the current canvas as a raw array of pixel data: `[r,b,g,a,r,g,b,a....]`

Use this endpoint if you'd like to display a snapshot of the current canvas.

#### Endpoint

```
GET https://pixel-fetch-api.herokuapp.com/api/canvas/:name
```

#### Rate Limit

Requests to this endpoint are rate limited to 10 requests per minute. You can view your remaining limit in the `X-Ratelimit-Remaining` header. A `429` status code will be returned if the rate limit is exceeded.

#### Example Response

```
Response: 200
Reponse Body: raw canvas data
```

## All Canvases

Show a list of all canvas names.

```
GET https://pixel-fetch-api.herokuapp.com/api/canvas
```

You can use the canvas name in the URL for interacting with other API endpoints. 

You can also view the canvas using the name locally:

```
http://localhost:5000/?canvas=name
```

Or on the hosted site:

```
http://localhost:5000/?canvas=name
```

## Example Response

```
Response Status: 200
Response Body: 
[
  { 
    name: string
  },
  {
    name: string
  },
  ...
]
```

### Create Canvas

Create a new canvas.  

```
POST https://pixel-fetch-api.herokuapp.com/api/canvas
```

After your canvas has been created, you can use the canvas name in the URL for interacting with other API endpoints. 

You can also view the canvas using the name locally:

```
http://localhost:5000/?canvas=name
```

Or on the hosted site:

```
http://localhost:5000/?canvas=name
```

#### Headers

```
{
  "Content-Type": "application/json"
}
```

#### Body

| key   | type    | required? | description | 
|-------|---------|-----------|-------------|
| **name**    | string  | yes       | The **name** of the new canvas |

#### Example Response

```
Response: 200
Reponse Body: raw canvas data
```
