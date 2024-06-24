"use client";
import { cn } from "@/shared/lib";
import { Button, Empty, Typography } from "antd";
import { memo, useCallback, useTransition } from "react";

type Props = {};
const EmptyVault = ({}: Props) => {
  const [isLoading, startTransition] = useTransition();
  const handleCreate = useCallback(() => {}, []);
  return (
    <Empty
      className={cn("p-20")}
      description={
        <>
          <Typography.Paragraph>No Valut Found</Typography.Paragraph>
          <Button>Create New Vault</Button>
        </>
      }
    />
  );
};
export default memo(EmptyVault);
