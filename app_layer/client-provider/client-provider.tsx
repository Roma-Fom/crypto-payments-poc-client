"use client";
import { ConfigProvider, theme } from "antd";
import { memo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children: React.ReactNode;
};
const queryClient = new QueryClient();

const ClientProvider = ({ children }: Props) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ConfigProvider>
  );
};
export default memo(ClientProvider);
