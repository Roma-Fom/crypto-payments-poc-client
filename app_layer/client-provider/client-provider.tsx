"use client";
import { ConfigProvider, theme } from "antd";
import { memo } from "react";

type Props = {
  children: React.ReactNode;
};
const ClientProvider = ({ children }: Props) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
export default memo(ClientProvider);
