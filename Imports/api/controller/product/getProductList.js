export default function makeGetProductList ( listProduct ) {
  return async function getProductList (httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const productList = await listProduct()
      return {
        headers,
        statusCode: 200,
        body: productList
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}