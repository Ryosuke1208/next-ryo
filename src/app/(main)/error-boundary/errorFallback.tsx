import Link from "next/link";
import { FallbackProps } from "react-error-boundary";

const ErrorFallback = () => {
  return (
    <div>
      <h2>エラーが発生しました。</h2>
      <Link href="/">ホームへ戻る</Link>
    </div>
  );
};

export default ErrorFallback;
