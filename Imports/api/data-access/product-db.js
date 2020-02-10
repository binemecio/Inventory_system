export default function makeProductDb ({ Product }) {
  return Object.freeze({
    findAll,
    insert,
    remove,
    update
  })

  async function findAll () {
    return await Product.findAll()
  }
  async function insert (product) {
    return await Product.create(product)
  }
  async function remove (id) {
    return await Product.destroy({
        where : {
          idProduct : {
            [Op.eq]: id
          }
        }
      }
    );
  }
  async function update (product) {
    return await Product.update(product, {
      where: {
        idProduct: product.idProduct
      }
    })
  }
  
}