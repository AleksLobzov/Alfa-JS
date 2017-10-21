export default function dividedBy(value) {
  if (!value) {
    return NaN;
  } else {
    return { 'operation': 'division', 'value': value };
  }
}
