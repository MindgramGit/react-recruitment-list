import * as React from "react";

import { PageNavigationHeader } from "../shared/PageNavigationHeader";
import { Text } from "../shared/Text";

import * as s from "./NavigationLayout.styles";

export type NavigationItemProps = {
  title: string;
  id: string;
  isActive?: boolean;
  onClick: (id: string) => void;
};

function NavigationItem({ title, id, isActive, onClick }: NavigationItemProps) {
  return (
    <li key={id}>
      <s.NavLink as="button" onClick={() => onClick(id)} $active={!!isActive}>
        <s.NavLinkContent>
          <Text $size="large">{title}</Text>
        </s.NavLinkContent>
      </s.NavLink>
    </li>
  );
}

type NavigationLayoutProps = {
  title: string;
  items: readonly NavigationItemProps[];
  children?: React.ReactNode;
};

export function NavigationLayout({
  title,
  items,
  children,
}: NavigationLayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        paddingTop: "100px",
        flexFlow: "column nowrap",
      }}
    >
      <PageNavigationHeader title={title} />
      <s.Container>
        <s.Flex>
          <s.NavCard>
            <s.NavList>
              {items.map((item) => (
                <NavigationItem {...item} key={item.title} />
              ))}
            </s.NavList>
          </s.NavCard>
          <s.ContentCard>{children}</s.ContentCard>
        </s.Flex>
      </s.Container>
    </div>
  );
}
