"use client";
import { login } from "@/features/login";
import { cn, isError } from "@/shared/lib";
import { Button, Typography } from "antd";
import { useRouter } from "next/navigation";
import { memo, useCallback, useTransition } from "react";

type Props = {};
const FakeLogin = ({}: Props) => {
  const [isLoading, startTransition] = useTransition();
  const navigate = useRouter();

  const handleLogin = useCallback(() => {
    startTransition(async () => {
      const result = await login("clx7rrzb40014jgae4v8r7zz7");
      if (isError(result)) {
        return alert(result.error.message);
      }
      return navigate.push("/dashboard");
    });
  }, [navigate]);
  return (
    <div className={cn("flex", "flex-col")}>
      <Typography.Title level={1}>Fake login</Typography.Title>
      <Button onClick={handleLogin} disabled={isLoading} type="primary">
        Login
      </Button>
    </div>
  );
};
export default memo(FakeLogin);
