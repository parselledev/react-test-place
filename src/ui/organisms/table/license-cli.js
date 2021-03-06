'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('yargs'),
  r = require('./generateLicense-c091cf37.js');
function t(e) {
  if (e && e.__esModule) return e;
  var r = Object.create(null);
  return (
    e &&
      Object.keys(e).forEach(function (t) {
        if ('default' !== t) {
          var n = Object.getOwnPropertyDescriptor(e, t);
          Object.defineProperty(
            r,
            t,
            n.get
              ? n
              : {
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  },
                }
          );
        }
      }),
    (r.default = e),
    Object.freeze(r)
  );
}
var n = t(e);
exports.licenseGenCli = function () {
  n.command({
    command: '$0',
    describe: 'Generates Component.propTypes from TypeScript declarations',
    builder: (e) =>
      e
        .option('order', {
          default: '',
          describe: 'Order number id.',
          type: 'string',
        })
        .option('expiry', {
          default: '366',
          describe: 'Number of days from now until expiry date.',
          type: 'string',
        }),
    handler: (e) => {
      if (!e.order)
        throw new Error(
          'MUI: You forgot to pass an order number. $ > licensegen -o order_123.'
        );
      const t = {
        expiryDate: new Date(
          new Date().getTime() + 864e5 * parseInt(e.expiry, 10)
        ),
        orderNumber: e.order,
      };
      console.log(
        `Generating new license number for order ${
          t.orderNumber
        } with expiry date ${t.expiryDate.toLocaleDateString()}`
      );
      const n = r.generateLicence(t);
      console.log(`New license: \n${n}`);
    },
  })
    .help()
    .strict(!0)
    .version(!1)
    .parse();
};
