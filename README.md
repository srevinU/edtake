## SetUp

- Create .env file at the root project folder
- Add OpenAI api key

```
OPENAI_API_KEY='your api key'
```

- Build application

```
$ npm run build
```

- Start the application

```
$ npm run start
```

## Query the application

```
# Add product to basket
$ http://localhost:3000/invoke?query=Je%20souhaite%20acheter%20un%20sapin%20pour%20No%C3%ABl,%20chercher%20chez%20Ikea%20si%20un%20sapin%20est%20disponible%20et%20ajoute-le%20au%20panier

# Display list basket
$ http://localhost:3000/invoke?query=Affiche%20mon%20panier

# Delete product from basket
Delete not implemented totaly, don't how to process it
```
