/* Get arg */
let sig = `\\x${process.argv.slice(2).join(' ')}`;

/* Convert raw sig to signature */
let converted = sig.split(" ").join("\\x").split("?").join("00");

/* Get all individual parts of the raw sig */
let split = sig.split(" ");

/* Make the signature mask */
let mask = "";
split.forEach(string => {
    mask += string == "?" ? "?" : "x";
});

/* Log our converted data */
console.log(converted);
console.log(mask);