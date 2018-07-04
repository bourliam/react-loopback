'use strict';

module.exports = function(Product) {
  Product.observe('before save', function(ctx, next) {
    if (ctx.instance && ctx.instance.categoryId) {
      return Product.app.models.Category.count({
        id: ctx.instance.categoryId,
      }).then(res => {
        if (res < 1) {
          return Promise.reject(
            'Error adding product to non-existing category'
          );
        }
      });
    }
    return next();
  });

  /**
   * Return True if input is larger than zero
   * @param {number} quantity Number to validate
   */
  const validQuantity = quantity => Boolean(quantity > 0);

  /**
   * Buy this product
   * @param {number} quantity Number of products to buy
   * @param {Function(Error, object)} callback
   */

  Product.prototype.buy = function(quantity, callback) {
    if (!validQuantity(quantity)) {
      return callback(`Invalid quantity ${quantity}`);
    }
    if (this.quantityLeft < quantity) {
      return callback(`Not enough stock ! Only ${this.quantityLeft} left!`);
    }

    Product.findById(this.id, (err, res) => {
      if (err) throw err;
      res.updateAttributes(
        {quantityLeft: this.quantityLeft - quantity},
        function(err, result) {
          if (err) throw err;
          const res = {
            status: `You bought ${quantity} product(s). ${
              result.quantityLeft
            } left.`,
          };
          callback(null, res);
        }
      );
    });
  };

  // Validate minimal length of name
  Product.validatesLengthOf('name', {
    min: 3,
    message: {min: 'Name should be at least 3 characters!'},
  });

  // Validate uniqueness of name
  Product.validatesUniquenessOf('name');

  const positiveInteger = /^[0-9]*$/;

  const validatePositiveInteger = function(err) {
    if (!positiveInteger.test(this.price)) {
      err();
    }
  };

  Product.validate('price', validatePositiveInteger, {
    message: 'Price should be a positive integer',
  });
};
