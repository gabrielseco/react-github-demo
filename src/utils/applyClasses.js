// @flow
export default function applyClasses(obj: any): string {
  return Object.keys(obj)
    .map((key: string) => {
      return obj[key] ? key : '';
    })
    .filter((item: string) => item !== '')
    .join(' ')
    .trim();
}
