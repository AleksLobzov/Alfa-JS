export default function times(value) {
  if (!value) {
    return NaN;
  } else {
    return { 'operation': 'multiplication', 'value': value };
  }
}
