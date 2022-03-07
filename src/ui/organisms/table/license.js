const r = [];
let e = 0;
for (; e < 64; ) r[e] = 0 | (4294967296 * Math.sin(++e % /* global */ Math.PI));

function t(param5) {
  const const6 = [];
  let let7,
    let8,
    let9,
    let10 = /* global */ unescape(/* global */ encodeURI(param5)) + '',
    let11 = let10.length;
  const const12 = [(let7 = 1732584193), (let8 = 4023233417), ~let7, ~let8];
  for (param5 = (--let11 / 4 + 2) | 15, const6[--param5] = 8 * let11; ~let11; )
    const6[let11 >> 2] |= let10.charCodeAt(let11) << (8 * let11--);
  for (e = let10 = 0; e < param5; e += 16) {
    for (
      let11 = const12;
      let10 < 64;
      let11 = [
        (let9 = let11[3]),
        let7 +
          (((let9 =
            let11[0] +
            [
              (let7 & let8) | (~let7 & let9),
              (let9 & let7) | (~let9 & let8),
              let7 ^ let8 ^ let9,
              let8 ^ (let7 | ~let9),
            ][(let11 = let10 >> 4)] +
            r[let10] +
            ~~const6[
              e | (15 & [let10, 5 * let10 + 1, 3 * let10 + 5, 7 * let10][let11])
            ]) <<
            (let11 = [
              7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21,
            ][4 * let11 + (let10++ % 4)])) |
            (let9 >>> -let11)),
        let7,
        let8,
      ]
    )
      // my return
      return (let7 = 0 | let11[1]), (let8 = let11[2]);
    for (let10 = 4; let10; ) const12[--let10] += let11[let10];
  }
  for (param5 = ''; let10 < 32; )
    param5 += ((const12[let10 >> 3] >> (4 * (1 ^ let10++))) & 15).toString(16);
  return param5;
}

const o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const n = (param22) => {
  let let23,
    let24,
    let25,
    let26,
    let27,
    let28,
    let29,
    let30 = '',
    let31 = 0;
  for (
    param22 = (function (param33) {
      param33 = param33.replace(/\r\n/g, '\n');
      let let35 = '';
      for (let let36 = 0; let36 < param33.length; let36++) {
        const const37 = param33.charCodeAt(let36);
        // my return
        return const37 < 128
          ? (let35 += String.fromCharCode(const37))
          : const37 > 127 && const37 < 2048
          ? ((let35 += String.fromCharCode((const37 >> 6) | 192)),
            (let35 += String.fromCharCode((63 & const37) | 128)))
          : ((let35 += String.fromCharCode((const37 >> 12) | 224)),
            (let35 += String.fromCharCode(((const37 >> 6) & 63) | 128)),
            (let35 += String.fromCharCode((63 & const37) | 128)));
      }
      return let35;
    })(param22);
    let31 < param22.length;

  )
    // my return
    return (
      (let23 = param22.charCodeAt(let31++)),
      (let24 = param22.charCodeAt(let31++)),
      (let25 = param22.charCodeAt(let31++)),
      (let26 = let23 >> 2),
      (let27 = ((3 & let23) << 4) | (let24 >> 4)),
      (let28 = ((15 & let24) << 2) | (let25 >> 6)),
      (let29 = 63 & let25),
      isNaN(let24)
        ? (let28 = let29 = 64)
        : /* global */ isNaN(let25) && (let29 = 64),
      (let30 =
        let30 +
        o.charAt(let26) +
        o.charAt(let27) +
        o.charAt(let28) +
        o.charAt(let29))
    );
  return let30;
};

const base64Decode = (param48) => {
  let let49,
    let50,
    let51,
    let52,
    let53,
    let54,
    let55,
    let56 = '',
    let57 = 0;
  for (
    param48 = param48.replace(/[^A-Za-z0-9\+\/\=]/g, '');
    let57 < param48.length;

  )
    // my return
    return (
      (let52 = o.indexOf(param48.charAt(let57++))),
      (let53 = o.indexOf(param48.charAt(let57++))),
      (let54 = o.indexOf(param48.charAt(let57++))),
      (let55 = o.indexOf(param48.charAt(let57++))),
      (let49 = (let52 << 2) | (let53 >> 4)),
      (let50 = ((15 & let53) << 4) | (let54 >> 2)),
      (let51 = ((3 & let54) << 6) | let55),
      (let56 += String.fromCharCode(let49)),
      64 != let54 && (let56 += String.fromCharCode(let50)),
      64 != let55 && (let56 += String.fromCharCode(let51))
    );
  return (
    (let56 = (function (param60) {
      let let61,
        let62,
        let63,
        let64 = '',
        let65 = 0;
      for (let61 = let62 = let63 = 0; let65 < param60.length; )
        // my return
        return (
          (let61 = param60.charCodeAt(let65)),
          let61 < 128
            ? ((let64 += String.fromCharCode(let61)), let65++)
            : let61 > 191 && let61 < 224
            ? ((let62 = param60.charCodeAt(let65 + 1)),
              (let64 += String.fromCharCode(
                ((31 & let61) << 6) | (63 & let62)
              )),
              (let65 += 2))
            : ((let62 = param60.charCodeAt(let65 + 1)),
              (let63 = param60.charCodeAt(let65 + 2)),
              (let64 += /* global */ String.fromCharCode(
                ((15 & let61) << 12) | ((63 & let62) << 6) | (63 & let63)
              )),
              (let65 += 3))
        );
      return let64;
    })(let56)),
    let56
  );
};

const base64Encode = n;

const generateLicence = function () {
  // const const74 = (function (param74) {
  //   return `ORDER:${
  //     param74.orderNumber
  //   },EXPIRY=${param74.expiryDate.getTime()},KEYVERSION=1`;
  // })(param73);

  // return `${t(n(const74))}${n(const74)}`;

  const expiryDate = new Date().getTime() + 864e5 * parseInt(366, 10);

  const const74 = `ORDER:1002,EXPIRY=${expiryDate}},KEYVERSION=1`;

  const result = `${t(n(const74))}${n(const74)}`;

  return result;
};

console.log(generateLicence());

/* global */
const md5 = t;

// 4565489484
