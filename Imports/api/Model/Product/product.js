export default function(validator) {
    return ({
      idProduct,
      name,
      sizes,
      color,
      buyPrice,
      minPrice,
      deliveryPrice
    } = {}) => {
      
      return Object.freeze({
        getIdProduct: ()=> idProduct,  
        getName: ()=> name,  
        getSize: ()=> sizes,  
        getColor: ()=> color,  
        getBuyPrice: ()=> buyPrice,  
        getMinPrice: ()=> minPrice,  
        getDeliveryPrice: ()=> deliveryPrice 
      })
    }
  }
  

  