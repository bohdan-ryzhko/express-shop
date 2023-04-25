// curl https://data.mongodb-api.com/app/data-rhpzc/endpoint/data/v1/action/find \
// -H 'Content-Type: application/json'  \
// -H 'api-key: hufmgLx1hZ6eeIDooeLv1BUw335V4J01cAeuDXFqbOEM7izT8SlNPaj6QmZXr7lZ' \
// --data-raw \
// '{ 
//   "dataSource": "Cluster0", 
//   "database" : "test", 
//   "collection" : "post", 
//   "document" : { "name": "Harvest",
//                  "breed": "Labrador",
//                  "age": 5 }
// }'

// =============

// curl --request POST \
//   'https://data.mongodb-api.com/app/data-rhpzc/endpoint/data/v1/action/findOne' \
//   --header 'Content-Type: application/json' \
//   --header 'api-key: hufmgLx1hZ6eeIDooeLv1BUw335V4J01cAeuDXFqbOEM7izT8SlNPaj6QmZXr7lZ' \
//   --data-raw '{
//       "dataSource": "Cluster0",
//       "database": "test",
//       "collection": "posts",
//       "filter": {
//         "categoryId": "115374761"
//       }
//   }'


