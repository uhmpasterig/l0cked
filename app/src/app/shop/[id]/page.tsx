import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

import { GridContainer, GridItem } from "@/components/grid";
import { PageWrapper } from "@/containers/page/Wrapper";
import { getShopConfig } from "./actions/shop-config.actions";

export default function Shop({ params }: { params: { id: number } }) {
  const shopConfig = getShopConfig(params.id);
  if (!shopConfig) return null;

  return (
    <PageWrapper navbarItems={shopConfig.navbarItems} theme={shopConfig.theme}>
      <div className="relative w-full py-10 md:py-16 lg:py-24 flex flex-col items-center gap-4">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] block">
          {shopConfig.shopName}
        </h1>
        <h2 className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          {shopConfig.shopDescription}
        </h2>
      </div>
      <GridContainer className="w-full h-[30vh] gap-0 grid-cols-6 grid-rows-6">
        <GridItem className="col-span-2 row-span-5 rounded-none">
          <></>
        </GridItem>
        <GridItem className="col-span-2 row-span-5 rounded-none">
          <></>
        </GridItem>
        <GridItem className="col-span-2 row-span-5 rounded-none">
          <></>
        </GridItem>
      </GridContainer>
    </PageWrapper>
  );
}
