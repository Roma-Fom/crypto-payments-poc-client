"use client";
import { useFetchVault } from "@/entities/vault";
import EmptyVault from "@/features/empty-vault";
import { cn } from "@/shared/lib";
import { Spin, Typography } from "antd";
import { memo } from "react";

type Props = {};
const Dashboard = ({}: Props) => {
  const { data, isError, isLoading } = useFetchVault();

  if (isError)
    return (
      <div className={cn("p-20")}>
        <Typography.Title level={1}>Error fetching vault</Typography.Title>
      </div>
    );
  if (isLoading) return <Spin size="large" fullscreen />;
  if (!data?.vault) return <EmptyVault />;
  console.log(data.vault);

  return (
    <div className={cn("p-20")}>
      <Typography.Title level={1}>Vault {data.vault.name}</Typography.Title>
      <Typography.Paragraph>
        <strong>Customer Id:</strong> {data.vault.customerRefId}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <strong>Auto fuel:</strong>{" "}
        {data.vault.autoFuel ? "Enabled" : "Disabled"}
      </Typography.Paragraph>
      <Typography.Title level={2}>Supported assets</Typography.Title>
      <ul>
        {data.vault.assets?.length ? (
          data.vault.assets?.map((asset) => (
            <li key={asset.id}>
              <Typography.Title level={3}>{asset.id}</Typography.Title>
              <Typography.Paragraph>
                <strong>Total:</strong> {asset.total}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <strong>Locked amount:</strong> {asset.lockedAmount}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <strong>Available:</strong> {asset.available}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <strong>Pending:</strong> {asset.pending}
              </Typography.Paragraph>
            </li>
          ))
        ) : (
          <Typography.Paragraph>
            No supported assets configured
          </Typography.Paragraph>
        )}
      </ul>
    </div>
  );
};
export default memo(Dashboard);
