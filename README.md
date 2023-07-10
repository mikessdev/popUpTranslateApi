# popUpTranslateApi



## how to test this api:

### Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 20.4.0

### step 1: 
In the terminal run: 

```
npm install 
```
```
npm run dev 
```

### step 2:
In insomnia or postman create a request of type ✨GET✨ with the url: 

```
http://localhost:3333/  
```

And add the query: translationOrder
with example value: 
```
{ "detectLinguage": "en", "translateTo": "pt", "text": "get started"}
```

### Example
![Alt text](image.png)
