export class BaseHelper {
  public static getByIdUri(baseUri: string, id: string): string {
    return baseUri + '/' + id;
  }

  public static getJquery(): any {
    return (window as any).$;
  }
}
