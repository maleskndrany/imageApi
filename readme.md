# Image Proccessing API

## Commands

### Install 

```
npm install
```

### Build

```
npm run build
```

### Start

```
npm run start
```

### Test

```
npm run test
```

### Lint

```
npm run lint
```

### Prettier

```
npm run prettier
```

## Project Link
http://localhost:3000/

## Endpoint For Image Resizing
http://localhost:3000/api/images

## Params
- filename
- width
- height

## Available Images

- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica

## Examples

- http://localhost:3000/api/images
(Display error with required params)

- http://localhost:3000/api/images?filename=dubai
(Display error with required params and image not exist error)

- http://localhost:3000/api/images?filename=icelandwaterfall&width=250&height=250
(Resize and Display the resized image)

- http://localhost:3000/api/images?filename=icelandwaterfall&width=250&height=250
(Display pre stored resized image)