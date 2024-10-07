"use client";

import { Card } from "@/components/DataDisplay/Card";
import { Theme, Variant } from "@/interfaces/base/color";
import { defaultTheme, rgbStringToHex } from "@/utils/color";

export default function Page() {
  const colors = defaultTheme;

  function capitalizeFirstLetter(word: string) {
    if (!word) return ""; 
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {Object.entries(colors).map(([variant, value]) => (
        <Card
          title={capitalizeFirstLetter(variant)}
          key={variant}>
          <div className="flex flex-col gap-3">
            {Object.entries(value as Theme).map(([variantSub, value]) => (
              <div
                key={variantSub}
                className="p-3 rounded-btn text-white"
                style={{ backgroundColor: value }}>
                {capitalizeFirstLetter(variantSub)}
                <br />
                {rgbStringToHex(value)}
                <br />
                {value}
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
