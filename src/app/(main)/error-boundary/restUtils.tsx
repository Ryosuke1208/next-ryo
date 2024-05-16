export class restUtils {
  static getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET",
    });

    if (res.ok) {
      throw new Error();
    }

    return res.json();
  };
}
