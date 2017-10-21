export default function minus(value) {
  if (!value) {
    return NaN;
  } else {
    return { 'operation': 'subtraction', 'value': value };
  }
}
