export default function plus(value) {
  if (!value) {
    return NaN;
  } else {
    return { 'operation': 'addition', 'value': value };
  }
}
